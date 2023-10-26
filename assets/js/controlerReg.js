import * as model from "./model.js";
import CreateAccView from "./views/initPage/createAccView.js";

// const tesat = function () {
//   const a = "bla";
//   console.log("asdacccccc");
//   console.log(a);
// };

const controlRegistring = function () {
  console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
  console.log(model.state.accounts);
  console.log(model.state.accounts[2]);
  console.log(model.state.accounts.length);
  console.log(model.state.accounts[model.state.accounts.length]);

  if (!CreateAccView.verifyAllInputs()) {
    return;
  }

  if (!CreateAccView.verifyEmail()) {
    return;
  }

  //   tem algum problema aki
  if (!CreateAccView.verifyConfirmPassword()) {
    return;
  }

  CreateAccView.initPageAndCreatingAcc(model.state.accounts.length);

  //   CreateAccView.movToIndexPage(1);
  //   try {
  // const data = CreateAccView.loginBtnFunction();
  // model.findIndexAccout(data);
  // if (model.state.currentAccountIndex != -1) {
  //   CreateAccView.movToIndexPage(model.state.currentAccountIndex);
  // } else {
  //   throw new Error("Não é possível dividir por zero");
  // }
  //   } catch (err) {
  // console.error(err.message);
  //   }
};

const initPageInit = function () {
  //   CreateAccView.registring(tesat);
  CreateAccView.registBtn(controlRegistring);
};
initPageInit();
