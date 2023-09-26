import View from "./view.js";

class ValuesRender extends View {
  _totalValue = document.querySelector(".total-value");
  _toPayValue = document.querySelector(".to-pay-value");
  _toReceiveValue = document.querySelector(".to-receive-value");

  testando() {
    console.log("asdasfcffffffff");
  }

  getValue(valueStr) {
    let strValue = +valueStr.split(" ")[1].replace(",", ".");
    console.log(strValue, typeof strValue);

    // if (strValue.findIndex(el =>)("-"))
    // strValue = this.transformValues(strValue).replace(",", ".");
    return strValue;
  }

  consoleValues() {
    this.getValue(this._totalValue.textContent);
    this.getValue(this._toPayValue.textContent);
    this.getValue(this._toReceiveValue.textContent);
  }

  attTotalvalue(receivedValue) {
    console.log("ayz");
    let curTotalValue = this.getValue(this._totalValue.textContent);
    console.log(curTotalValue);
    curTotalValue += receivedValue;
    console.log(curTotalValue);
    const correctFormValue = this.transformValues(curTotalValue);
    this._totalValue.textContent = `R$ ${correctFormValue}`;
    //   curTotalValue > 0 ? `+ R$${curTotalValue}` : `- R$${curTotalValue}`;

    return curTotalValue;
  }

  attToPayValue(receivedValue) {
    console.log("ayz");
    let curTotalValue = this.getValue(this._toPayValue.textContent);
    console.log(curTotalValue);
    curTotalValue += receivedValue;
    console.log(curTotalValue);
    const correctFormValue = this.transformValues(curTotalValue);
    this._toPayValue.textContent = `R$ ${correctFormValue}`;
    //   curTotalValue > 0 ? `+ R$${curTotalValue}` : `- R$${curTotalValue}`;

    return curTotalValue;
  }

  attToReceiveValue() {}
}

export default new ValuesRender();
