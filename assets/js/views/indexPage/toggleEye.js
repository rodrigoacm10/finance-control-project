class toggleEye {
  _valueMoney = document.querySelector(".value-money-primary");
  _valueToPay = document.querySelector(".to-pay-value");
  _valueToReceive = document.querySelector(".to-receive-value");
  _eyeBtn = document.querySelector(".eye-button");
  _eyeIconClose = document.querySelector(".eye-icon.close");
  _eyeIconOpen = document.querySelector(".eye-icon.open");

  addEventListenerEyeBtn() {
    this._eyeBtn.addEventListener(
      "click",
      this.functionEyeBtnToggle.bind(this)
    );
  }

  functionEyeBtnToggle() {
    this._eyeIconClose.classList.toggle("visible");
    this._eyeIconOpen.classList.toggle("visible");
    this._valueMoney.classList.toggle("hideValue");
    this._valueToPay.classList.toggle("hideValue");
    this._valueToReceive.classList.toggle("hideValue");
  }
}

export default new toggleEye();
