class RemoveMov {
  _btnRemove;
  _movContainer = document.querySelector(".extract-mov-container");
  _test = document.querySelectorAll(".mav-description");

  addHandlerRomveMov(handler) {
    this._btnRemove = document.querySelectorAll(".icon-mov");

    this._btnRemove.forEach((el) => {
      el.addEventListener("click", function (e) {
        e.preventDefault();
        const clicked = e.target.closest(".moviment");

        console.log("assim");
        handler(clicked);
      });
    });
  }

  removingMov(data) {
    const id = data.dataset.id;

    return id;
  }

  clearAllContainer() {
    this._movContainer.innerHTML = "";
  }
}

export default new RemoveMov();
