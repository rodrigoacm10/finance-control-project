class LoginView {
  _btnSingIn = document.querySelector(".btn-sing-in");
  _userInput = document.querySelector(".user-input");
  _passwordInput = document.querySelector(".password-input");
  _errorToFind = document.querySelector(".error-p");

  findAcc() {
    this._userInput.classList.remove("error-to-cofirm-2");
    this._passwordInput.classList.remove("error-to-cofirm-2");
    this._errorToFind.classList.add("hidden");
  }

  errorNotFindAcc() {
    this._userInput.classList.add("error-to-cofirm-2");
    this._passwordInput.classList.add("error-to-cofirm-2");
    this._errorToFind.classList.remove("hidden");
  }

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
    window.location.href = `init.html?parametro1=${indexAcc}`;
  }
}

export default new LoginView();
