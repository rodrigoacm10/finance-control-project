class ShowCorrectFunc {
  _btnRevenue = document.querySelector(".add-mov-function-revenue");
  _btnExpense = document.querySelector(".add-mov-function-expense");
  _btnKept = document.querySelector(".add-mov-function-kept");
  _revenueBox = document.querySelector(".add-mov-action-revenue");
  _expenseBox = document.querySelector(".add-mov-action-expense");

  handlerRevenue() {
    this._btnRevenue.addEventListener("click", this.revenueFunction.bind(this));
  }

  revenueFunction() {
    if (!this._expenseBox.classList.contains("hidden"))
      this._expenseBox.classList.toggle("hidden");
    this._revenueBox.classList.toggle("hidden");
  }

  handlerExpense() {
    this._btnExpense.addEventListener("click", this.expenseFunction.bind(this));
  }

  expenseFunction() {
    if (!this._revenueBox.classList.contains("hidden"))
      this._revenueBox.classList.toggle("hidden");
    this._expenseBox.classList.toggle("hidden");
  }
}

export default new ShowCorrectFunc();
