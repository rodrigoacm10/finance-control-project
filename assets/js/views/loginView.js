class LoginView {
  //   _parent = document.querySelector("");
  _btnSingIn = document.querySelector(".btn-sing-in");
  _userInput = document.querySelector(".user-input");
  _passwordInput = document.querySelector(".password-input");

  test() {
    console.log("a");
  }

  loginBtn() {
    this._btnSingIn.addEventListener("click", this.loginBtnFunction.bind(this));
  }

  loginBtnFunction(e) {
    console.log(e);
    console.log("oook");
    console.log(this._userInput.value);
    console.log(this._passwordInput.value);
    // window.location.replace("index.html");
    return [this._userInput.value, this._passwordInput.value];
  }
}

export default new LoginView();
