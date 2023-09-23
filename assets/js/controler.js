import * as model from "./model.js";
import AddMovView from "./views/indexPage/addMovView.js";
import LoadPageInfoView from "./views/indexPage/loadPageInfoView.js";
import toggleEye from "./views/indexPage/toggleEye.js";
import ShowCorrectFunc from "./views/indexPage/showCorrectFunc.js";
import addMovView from "./views/indexPage/addMovView.js";

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

const controlerAddMovExpense = function () {
  console.log("afg");

  // model.state.currentAccount.moviments.push({ tesas: "a" });
  // model.addMovimentToState(model.state.currentAccountIndex, { test: "ok" });

  const movObj = AddMovView.functionAddBtnExpense();
  model.addMovimentToState(model.state.currentAccountIndex, movObj);

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
  AddMovView.handlerAddBtnExpenseFunction(controlerAddMovExpense);
};
init();
