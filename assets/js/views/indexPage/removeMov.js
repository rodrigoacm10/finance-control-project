class RemoveMov {
  _btnRemove;
  _movContainer = document.querySelector(".extract-mov-container");
  _test = document.querySelectorAll(".mav-description");

  testando() {
    // this._btnRemove = document.querySelectorAll(".icon-mov");
    // console.log(this._btnRemove);
    // console.log(this._test);
  }

  addHandlerRomveMov(handler) {
    this._btnRemove = document.querySelectorAll(".icon-mov");
    console.log(this._btnRemove);
    this._btnRemove.forEach((el) => {
      console.log(el);
      el.addEventListener("click", function (e) {
        e.preventDefault();
        const clicked = e.target.closest(".moviment");

        console.log("assim");
        handler(clicked);
      });
    });
  }

  // ESSA FUNCTION TEM Q ACHAR O INDEX DESSE MOVIMENTO OU SÒ RETORNAR O ID ALGO ASSIM
  removingMov(data) {
    const id = data.dataset.id;

    // console.log(-(-100));

    console.log("td certo!");
    console.log(data);
    console.log("--------------", id);
    return id;
  }

  clearAllContainer() {
    this._movContainer.innerHTML = "";
  }
}

export default new RemoveMov();
