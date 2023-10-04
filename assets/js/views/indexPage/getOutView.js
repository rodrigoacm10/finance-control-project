class GetOutView {
  _content = "Tem certeza que deseja sair da conta?";
  _modelElement = document.querySelector(".modal");
  _overlayElement = document.querySelector(".overlay");
  _bntGetOut = document.querySelector(".btn-perfil");
  _btnModelClose = document.querySelector(".btn--close-modal");
  _btnModelYes = document.querySelector(".btn-modal-confirm");
  _btnsModel = document.querySelectorAll(".btn-modal");
  _movimentsContainer = document.querySelector(".extract-mov-container");
  _modalContentElement = document.querySelector(".modal-content");
  _body = document.querySelector("body");

  toggleBody() {
    this._body.classList.toggle("hidden-confirm");
  }

  toggleModelOverlay() {
    this._modalContentElement.textContent = this._content;
    console.log(this);
    console.log(this._modelElement);
    console.log(this._overlayElement);
    this._modelElement.classList.toggle("hidden-confirm");
    this._overlayElement.classList.toggle("hidden-confirm");
  }

  addHandlerBtnsModel() {
    this._bntGetOut.addEventListener(
      "click",
      this.toggleModelOverlay.bind(this)
    );

    this._btnsModel.forEach((el) => {
      el.addEventListener("click", this.toggleModelOverlay.bind(this));
    });

    this._overlayElement.addEventListener(
      "click",
      this.toggleModelOverlay.bind(this)
    );

    this._btnModelClose.addEventListener(
      "click",
      this.toggleModelOverlay.bind(this)
    );
  }

  addHandlerGetOutAcc(handler) {
    this._btnModelYes.addEventListener("click", function (e) {
      e.preventDefault();
      handler();
    });
  }

  removeMovsContainer() {
    this._movimentsContainer.innerHTML = "";
  }

  moveToInitPage() {
    window.location.href = `init.html`;
  }
}

export default new GetOutView();
