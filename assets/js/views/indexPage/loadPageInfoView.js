import View from "./view.js";

class LoadPageInfoView extends View {
  _userName = document.querySelector(".perfil-name");
  _userImage = document.querySelector(".img-login-icon");
  _userNameMobile = document.querySelector(".perfil-name-mobile");
  _userImageMobile = document.querySelector(".img-login-icon-mobile");
  _totalValue = document.querySelector(".total-value");
  _toPayValue = document.querySelector(".to-pay-value");
  _toReceiveValue = document.querySelector(".to-receive-value");
  _movimentsContainer = document.querySelector(".extract-mov-container");

  getAccIndex() {
    console.log("sdfsdf");
    // vou ter q pegar os parametros de index nome, sobreome, senha, email
    const urlParams = new URLSearchParams(window.location.search);
    const accIndex = urlParams.get("parametro1");
    const testando = urlParams.get("parametro2");
    const name = urlParams.get("name");
    const surname = urlParams.get("surname");
    const email = urlParams.get("email");
    const password = urlParams.get("password");
    const confirmPassword = urlParams.get("confirmpassword");

    console.log("- as- s -fg dfg - -ghg- ", testando);
    console.log(accIndex, name, surname, email, password, confirmPassword);
    // passar um objeto com os parametros
    // return accIndex;
    return {
      indexAcc: accIndex,
      name,
      surname,
      email,
      password,
      confirmPassword,
    };
  }

  addMoviments(data) {
    const moviments = data.moviments;

    return moviments.map((el) => {
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

      this._movimentsContainer.insertAdjacentHTML("afterbegin", html);
    });
  }

  addInformations(data) {
    const totalValueContent = this._totalValue.textContent.split(" ");
    const toPayValueContent = this._toPayValue.textContent.split(" ");
    const toReceiveValueContent = this._toReceiveValue.textContent.split(" ");
    console.log("a-a-a-a-a-a-a-aaa", totalValueContent);

    const totalValueCurAcc = +data.totalValue;
    console.log("zz-z-z-z-z-zz--zz--z", totalValueCurAcc);

    const toPayValueCurAcc = +data.valueToPay;

    const toReceiveValueCurAcc = +data.valueToReceive;

    const totalValueTransformed =
      this.transformValuesInfosAcc(totalValueCurAcc);
    totalValueContent[1] = totalValueTransformed;

    const toPayValueTransformed =
      this.transformValuesInfosAcc(toPayValueCurAcc);
    toPayValueContent[1] = toPayValueTransformed;

    const toReceiveTransformed =
      this.transformValuesInfosAcc(toReceiveValueCurAcc);
    toReceiveValueContent[1] = toReceiveTransformed;

    this._userName.textContent = data.username;
    this._userImage.src = data.userImage;
    this._userNameMobile.textContent = data.username;
    this._userImageMobile.src = data.userImage;
    this._totalValue.textContent = totalValueContent.join(" ");
    this._toPayValue.textContent = toPayValueContent.join(" ");
    this._toReceiveValue.textContent = toReceiveValueContent.join(" ");
  }

  verifingMovsArr(arrToPay, arrToReceive) {
    const arrPaided = [];
    const arrReceived = [];
    arrToPay.forEach((el) => el);
    arrToReceive.forEach((el) => el);
  }

  addHandlerLoadPage(handler) {
    handler();
  }
}
export default new LoadPageInfoView();
