import View from "./view.js";

class FillMovs extends View {
  _movContainer = document.querySelector(".extract-mov-container");
  _allFilters = document.querySelectorAll(".filter-select");
  _filterSequence = document.querySelector(".filter-sequence");
  _filterData = document.querySelector(".filter-data");
  _filterSituation = document.querySelector(".filter-situation");
  _filterCategory = document.querySelector(".filter-category");

  //   .addEventListener(
  //     "input",

  // fazer uma funcção que toda vez que mudar de coisa input, vai ser chamada uma função, e essa função vai pegar os valores de cada seleção. Detalhe que a função tem q receber o arrau de moviments e criar uma copia do array pra n ter estresse

  addHandlerInputs(handler) {
    this._allFilters.forEach((el) =>
      el.addEventListener("input", function (e) {
        e.preventDefault();
        handler();
      })
    );
  }

  // Criar um função par asaber se a data está dentro de uma semana  ou mês,
  checkWeek(elDate) {
    const curData = new Date().toISOString();
    let weekDate = new Date();
    weekDate.setDate(weekDate.getDate() - 7);
    console.log(weekDate.toISOString());

    const todayDate = curData.split("T")[0];
    const weekInitial = weekDate.toISOString().split("T")[0];
    console.log(weekInitial);

    console.log(elDate >= weekInitial && elDate <= todayDate);
    console.log(curData > weekDate.toISOString());
    if (elDate >= weekInitial && elDate <= todayDate) {
      return true;
    } else return false;
  }

  // rever a diminuição de dias
  checkMonth(elDate) {
    const curData = new Date().toISOString();
    let monthDate = new Date();
    monthDate.setDate(monthDate.getDate() - 28);
    console.log(monthDate.toISOString());

    const todayDate = curData.split("T")[0];
    const weekInitial = monthDate.toISOString().split("T")[0];
    console.log(weekInitial);

    console.log(elDate >= weekInitial && elDate <= todayDate);
    console.log(curData > monthDate.toISOString());
    if (elDate >= weekInitial && elDate <= todayDate) {
      return true;
    } else return false;
  }

  // rever a diminuição de dias
  checkYear(elDate) {
    const curData = new Date().toISOString();
    let yearDate = new Date();
    yearDate.setDate(yearDate.getDate() - 365);
    console.log(yearDate.toISOString());

    const todayDate = curData.split("T")[0];
    const weekInitial = yearDate.toISOString().split("T")[0];
    console.log(weekInitial);

    console.log(elDate >= weekInitial && elDate <= todayDate);
    console.log(curData > yearDate.toISOString());
    if (elDate >= weekInitial && elDate <= todayDate) {
      return true;
    } else return false;
  }
  // usar o sort no select de sequencia quando for as opções mais proximo e mais longe sla os nomes, e em realizações nos colocamos por ID

  fillFunction(originalArray) {
    const arrMovCopy = [...originalArray];
    let arrFiltred;
    const filterSequence = this._filterSequence.value;
    const filterData = this._filterData.value;
    const filterSituation = this._filterSituation.value;
    const filterCategory = this._filterCategory.value;

    let arrSorted = [...arrMovCopy];
    if (filterSequence === "realization") {
      console.log("realization");
    } else if (filterSequence === "recents") {
      arrSorted.sort((a, b) => {
        if (a.data < b.data) return -1;
        else return +1;
      });

      console.log("recents");
    } else if (filterSequence === "oldest") {
      arrSorted.sort((a, b) => {
        if (a.data > b.data) return -1;
        else return +1;
      });

      console.log("oldest");
    }

    console.log(arrSorted);

    let arrData;
    arrData = arrSorted.filter((el) => {
      if (filterSituation == "all") return typeof el.situation == "string";
      else {
        console.log(el.situation, filterSituation);
        console.log("-a-", el.situation == filterSituation);
        return el.situation == filterSituation;
      }
    });

    console.log("-a-b-", arrData);

    arrData = arrData.filter((el) => {
      if (filterCategory == "all") return typeof el.category == "string";
      else {
        return el.category == filterCategory;
      }
    });

    console.log("-a-b-c-", arrData);

    arrData = arrData.filter((el) => {
      console.log(el.data, filterData);
      if (filterData == "all") {
        return typeof el.data == "string";
      } else if (filterData == "week") {
        console.log("difoj");
        return this.checkWeek(el.data) == true;
      } else if (filterData == "month") {
        console.log("df");
        return this.checkMonth(el.data) == true;
      } else if (filterData == "year") {
        console.log("sdfd");
        return this.checkYear(el.data) == true;
      }
    });
    console.log("-a-b-c-d-", arrData);
    console.log(arrData);

    console.log(arrMovCopy);

    console.log(filterSequence, filterData, filterSituation, filterCategory);
    console.log(this._filterSequence.value);
    console.log(this._filterData.value);
    console.log(this._filterSituation.value);
    console.log(this._filterCategory.value);

    this._movContainer.innerHTML = "";
    arrData.map((el) => {
      const booleanValueData = el.data
        ? this.confirmingSituation(el.data)
        : false;

      const correcrtSituation = this.testSituation(
        booleanValueData,
        el.situation
      );

      const classSituation = this.getSituationClass(correcrtSituation);

      const sinal = el.value > 0 ? "+" : "-";

      const [year, month, day] = el.data.split("-");

      const formatedValue = this.transformValues(el.value);

      const html = `
      <div class="moviment" data-id="${el.id}">
              <p class="mov-data">${day}/${month}/${year}</p>
              <p class="mav-situation ${classSituation}">${correcrtSituation}</p>
              <p class="mav-value">${sinal} R$${formatedValue}</p>
              <p class="mav-category">${el.category}</p>
              <p class="mav-description">${el.description}</p>
              <p>
              <svg class="icon-mov" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
             <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"></path>
           </svg>
           </p>
            </div>
    `;

      this._movContainer.insertAdjacentHTML("afterbegin", html);
    });
  }

  test() {
    this._filterData.addEventListener("input", function () {
      console.log("asder");
    });
    this._filterSituation.addEventListener("input", function () {
      console.log("asder");
    });
    this._filterCategory.addEventListener("input", function () {
      console.log("asder");
    });
  }
}
export default new FillMovs();
