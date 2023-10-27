import * as model from "./model.js";
import CreateAccView from "./views/initPage/createAccView.js";

const controlRegistring = function () {
  if (model.onlyGetLocal()) {
    Object.assign(model.state, model.onlyGetLocal());
  }

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
  CreateAccView.registBtn(controlRegistring);
};
initPageInit();
