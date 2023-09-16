class AddMovView {
  _parent = document.querySelector(".add-mov-action");
  _btnMov = document.querySelector(".btn-add-mov");
  _btnDataSelect = document.getElementById("select-data");
  _btnDataInput = document.getElementById("input-data");
  _btnSituation = document.getElementById("situation-form-input");
  _btnValue = document.getElementById("value-form-input");
  _btnCategorySelect = document.getElementById("select-category");
  _btnDescription = document.getElementById("description-form-input");

  addBtnFunction() {
    this._btnMov.addEventListener("click", this.functionAddBtn.bind(this));
  }

  showDataInput() {
    this._btnDataSelect.addEventListener(
      "input",
      this.functionShowData.bind(this)
    );
  }

  functionAddBtn(e) {
    console.log("yes");
    console.log(this);
    console.log(this._btnDataSelect.value);
    console.log(this._btnDataInput.value);
    console.log(this._btnSituation.textContent);
    console.log(this._btnValue.value);
    console.log(this._btnCategorySelect.value);
    console.log(this._btnDescription.value);
  }

  functionShowData() {
    // console.log("ok");
    // console.log(this);
    this._btnDataInput.classList.toggle("hidden");
    this._btnSituation.classList.toggle("to-recive");
    this._btnDataSelect.value === "today"
      ? (this._btnSituation.textContent = "recebido")
      : (this._btnSituation.textContent = "a receber");
  }
}

export default new AddMovView();
