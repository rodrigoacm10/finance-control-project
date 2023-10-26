class CreateAccView {
  _loginPage = document.querySelector(".login-section");
  _loginBtnCreateAcc = document.querySelector(".create-acc");
  _nameInput = document.getElementById("input-name");
  _surnameInput = document.getElementById("input-surname");
  _emailInput = document.getElementById("input-email");
  _passwordInput = document.getElementById("input-password");
  _confirmPasswordInput = document.getElementById("input-password-confirm");
  _btnRegist = document.querySelector(".form-btn");
  _errorConfirmPassword = document.querySelector(".error-to-cofirm");
  _errorEmail = document.querySelector(".error-to-email");
  _formElement = document.querySelector(".form-container");
  _errorNoFilled = document.querySelector(".error-no-filled");

  //  vai fzr a sm coisa de login View, só q passando os valores dos inputs do formulário

  // registring(a) {
  //   this._btnRegist.addEventListener("click", function () {
  //     console.log("asadaa");
  //     console.log(this._formElement);
  //     a();
  //   });
  // }

  //   error-no-filled

  // error-to-cofirm-2

  verifyFill(inputEl) {
    console.log(inputEl.value);
    if (inputEl.value == "") {
      console.log("não t[a preenchido ");
      inputEl.classList.add("error-to-cofirm-2");
      this._errorNoFilled.classList.remove("hidden");
      return false;
    } else {
      inputEl.classList.remove("error-to-cofirm-2");
      this._errorNoFilled.classList.add("hidden");
      return true;
    }
  }

  verifyAllInputs() {
    const nameInput = this.verifyFill(this._nameInput);
    const surnameInput = this.verifyFill(this._surnameInput);
    const emailInput = this.verifyFill(this._emailInput);
    const passwordInput = this.verifyFill(this._passwordInput);
    const confirmPasswordInput = this.verifyFill(this._confirmPasswordInput);
    if (
      nameInput &&
      surnameInput &&
      emailInput &&
      passwordInput &&
      confirmPasswordInput
    ) {
      return true;
    } else {
      return false;
    }
  }

  verifyEmail() {
    // this.verifyFill(this._emailInput);
    const emailStr = this._emailInput.value;
    const emailVerifyProviderFirstValid = this._emailInput.value.split("@");
    const emailVerifyProviderSecondValid = emailVerifyProviderFirstValid[1]
      ? emailVerifyProviderFirstValid[1].split(".com")
      : false;

    const emailArroba = emailStr.includes("@");
    const emailCom = emailStr.includes(".com");
    console.log(
      emailStr,
      emailArroba,
      emailCom,
      emailVerifyProviderFirstValid,
      emailVerifyProviderSecondValid
    );
    // .length === 2
    if (!emailArroba || !emailCom || emailVerifyProviderSecondValid[0] == "") {
      this._emailInput.classList.add("error-to-cofirm-2");
      this._errorEmail.classList.remove("hidden");
      return false;
    } else {
      this._emailInput.classList.remove("error-to-cofirm-2");
      this._errorEmail.classList.add("hidden");
      return true;
    }
  }

  // toggleConfirmPassword() {
  //   this._confirmPasswordInput.classList.toggle("error-to-cofirm-2");
  //   this._errorConfirmPassword.classList.toggle("hidden");
  // }

  verifyConfirmPassword() {
    // console.log(this._passwordInput.value, this._confirmPasswordInput.value);
    // console.log("a@gmail.com".includes("@"));

    if (this._passwordInput.value != this._confirmPasswordInput.value) {
      this._confirmPasswordInput.classList.add("error-to-cofirm-2");
      this._errorConfirmPassword.classList.remove("hidden");
      return false;
    } else {
      this._confirmPasswordInput.classList.remove("error-to-cofirm-2");
      this._errorConfirmPassword.classList.add("hidden");
      return true;
    }
  }

  initPageAndCreatingAcc(indexAcc) {
    // window.location.href = `index.html?parametro1=${indexAcc}`;
    // passar os parametros index nome sobrenome senha email
    // window.location.href = `init.html?parametro1=${indexAcc}?parametro2=teste`;
    window.location.href = `init.html?parametro1=${indexAcc}&parametro2=teste&name=${this._nameInput.value}&surname=${this._surnameInput.value}&email=${this._emailInput.value}&password=${this._passwordInput.value}&confirmpassword=${this._confirmPasswordInput.value}`;
  }

  registBtn(handler) {
    this._btnRegist.addEventListener("click", function (e) {
      e.preventDefault();
      handler();
    });
  }

  loginBtnFunction() {
    return [this._userInput.value, this._passwordInput.value];
  }
}

export default new CreateAccView();
