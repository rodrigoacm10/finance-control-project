class LoginView {
  //   _parent = document.querySelector("");
  _btnSingIn = document.querySelector(".btn-sing-in");
  _userInput = document.querySelector(".user-input");
  _passwordInput = document.querySelector(".password-input");

  test() {
    console.log("a");
  }

  // loginBtn() {
  //   this._btnSingIn.addEventListener("click", this.loginBtnFunction.bind(this));
  // }

  // loginBtnFunction(e) {
  //   console.log(e);
  //   console.log("oook");
  //   console.log(this._userInput.value);
  //   console.log(this._passwordInput.value);
  //   window.location.replace("index.html");
  //   console.log([this._userInput.value, this._passwordInput.value]);
  //   return [this._userInput.value, this._passwordInput.value];
  // }

  loginBtn(handler) {
    this._btnSingIn.addEventListener("click", function (e) {
      e.preventDefault();
      handler();
    });
  }

  loginBtnFunction() {
    // console.log(e);
    // console.log(this._userInput.value);
    // console.log(this._passwordInput.value);
    // window.location.replace("index.html");
    // console.log([this._userInput.value, this._passwordInput.value]);
    return [this._userInput.value, this._passwordInput.value];
  }
  movToIndexPage(indexAcc) {
    window.location.href = `index.html?parametro1=${indexAcc}`;
    // window.location.href = `index.html?parametro1=${indexAcc}&parametro2=valor2`;
    // window.location.replace("index.html");
  }
}

export default new LoginView();
