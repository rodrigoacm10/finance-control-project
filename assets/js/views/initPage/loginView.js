class LoginView {
  //   _parent = document.querySelector("");
  _btnSingIn = document.querySelector(".btn-sing-in");
  _userInput = document.querySelector(".user-input");
  _passwordInput = document.querySelector(".password-input");

  loginBtn(handler) {
    this._btnSingIn.addEventListener("click", function (e) {
      e.preventDefault();
      handler();
    });
  }

  loginBtnFunction() {
    return [this._userInput.value, this._passwordInput.value];
  }
  movToIndexPage(indexAcc) {
    // window.location.href = `index.html?parametro1=${indexAcc}`;
    window.location.href = `init.html?parametro1=${indexAcc}`;
  }
}

export default new LoginView();
