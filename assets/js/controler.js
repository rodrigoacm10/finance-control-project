import * as model from "./model.js";
import AddMovView from "./views/indexPage/addMovView.js";
import LoadPageInfoView from "./views/indexPage/loadPageInfoView.js";
import toggleEye from "./views/indexPage/toggleEye.js";
import ShowCorrectFunc from "./views/indexPage/showCorrectFunc.js";
import addMovView from "./views/indexPage/addMovView.js";
import ValuesRender from "./views/indexPage/valuesRender.js";
import valuesRender from "./views/indexPage/valuesRender.js";

const controlerLoadPage = function () {
  model.state.currentAccountIndex = LoadPageInfoView.getAccIndex();
  model.state.currentAccount =
    model.state.accounts[model.state.currentAccountIndex];
  const account = model.state.currentAccount;
  console.log(model.state.currentAccountIndex);
  console.log(account);
  LoadPageInfoView.addInformations(account);
  LoadPageInfoView.addMoviments(account);
};

// Toda vez que se apertar no botao de addum movimento vai ser retornado undefined

// vou retornar o valor do mov pra cá, e dps somar cm o cruAcconut (antes preciso saber se ele já foi pago ou recebido, posso usar o movOng pra isso)

// criar uma funcção que vai receber data.totalvalue e vai atualizar o textcontet

const addMovToArr = function (situation, obj) {
  if (situation === "recebido" || situation === "pago") {
    model.addMovimentRealizedToState(model.state.currentAccountIndex, obj);
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
  } else if (situation === "a pagar") {
    model.addMovimentToPayToState(model.state.currentAccountIndex, obj);
    console.log("abc");
  }
};

const controlerAddMovRevenue = function () {
  console.log("afg");

  // model.state.currentAccount.moviments.push({ tesas: "a" });
  // model.addMovimentToState(model.state.currentAccountIndex, { test: "ok" });

  const movObj = AddMovView.functionAddBtnRevenue();
  model.addMovimentToState(model.state.currentAccountIndex, movObj);

  addMovToArr(movObj.situation, movObj);

  console.log("------", model.state.currentAccount);
};

const controlerAddMovExpense = function () {
  console.log("azxcg");

  // model.state.currentAccount.moviments.push({ tesas: "a" });
  // model.addMovimentToState(model.state.currentAccountIndex, { test: "ok" });

  const movObj = AddMovView.functionAddBtnExpense();
  model.addMovimentToState(model.state.currentAccountIndex, movObj);

  addMovToArr(movObj.situation, movObj);

  console.log("------", model.state.currentAccount);
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
