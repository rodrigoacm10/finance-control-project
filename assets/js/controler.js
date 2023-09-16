import * as model from "./model.js";
import AddMovView from "./views/indexPage/addMovView.js";
import LoadPageInfoView from "./views/indexPage/loadPageInfoView.js";

const controlerLoadPage = function () {
  model.state.currentAccountIndex = LoadPageInfoView.getAccIndex();
  model.state.currentAccount =
    model.state.accounts[model.state.currentAccountIndex];
  const account = model.state.currentAccount;
  console.log(model.state.currentAccountIndex);
  console.log(account);
  LoadPageInfoView.addInformations(account);
};

const init = function () {
  AddMovView.showDataInput();
  AddMovView.addBtnFunction();
  // console.log(model.state.currentAccount);
  console.log(model.state);
  LoadPageInfoView.addHandlerLoadPage(controlerLoadPage);
};
init();
