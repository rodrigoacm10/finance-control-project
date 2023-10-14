import View from "./view.js";

class ValuesRender extends View {
  _totalValue = document.querySelector(".total-value");
  _toPayValue = document.querySelector(".to-pay-value");
  _toReceiveValue = document.querySelector(".to-receive-value");

  getValue(valueStr) {
    let strValue = +valueStr.split(" ")[1].replace(",", ".");

    return strValue;
  }

  consoleValues() {
    this.getValue(this._totalValue.textContent);
    this.getValue(this._toPayValue.textContent);
    this.getValue(this._toReceiveValue.textContent);
  }

  attTotalvalue(receivedValue) {
    let curTotalValue = this.getValue(this._totalValue.textContent);
    curTotalValue += receivedValue;
    const correctFormValue = this.transformValues(curTotalValue);
    this._totalValue.textContent =
      curTotalValue > 0 ? `R$ ${correctFormValue}` : `R$ -${correctFormValue}`;

    return curTotalValue;
  }

  attToPayValue(receivedValue) {
    let curTotalValue = this.getValue(this._toPayValue.textContent);
    curTotalValue += Math.abs(receivedValue);
    const correctFormValue = this.transformValues(curTotalValue);
    this._toPayValue.textContent = `R$ ${correctFormValue}`;

    return curTotalValue;
  }

  attToReceiveValue(receivedValue) {
    let curTotalValue = this.getValue(this._toReceiveValue.textContent);
    curTotalValue += Math.abs(receivedValue);
    const correctFormValue = this.transformValues(curTotalValue);
    this._toReceiveValue.textContent = `R$ ${correctFormValue}`;

    return curTotalValue;
  }
}

export default new ValuesRender();
