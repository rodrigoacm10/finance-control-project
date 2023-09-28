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
  _movimentsValuesArr = [];

  handlerAddBtnRevenueFunction(handler) {
    this._btnMovRevenue.addEventListener(
      "click",
      function (e) {
        console.log("asssdasdadfrgfg");
        e.preventDefault();
        handler();
      }

      // this.functionAddBtn.bind(this)
    );
  }

  movimentValidation(
    dataSelecBtn,
    dataInputBtn,
    situationBtn,
    valueBtn,
    categoryBtn,
    descriptionBtn
  ) {
    const dataSelec = dataSelecBtn.value;
    const dataInput = dataInputBtn.value;
    const situation = situationBtn.textContent;
    const value = valueBtn.value;
    const category = categoryBtn.value;
    const description = descriptionBtn.value;
    let booleanError = true;
    // vou ter q receber os proprios botões e colocar textContent etc para conseguir mudar os input para cor vermelha, no caso a borda -> 1px solid #red
    console.log(dataSelec, dataInput, situation, value, category, description);

    if (dataSelec === "schedule" && dataInput == "") {
      dataInputBtn.style.border = "1px solid red";
      console.log("colocar o datainput como vermelho");
      // return false;
      booleanError = false;
    }

    if (value == 0) {
      valueBtn.style.border = "1px solid red";
      // return false;
      booleanError = false;
    }

    if (description == "") {
      descriptionBtn.style.border = "1px solid red";
      booleanError = false;
    }

    return booleanError;
  }

  initAddMov(
    dataSelecBtn,
    dataInputBtn,
    situationBtn,
    valueBtn,
    categoryBtn,
    descriptionBtn
  ) {
    console.log("---as-");

    const arrValues = [dataInputBtn, valueBtn, descriptionBtn];

    console.log("---as-");
    arrValues.forEach((el) => (el.value = ""));
    arrValues.forEach((el) => (el.style.border = "1px solid #333"));
  }

  functionAddBtnRevenue(data) {
    const [year, month, day] = this.getDataFormat(
      this._btnDataSelect.value,
      this._btnDataInput.value
    );

    const dataVariable = new Date();
    const seconds = dataVariable.getSeconds();
    const minutes = dataVariable.getMinutes();
    const hours = dataVariable.getHours();

    const idSimulation = +`${seconds}${minutes}${hours}${day}${month}${year}`;
    console.log(idSimulation, typeof idSimulation);

    console.log(day, month, year);

    const minusPlus = this.sinalExpenseRevenue(this._btnMovRevenue);

    console.log(this._btnDataSelect.value);
    console.log(this._btnDataInput.value);
    console.log(this._btnSituation.textContent);
    console.log(this._btnValue.value);
    console.log(this._btnCategorySelect.value);
    console.log(this._btnDescription.value);

    const validationMoviment = this.movimentValidation(
      this._btnDataSelect,
      this._btnDataInput,
      this._btnSituation,
      this._btnValue,
      this._btnCategorySelect,
      this._btnDescription
    );

    if (!validationMoviment) return;

    // insertHTML

    const correctValue = this.transformValues(this._btnValue.value);

    const booleanValueData = this._btnDataInput.value
      ? this.confirmingSituation(this._btnDataInput.value)
      : false;

    // if (this._btnDataInput.value) console.log("asdassdasd");
    const correcrtSituation = this.testSituation(
      booleanValueData,
      this._btnSituation.textContent
    );

    const confirmatedValue = this.modfvalue(minusPlus, this._btnValue.value);
    console.log(confirmatedValue);

    const classSituation = this.getSituationClass(correcrtSituation);

    const html = `
      <div class="moviment" data-id="${idSimulation}">
              <p class="mov-data">${day}/${month}/${year}</p>
              <p class="mav-situation ${classSituation}">${correcrtSituation}</p>
              <p class="mav-value">${
                minusPlus ? "-" : "+"
              } R$${correctValue}</p>
              <p class="mav-category">${this._btnCategorySelect.value}</p>
              <p class="mav-description">${this._btnDescription.value}</p>
              <p>
              <svg class="icon-mov" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
             <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"></path>
           </svg>
           </p>
            </div>
    `;

    this._movimentsContainer.insertAdjacentHTML("afterbegin", html);

    // return blockInfos

    this._movimentsValuesArr.push(+this._btnValue.value);
    console.log(this._movimentsValuesArr);

    console.log(confirmatedValue, typeof confirmatedValue);

    const objMov = {
      id: idSimulation,
      data: `${year}-${month}-${day}`,
      situation: correcrtSituation,
      value: confirmatedValue,
      category: this._btnCategorySelect.value,
      description: this._btnDescription.value,
    };
    // console.log(objMov);

    this.initAddMov(
      this._btnDataSelect,
      this._btnDataInput,
      this._btnSituation,
      this._btnValue,
      this._btnCategorySelect,
      this._btnDescription
    );

    return objMov;
  }

  sinalExpenseRevenue(el) {
    const booleanValue = el === this._btnMovExpense ? true : false;
    return booleanValue;
  }

  modfvalue(booleanValue, value) {
    let confirmatedValue = value;
    if (booleanValue) {
      confirmatedValue = "-" + value;
      console.log(confirmatedValue);

      confirmatedValue = +confirmatedValue;
      console.log(confirmatedValue);
    }
    console.log(confirmatedValue, typeof confirmatedValue);
    return +confirmatedValue;
  }

  handlerAddBtnExpenseFunction(handler) {
    this._btnMovExpense.addEventListener(
      "click",
      function (e) {
        e.preventDefault();
        handler();
      }

      // this.functionAddBtn.bind(this)
    );
  }

  functionAddBtnExpense(data) {
    const [year, month, day] = this.getDataFormat(
      this._btnDataSelectExpense.value,
      this._btnDataInputExpense.value
    );

    const dataVariable = new Date();
    const seconds = dataVariable.getSeconds();
    const minutes = dataVariable.getMinutes();
    const hours = dataVariable.getHours();

    const idSimulation = +`${seconds}${minutes}${hours}${day}${month}${year}`;
    console.log(idSimulation, typeof idSimulation);

    const minusPlus = this.sinalExpenseRevenue(this._btnMovExpense);

    console.log(this._btnDataSelectExpense.value);
    console.log(this._btnDataInputExpense.value);
    console.log(this._btnSituationExpense.textContent);
    console.log(this._btnValueExpense.value);
    console.log(this._btnCategorySelectExpense.value);
    console.log(this._btnDescriptionExpense.value);

    console.log("--------", this._btnDataSelectExpense);

    const validationMoviment = this.movimentValidation(
      this._btnDataSelectExpense,
      this._btnDataInputExpense,
      this._btnSituationExpense,
      this._btnValueExpense,
      this._btnCategorySelectExpense,
      this._btnDescriptionExpense
    );

    if (!validationMoviment) return;

    // insertHTML

    const correctValue = this.transformValues(this._btnValueExpense.value);

    const booleanValueData = this._btnDataInputExpense.value
      ? this.confirmingSituation(this._btnDataInputExpense.value)
      : false;

    // if (this._btnDataInput.value) console.log("asdassdasd");
    const correcrtSituation = this.testSituation(
      booleanValueData,
      this._btnSituationExpense.textContent
    );

    const confirmatedValue = this.modfvalue(
      minusPlus,
      this._btnValueExpense.value
    );
    console.log(confirmatedValue);

    const classSituation = this.getSituationClass(correcrtSituation);

    const html = `
      <div class="moviment" data-id="${idSimulation}">
              <p class="mov-data">${day}/${month}/${year}</p>
              <p class="mav-situation ${classSituation}">${correcrtSituation}</p>
              <p class="mav-value">${
                minusPlus ? "-" : "+"
              } R$${correctValue}</p>
              <p class="mav-category">${
                this._btnCategorySelectExpense.value
              }</p>
              <p class="mav-description">${
                this._btnDescriptionExpense.value
              }</p>
              <p>
              <svg class="icon-mov" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
             <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"></path>
           </svg>
           </p>
            </div>
    `;

    this._movimentsContainer.insertAdjacentHTML("afterbegin", html);

    // return blockInfos

    this._movimentsValuesArr.push(+this._btnValueExpense.value);
    console.log(this._movimentsValuesArr);

    console.log(confirmatedValue);

    const objMov = {
      id: idSimulation,
      data: `${year}-${month}-${day}`,
      situation: correcrtSituation,
      value: confirmatedValue,
      category: this._btnCategorySelect.value,
      description: this._btnDescription.value,
    };
    // console.log(objMov);

    this.initAddMov(
      this._btnDataSelectExpense,
      this._btnDataInputExpense,
      this._btnSituationExpense,
      this._btnValueExpense,
      this._btnCategorySelectExpense,
      this._btnDescriptionExpense
    );

    console.log(10 + -11);

    return objMov;
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
