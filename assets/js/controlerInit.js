import * as model from "./model.js";
import LoginView from "./views/initPage/loginView.js";

const controlGetUserAndPass = function () {
  try {
    const data = LoginView.loginBtnFunction();
    console.log(data);
    model.findIndexAccout(data);
    console.log(model.state.currentAccountIndex);

    if (model.state.currentAccountIndex != -1) {
      LoginView.movToIndexPage(model.state.currentAccountIndex);
    } else {
      throw new Error("Não é possível dividir por zero");
    }
  } catch (err) {
    console.error(err.message);
  }
};

const initPageInit = function () {
  LoginView.loginBtn(controlGetUserAndPass);
  // console.log(LoginView.loginBtn());
};
initPageInit();
