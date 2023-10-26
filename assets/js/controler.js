import * as model from "./model.js";
import AddMovView from "./views/indexPage/addMovView.js";
import LoadPageInfoView from "./views/indexPage/loadPageInfoView.js";
import toggleEye from "./views/indexPage/toggleEye.js";
import ShowCorrectFunc from "./views/indexPage/showCorrectFunc.js";
import addMovView from "./views/indexPage/addMovView.js";
import ValuesRender from "./views/indexPage/valuesRender.js";
import valuesRender from "./views/indexPage/valuesRender.js";
import RemoveMov from "./views/indexPage/removeMov.js";
import FillMovs from "./views/indexPage/fillMovs.js";
import GetOutView from "./views/indexPage/getOutView.js";
import loadPageInfoView from "./views/indexPage/loadPageInfoView.js";

import GraphView from "./views/indexPage/graphView.js";
import AddCategoryView from "./views/indexPage/addCategoryView.js";

const controlerGetOutAcc = function () {
  GetOutView.removeMovsContainer();

  GetOutView.toggleBody();

  setTimeout(() => GetOutView.moveToInitPage(), 500);
};

const controlerLoadPage = function () {
  const { indexAcc, name, surname, email, password, confirmPassword } =
    LoadPageInfoView.getAccIndex();

  if (model.onlyGetLocal()) {
    Object.assign(model.state, model.onlyGetLocal());
  }

  console.log(model.state);

  if (!model.state.accounts[indexAcc]) {
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
    model.state.accounts.push({
      userEmail: email,
      password: password,
      moviments: [],
      username: [name, surname].join(" "),
      userImage: "assets/img/desconhecido.jpg",
      totalValue: 0,
      valueToPay: 0,
      valueToReceive: 0,
      movimentsRealized: [],
      movimentsRecived: [],
      movimentsPaid: [],
      movimentsToRecive: [],
      movimentsToPay: [],
    });
  }
  console.log(model.state);

  model.state.currentAccountIndex = indexAcc;
  model.state.currentAccount =
    model.state.accounts[model.state.currentAccountIndex];
  const account = model.state.currentAccount;
  console.log(account);

  LoadPageInfoView.addInformations(account);
  LoadPageInfoView.addMoviments(account);

  RemoveMov.addHandlerRomveMov(controlRemoveMov);
  LoadPageInfoView.verifingMovsArr(
    model.state.currentAccount.movimentsToPay,
    model.state.currentAccount.movimentsToRecive
  );
};

const addMovToArr = function (situation, obj) {
  if (situation === "recebido" || situation === "pago") {
    model.addMovimentRealizedToState(model.state.currentAccountIndex, obj);

    model.state.currentAccount.totalValue = ValuesRender.attTotalvalue(
      obj.value
    );
    model.saveAllAccountsInfos();
  }

  if (situation === "recebido") {
    model.addMovimentReceivedToState(model.state.currentAccountIndex, obj);
    model.saveAllAccountsInfos();
  } else if (situation === "pago") {
    model.addMovimentPaidToState(model.state.currentAccountIndex, obj);
    model.saveAllAccountsInfos();
  } else if (situation === "a receber") {
    model.addMovimentToReceiveToState(model.state.currentAccountIndex, obj);

    model.state.currentAccount.valueToReceive = ValuesRender.attToReceiveValue(
      obj.value
    );
    model.saveAllAccountsInfos();
  } else if (situation === "a pagar") {
    model.addMovimentToPayToState(model.state.currentAccountIndex, obj);

    model.state.currentAccount.valueToPay = ValuesRender.attToPayValue(
      obj.value
    );
    model.saveAllAccountsInfos();
  }
};

const controlerAddMovRevenue = function () {
  const movObj = AddMovView.functionAddBtnRevenue();
  if (!movObj) return;
  model.addMovimentToState(model.state.currentAccountIndex, movObj);

  addMovToArr(movObj.situation, movObj);

  RemoveMov.addHandlerRomveMov(controlRemoveMov);
  GraphView.addMovsToGraphAllMov(model.state.currentAccount.moviments);
  model.saveAllAccountsInfos();
};

