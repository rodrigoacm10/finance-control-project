class toggleEye {
    _valueMoney = document.querySelector(".value-money-primary");
    _eyeBtn = document.querySelector(".eye-button");
    _eyeIconClose = document.querySelector(".eye-icon.close");
    _eyeIconOpen = document.querySelector(".eye-icon.open");
    
    addEventListenerEyeBtn() {
     this._eyeBtn.addEventListener("click", this.functionEyeBtnToggle.bind(this));
    }

    functionEyeBtnToggle() {
        this._eyeIconClose.classList.toggle("visible");
        this._eyeIconOpen.classList.toggle("visible");
        this._valueMoney.classList.toggle("hideValue");
    }
  }
  
  export default new toggleEye();
  