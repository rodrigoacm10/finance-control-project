class GetOutView {
  _content = "Tem certeza que deseja sair da conta?";
  _modelElement = document.querySelector(".modal");
  _overlayElement = document.querySelector(".overlay");

  _bntGetOut = document.querySelectorAll(".btn-perfil");
  _btnModelClose = document.querySelector(".btn--close-modal");
  _btnModelYes = document.querySelector(".btn-modal-confirm");
  _btnsModel = document.querySelectorAll(".btn-modal");
  _movimentsContainer = document.querySelector(".extract-mov-container");
  _modalContentElement = document.querySelector(".modal-content");
  _body = document.querySelector("body");
  _mobileNav = document.querySelector(".icon-mobile-nav");
  _mobileNavToOpen = document.querySelector(".menu-outline");
  _mobileNavToClose = document.querySelector(".close-outline");
  _closeBtn = document.querySelector(".close-btn");
  _navBar = document.querySelector(".main-nav");

  viewNavBarMobile() {
    this._mobileNavToOpen.addEventListener(
      "click",
      this.funcViewNavBar.bind(this)
    );
  }

  closeNavBarMobile() {
    this._mobileNavToClose.addEventListener(
      "click",
      this.funcCloseNavBar.bind(this)
    );
  }

  funcViewNavBar() {
    // this._navBar.style.transform = "translateX(370px)";
    this._navBar.classList.toggle("to-open");
    this._navBar.classList.toggle("to-close");
    this._navBar.style.visibility = "visible";
    this._mobileNavToOpen.style.display = "none";
    this._mobileNavToClose.style.display = "block";
  }

  funcCloseNavBar() {
    // this._navBar.style.transform = "translateX(570px)";
    this._navBar.classList.toggle("to-close");
    this._navBar.classList.toggle("to-open");
    this._mobileNavToClose.style.display = "none";
    this._mobileNavToOpen.style.display = "block";
  }

  toggleBody() {
    this._body.classList.toggle("hidden-confirm");
  }

  toggleModelOverlay() {
    this._modalContentElement.textContent = this._content;
    this._modelElement.classList.toggle("hidden-confirm");
    this._overlayElement.classList.toggle("hidden-confirm");
  }

  addHandlerBtnsModel() {
    this._bntGetOut.forEach((el) =>
      el.addEventListener("click", this.toggleModelOverlay.bind(this))
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