const controlerAddMovExpense = function () {
  const movObj = AddMovView.functionAddBtnExpense();
  if (!movObj) return;
  model.addMovimentToState(model.state.currentAccountIndex, movObj);

  addMovToArr(movObj.situation, movObj);

  RemoveMov.addHandlerRomveMov(controlRemoveMov);
  GraphView.addMovsToGraphAllMov(model.state.currentAccount.moviments);
  model.saveAllAccountsInfos();
};

const thorowBackMoney = function (
  geral,
  realized,
  paid,
  received,
  toPay,
  toReceive
) {
  if (realized) {
    model.throwTotalValue(model.state.currentAccountIndex, realized);
    model.saveAllAccountsInfos();
  } else if (toPay) {
    model.throwToPayValue(model.state.currentAccountIndex, toPay);
    model.saveAllAccountsInfos();
  } else if (toReceive) {
    model.throwToReceiveValue(model.state.currentAccountIndex, toReceive);
    model.saveAllAccountsInfos();
  }
  model.saveAllAccountsInfos();
};

const controlRemoveMov = function (movElement) {
  console.log("--------", movElement);
  const idControl = RemoveMov.removingMov(movElement);
  console.log(idControl);

  const indexMovGeral = model.state.currentAccount.moviments.findIndex(
    (el) => el.id == idControl
  );

  const movimentsRealized =
    model.state.currentAccount.movimentsRealized.findIndex(
      (el) => el.id == idControl
    );

  const indexMovPaid = model.state.currentAccount.movimentsPaid.findIndex(
    (el) => el.id == idControl
  );

  const indexMovReceived =
    model.state.currentAccount.movimentsRecived.findIndex(
      (el) => el.id == idControl
    );

  const indexMovToPay = model.state.currentAccount.movimentsToPay.findIndex(
    (el) => el.id == idControl
  );

  const indexMovToReceive =
    model.state.currentAccount.movimentsToRecive.findIndex(
      (el) => el.id == idControl
    );

  const test1 = model.removingMovGeral(
    model.state.currentAccountIndex,
    indexMovGeral
  );

  const test2 = model.removingMovRealized(
    model.state.currentAccountIndex,
    movimentsRealized
  );

  const test3 = model.removingMovPaid(
    model.state.currentAccountIndex,
    indexMovPaid
  );

  const test4 = model.removingMovReceived(
    model.state.currentAccountIndex,
    indexMovReceived
  );

  const test5 = model.removingMovToPay(
    model.state.currentAccountIndex,
    indexMovToPay
  );

  const test6 = model.removingMovToReceive(
    model.state.currentAccountIndex,
    indexMovToReceive
  );

  console.log(thorowBackMoney);
  thorowBackMoney(test1, test2, test3, test4, test5, test6);

  RemoveMov.clearAllContainer();
  controlerLoadPage();
  GraphView.addMovsToGraphAllMov(model.state.currentAccount.moviments);
  model.saveAllAccountsInfos();
};

const controlFilters = function () {
  FillMovs.fillFunction(model.state.currentAccount.moviments);
  RemoveMov.addHandlerRomveMov(controlRemoveMov);
};

const controlGraph = function () {
  GraphView.addGraph(model.state.currentAccount.moviments);
};

const init = function () {
  GetOutView.addHandlerBtnsModel();
  AddMovView.showDataInput();
  addMovView.showDataInputExpense();
  FillMovs.addHandlerInputs(controlFilters);
  LoadPageInfoView.addHandlerLoadPage(controlerLoadPage);
  toggleEye.addEventListenerEyeBtn();
  ShowCorrectFunc.handlerRevenue();
  ShowCorrectFunc.handlerExpense();
  AddMovView.handlerAddBtnRevenueFunction(controlerAddMovRevenue);
  AddMovView.handlerAddBtnExpenseFunction(controlerAddMovExpense);
  valuesRender.consoleValues();
  GetOutView.addHandlerGetOutAcc(controlerGetOutAcc);
  GetOutView.viewNavBarMobile();
  GetOutView.closeNavBarMobile();
  GraphView.addGraphHandler(controlGraph);
  AddCategoryView.addHandlerBtnsModel();
};
init();
