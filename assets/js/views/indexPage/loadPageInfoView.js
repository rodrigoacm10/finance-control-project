class LoadPageInfoView {
  _userName = document.querySelector(".perfil-name");
  _userImage = document.querySelector(".img-login-icon");
  _totalValue = document.querySelector(".total-value");
  _toPayValue = document.querySelector(".to-pay-value");
  _toReceiveValue = document.querySelector(".to-receive-value");

  getAccIndex() {
    console.log("sdfsdf");
    const urlParams = new URLSearchParams(window.location.search);
    const accIndex = urlParams.get("parametro1");
    // const parametro2 = urlParams.get("parametro2");

    // console.log(accIndex); // Exibirá "valor1"
    // console.log(parametro2); // Exibirá "valor2"
    return accIndex;
  }

  transformValues(value, strValueMod, splitStrValueMod) {
    let strValue = strValueMod;

    if (splitStrValueMod.length > 1 && splitStrValueMod[1].length == 1) {
      strValue += "0";
      // console.log(splitStrValueMod);
    }

    if (!strValueMod.includes(".")) {
      strValue += ",00";
    } else if (value > 0 || value < 0) {
      strValue = `${strValue}`.replace(".", ",");
    }

    return strValue;
  }

  addInformations(data) {
    const totalValueContent = this._totalValue.textContent.split(" ");
    const toPayValueContent = this._toPayValue.textContent.split(" ");
    const toReceiveValueContent = this._toReceiveValue.textContent.split(" ");

    const totalValueCurAcc = +data.totalValue;
    const strTotalValueCurAcc = `${totalValueCurAcc}`;
    const splitStrTotalValueCurAcc = strTotalValueCurAcc.split(".");

    const toPayValueCurAcc = +data.valueToPay;
    const strToPayValueCurAcc = `${toPayValueCurAcc}`;
    const splitStrToPayValueCurAcc = strToPayValueCurAcc.split(".");

    const toReceiveValueCurAcc = +data.valueToReceive;
    const strToReceiveValueCurAcc = `${toReceiveValueCurAcc}`;
    const splitStrToReceiveValueCurAcc = strToReceiveValueCurAcc.split(".");

    const totalValueTransformed = this.transformValues(
      totalValueCurAcc,
      strTotalValueCurAcc,
      splitStrTotalValueCurAcc
    );
    totalValueContent[1] = totalValueTransformed;
    console.log(totalValueContent);

    const toPayValueTransformed = this.transformValues(
      toPayValueCurAcc,
      strToPayValueCurAcc,
      splitStrToPayValueCurAcc
    );
    toPayValueContent[1] = toPayValueTransformed;
    console.log(toPayValueContent);

    const toReceiveTransformed = this.transformValues(
      toReceiveValueCurAcc,
      strToReceiveValueCurAcc,
      splitStrToReceiveValueCurAcc
    );
    toReceiveValueContent[1] = toReceiveTransformed;
    console.log(toReceiveValueContent);

    this._userName.textContent = data.username;
    this._userImage.src = data.userImage;
    this._totalValue.textContent = totalValueContent.join(" ");
    this._toPayValue.textContent = toPayValueContent.join(" ");
    this._toReceiveValue.textContent = toReceiveValueContent.join(" ");
  }

  addHandlerLoadPage(handler) {
    handler();
  }
}
export default new LoadPageInfoView();
