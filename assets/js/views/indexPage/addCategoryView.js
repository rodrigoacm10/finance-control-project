class AddCategory {
  _btnCloseCategory = document.querySelector(".btn--close-add");
  _btnAddCategory = document.querySelectorAll(".btn-add-category");
  _categoryOverlay = document.querySelector(".add-category-overlay ");
  _categoryContainer = document.querySelector(".add-category-container");
  _btnCancel = document.querySelector(".btn-add-category-container-cancel");
  _btnCreate = document.querySelector(".btn-add-category-confirm");
  _inputCategory = document.querySelector(".add-category-input");
  _selectAddRevenue = document.querySelector(".select-category-revenue ");
  _selectAddExpense = document.querySelector(".select-category-expense");
  _selectFill = document.querySelector(".filter-category");

  toggleModelOverlay() {
    this._inputCategory.value = "";
    this._categoryContainer.classList.toggle("hidden-confirm");
    this._categoryOverlay.classList.toggle("hidden-confirm");
  }

  handlerCreate() {
    const categoryName = this._inputCategory.value;
    const categoryValue = categoryName.toLowerCase();
    console.log(categoryName, categoryValue);

    const html = `<option value="${categoryValue}">${categoryName}</option>`;

    if (categoryName == "") return;

    this._selectAddExpense.insertAdjacentHTML("beforeend", html);
    this._selectAddRevenue.insertAdjacentHTML("beforeend", html);
    this._selectFill.insertAdjacentHTML("beforeend", html);
    console.log(html);

    this.toggleModelOverlay();
  }

  addHandlerBtnsModel() {
    this._btnCreate.addEventListener("click", this.handlerCreate.bind(this));

    // usar o forEach
    this._btnAddCategory.forEach((el) =>
      el.addEventListener("click", this.toggleModelOverlay.bind(this))
    );

    this._btnCloseCategory.addEventListener(
      "click",
      this.toggleModelOverlay.bind(this)
    );

    this._categoryOverlay.addEventListener(
      "click",
      this.toggleModelOverlay.bind(this)
    );

    this._btnCancel.addEventListener(
      "click",
      this.toggleModelOverlay.bind(this)
    );
  }
}
export default new AddCategory();
