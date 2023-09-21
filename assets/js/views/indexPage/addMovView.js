import View from "./view.js";

class AddMovView extends View {
  _movimentsContainer = document.querySelector(".extract-mov-container");
  _parent = document.querySelector(".add-mov-action");
  _btnMovRevenue = document.querySelector(".btn-add-mov-revenue");
  _btnDataSelect = document.querySelector(".select-data-revenue");
  _btnDataInput = document.querySelector(".input-data-revenue");
  _btnSituation = document.querySelector(".situation-form-input-revenue");
  _btnValue = document.querySelector(".value-form-input-revenue");
  _btnCategorySelect = document.querySelector(".select-category-revenue");
  _btnDescription = document.querySelector(".description-form-input-revenue");

  // EXPENSE ELEMENTS
  _btnMovExpense = document.querySelector(".btn-add-mov-expense");
  _btnDataSelectExpense = document.querySelector(".select-data-expense");
  _btnDataInputExpense = document.querySelector(".input-data-expense");
  _btnSituationExpense = document.querySelector(
    ".situation-form-input-expense"
  );
  _btnValueExpense = document.querySelector(".value-form-input-expense");
  _btnCategorySelectExpense = document.querySelector(
    ".select-category-expense"
  );
  _btnDescriptionExpense = document.querySelector(
    ".description-form-input-expense"
  );

  handlerAddBtnExpenseFunction(handler) {
    this._btnMovRevenue.addEventListener(
      "click",
      function (e) {
        e.preventDefault();
        handler();
      }

      // this.functionAddBtn.bind(this)
    );
  }

  getDataFormat() {
    let day = " ";
    let month = " ";
    let year = " ";

    if (this._btnDataSelect.value === "today") {
      [year, month, day] = new Date().toISOString().split("T")[0].split("-");
      console.log([year, month, day]);
      return [year, month, day];
    } else if (this._btnDataSelect.value === "schedule") {
      [year, month, day] = this._btnDataInput.value.split("-");
      console.log([year, month, day]);
      return [year, month, day];
    }
  }

  functionAddBtnExpense(data) {
    const [year, month, day] = this.getDataFormat();
    console.log(day, month, year);

    console.log(this._btnDataSelect.value);
    console.log(this._btnDataInput.value);
    console.log(this._btnSituation.textContent);
    console.log(this._btnValue.value);
    console.log(this._btnCategorySelect.value);
    console.log(this._btnDescription.value);

    // insertHTML

    const correctValue = this.transformValues(this._btnValue.value);

    const classSituation = this.getSituationClass(
      this._btnSituation.textContent
    );

    const html = `
      <div class="moviment">
              <p class="mov-data">${day}/${month}/${year}</p>
              <p class="mav-situation ${classSituation}">${this._btnSituation.textContent}</p>
              <p class="mav-value"> R$${correctValue}</p>
              <p class="mav-category">renda</p>
              <p class="mav-description">${this._btnDescription.value}</p>
              <svg class="icon-mov" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"></path>
              </svg>
            </div>
    `;

    this._movimentsContainer.insertAdjacentHTML("afterbegin", html);

    // return blockInfos
  }

  showDataInput() {
    this._btnDataSelect.addEventListener(
      "input",
      this.functionShowData.bind(this)
    );
  }

  functionShowData() {
    // if (e.target.classList.contains('nav__link')) {
    //   const clicked = e.target.closest('.nav__link');

    // console.log("ok");
    // console.log(this);
    this._btnDataInput.classList.toggle("hidden");
    this._btnSituation.classList.toggle("to-recive");
    this._btnDataSelect.value === "today"
      ? (this._btnSituation.textContent = "recebido")
      : (this._btnSituation.textContent = "a receber");
  }

  showDataInputExpense() {
    this._btnDataSelectExpense.addEventListener(
      "input",
      this.functionShowDataExpense.bind(this)
    );
  }

  functionShowDataExpense() {
    // console.log("ok");
    // console.log(this);
    this._btnDataInputExpense.classList.toggle("hidden");
    this._btnSituationExpense.classList.toggle("to-pay");
    this._btnDataSelectExpense.value === "today"
      ? (this._btnSituationExpense.textContent = "pago")
      : (this._btnSituationExpense.textContent = "a pagar");
  }
}

export default new AddMovView();
