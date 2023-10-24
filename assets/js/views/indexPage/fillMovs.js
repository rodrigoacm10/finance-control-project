import View from "./view.js";

class FillMovs extends View {
  _movContainer = document.querySelector(".extract-mov-container");
  _allFilters = document.querySelectorAll(".filter-select");
  _filterSequence = document.querySelector(".filter-sequence");
  _filterData = document.querySelector(".filter-data");
  _filterSituation = document.querySelector(".filter-situation");
  _filterCategory = document.querySelector(".filter-category");

  addHandlerInputs(handler) {
    this._allFilters.forEach((el) =>
      el.addEventListener("input", function (e) {
        e.preventDefault();
        handler();
      })
    );
  }

  checkWeek(elDate) {
    const curData = new Date().toISOString();
    let weekDate = new Date();
    weekDate.setDate(weekDate.getDate() - 7);

    const todayDate = curData.split("T")[0];
    const weekInitial = weekDate.toISOString().split("T")[0];

    if (elDate >= weekInitial && elDate <= todayDate) {
      return true;
    } else return false;
  }

  checkMonth(elDate) {
    const curData = new Date().toISOString();
    let monthDate = new Date();
    monthDate.setDate(monthDate.getDate() - 28);

    const todayDate = curData.split("T")[0];
    const weekInitial = monthDate.toISOString().split("T")[0];

    if (elDate >= weekInitial && elDate <= todayDate) {
      return true;
    } else return false;
  }

  checkYear(elDate) {
    const curData = new Date().toISOString();
    let yearDate = new Date();
    yearDate.setDate(yearDate.getDate() - 365);

    const todayDate = curData.split("T")[0];
    const weekInitial = yearDate.toISOString().split("T")[0];

    if (elDate >= weekInitial && elDate <= todayDate) {
      return true;
    } else return false;
  }

  fillFunction(originalArray) {
    const arrMovCopy = [...originalArray];
    let arrFiltred;
    const filterSequence = this._filterSequence.value;
    const filterData = this._filterData.value;
    const filterSituation = this._filterSituation.value;
    const filterCategory = this._filterCategory.value;

    let arrSorted = [...arrMovCopy];
    if (filterSequence === "realization") {
    } else if (filterSequence === "recents") {
      arrSorted.sort((a, b) => {
        if (a.data < b.data) return -1;
        else return +1;
      });
    } else if (filterSequence === "oldest") {
      arrSorted.sort((a, b) => {
        if (a.data > b.data) return -1;
        else return +1;
      });
    }

    let arrData;
    arrData = arrSorted.filter((el) => {
      if (filterSituation == "all") return typeof el.situation == "string";
      else {
        return el.situation == filterSituation;
      }
    });

    arrData = arrData.filter((el) => {
      if (filterCategory == "all") return typeof el.category == "string";
      else {
        return el.category == filterCategory;
      }
    });

    arrData = arrData.filter((el) => {
      if (filterData == "all") {
        return typeof el.data == "string";
      } else if (filterData == "week") {
        return this.checkWeek(el.data) == true;
      } else if (filterData == "month") {
        return this.checkMonth(el.data) == true;
      } else if (filterData == "year") {
        return this.checkYear(el.data) == true;
      }
    });

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
    this._filterData.addEventListener("input", function () {});
    this._filterSituation.addEventListener("input", function () {});
    this._filterCategory.addEventListener("input", function () {});
  }
}
export default new FillMovs();
