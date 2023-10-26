import * as model from "./model.js";
import CreateAccView from "./views/initPage/createAccView.js";

const controlRegistring = function () {
  if (model.onlyGetLocal()) {
    Object.assign(model.state, model.onlyGetLocal());
  }

  // console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
  // console.log(model.state.accounts);
  // console.log(model.state.accounts[2]);
  // console.log(model.state.accounts.length);
  // console.log(model.state.accounts[model.state.accounts.length]);

  if (!CreateAccView.verifyAllInputs()) {
    return;
  }

  if (!CreateAccView.verifyEmail()) {
    return;
  }

  if (!CreateAccView.verifyConfirmPassword()) {
    return;
  }

  CreateAccView.initPageAndCreatingAcc(model.state.accounts.length);
};

const initPageInit = function () {
  //   CreateAccView.registring(tesat);
  CreateAccView.registBtn(controlRegistring);
};
initPageInit();
