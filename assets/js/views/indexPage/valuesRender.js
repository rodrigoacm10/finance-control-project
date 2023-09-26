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
  }

  consoleValues() {
    this.getValue(this._totalValue.textContent);
    this.getValue(this._toPayValue.textContent);
    this.getValue(this._toReceiveValue.textContent);
  }
}

export default new ValuesRender();
