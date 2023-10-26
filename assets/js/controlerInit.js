import * as model from "./model.js";
import LoginView from "./views/initPage/loginView.js";

const controlGetUserAndPass = function () {
  // try {
  // model.state = model.onlyGetLocal();
  model.onlyGetLocal();
  console.log(model.state);
  if (model.onlyGetLocal()) {
    Object.assign(model.state, model.onlyGetLocal());
  }

  console.log(model.state);
  console.log(model.state.accounts[3]);

  const data = LoginView.loginBtnFunction();

  model.findIndexAccout(data);

  if (model.state.currentAccountIndex != -1) {
    LoginView.movToIndexPage(model.state.currentAccountIndex);
  } else {
    // throw new Error("Não é possível dividir por zero");
  }
  // } catch (err) {
  //   console.error(err.message);
  // }
};

const initPageInit = function () {
  LoginView.loginBtn(controlGetUserAndPass);
};
initPageInit();
