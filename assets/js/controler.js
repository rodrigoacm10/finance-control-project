import * as model from "./model.js";
import AddMovView from "./views/indexPage/addMovView.js";
import LoadPageInfoView from "./views/indexPage/loadPageInfoView.js";
import toggleEye from "./views/indexPage/toggleEye.js";
import ShowCorrectFunc from "./views/indexPage/showCorrectFunc.js";
import addMovView from "./views/indexPage/addMovView.js";
import ValuesRender from "./views/indexPage/valuesRender.js";
import valuesRender from "./views/indexPage/valuesRender.js";
import RemoveMov from "./views/indexPage/removeMov.js";

const controlerLoadPage = function () {
  model.state.currentAccountIndex = LoadPageInfoView.getAccIndex();
  model.state.currentAccount =
    model.state.accounts[model.state.currentAccountIndex];
  const account = model.state.currentAccount;
  console.log(model.state.currentAccountIndex);
  console.log(account);
  LoadPageInfoView.addInformations(account);
  LoadPageInfoView.addMoviments(account);

  RemoveMov.addHandlerRomveMov(controlRemoveMov);
};

// Toda vez que se apertar no botao de addum movimento vai ser retornado undefined

// vou retornar o valor do mov pra cá, e dps somar cm o cruAcconut (antes preciso saber se ele já foi pago ou recebido, posso usar o movOng pra isso)

// criar uma funcção que vai receber data.totalvalue e vai atualizar o textcontet

const addMovToArr = function (situation, obj) {
  if (situation === "recebido" || situation === "pago") {
    model.addMovimentRealizedToState(model.state.currentAccountIndex, obj);
    console.log(model.state.currentAccount);
    model.state.currentAccount.totalValue = ValuesRender.attTotalvalue(
      obj.value
    );
    console.log(model.currentAccount);
  }

  if (situation === "recebido") {
    model.addMovimentReceivedToState(model.state.currentAccountIndex, obj);
    console.log("ou yeeees");
  } else if (situation === "pago") {
    model.addMovimentPaidToState(model.state.currentAccountIndex, obj);
    console.log("a");
  } else if (situation === "a receber") {
    model.addMovimentToReceiveToState(model.state.currentAccountIndex, obj);
    console.log("ab");
    model.state.currentAccount.valueToReceive = ValuesRender.attToReceiveValue(
      obj.value
    );
  } else if (situation === "a pagar") {
    model.addMovimentToPayToState(model.state.currentAccountIndex, obj);
    console.log("abc");
    model.state.currentAccount.valueToPay = ValuesRender.attToPayValue(
      obj.value
    );
    // valuesRender
  }
};

const controlerAddMovRevenue = function () {
  console.log("afg");

  // model.state.currentAccount.moviments.push({ tesas: "a" });
  // model.addMovimentToState(model.state.currentAccountIndex, { test: "ok" });

  const movObj = AddMovView.functionAddBtnRevenue();
  model.addMovimentToState(model.state.currentAccountIndex, movObj);

  addMovToArr(movObj.situation, movObj);
  // const test =

  console.log("------", model.state.currentAccount);

  RemoveMov.addHandlerRomveMov(controlRemoveMov);
};

const controlerAddMovExpense = function () {
  console.log("azxcg");

  // model.state.currentAccount.moviments.push({ tesas: "a" });
  // model.addMovimentToState(model.state.currentAccountIndex, { test: "ok" });

  const movObj = AddMovView.functionAddBtnExpense();
  model.addMovimentToState(model.state.currentAccountIndex, movObj);

  addMovToArr(movObj.situation, movObj);

  console.log("------", model.state.currentAccount);

  RemoveMov.addHandlerRomveMov(controlRemoveMov);
};

const controlRemoveMov = function (movElement) {
  const idControl = RemoveMov.removingMov(movElement);

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

  console.log(indexMovGeral);
  console.log(movimentsRealized);
  console.log(indexMovPaid);
  console.log(indexMovReceived);
  console.log(indexMovToPay);
  console.log(indexMovToReceive);
  model.removingMovGeral(model.state.currentAccountIndex, indexMovGeral);

  model.removingMovRealized(model.state.currentAccountIndex, movimentsRealized);

  model.removingMovPaid(model.state.currentAccountIndex, indexMovPaid);

  model.removingMovReceived(model.state.currentAccountIndex, indexMovReceived);

  model.removingMovToPay(model.state.currentAccountIndex, indexMovToPay);

  model.removingMovToReceive(
    model.state.currentAccountIndex,
    indexMovToReceive
  );

  console.log(model.state.currentAccount);
  RemoveMov.clearAllContainer();
  controlerLoadPage();
};

const init = function () {
  AddMovView.showDataInput();
  addMovView.showDataInputExpense();
  // AddMovView.addBtnExpenseFunction();
  // console.log(model.state.currentAccount);
  console.log(model.state);
  LoadPageInfoView.addHandlerLoadPage(controlerLoadPage);
  toggleEye.addEventListenerEyeBtn();
  ShowCorrectFunc.handlerRevenue();
  ShowCorrectFunc.handlerExpense();
  AddMovView.handlerAddBtnRevenueFunction(controlerAddMovRevenue);
  AddMovView.handlerAddBtnExpenseFunction(controlerAddMovExpense);
  valuesRender.consoleValues();
};
init();
