class LoadPageInfoView {
  _userName = document.querySelector(".perfil-name");
  _userImage = document.querySelector(".img-login-icon");
  _totalValue = document.querySelector(".value-money-primary");

  getAccIndex() {
    console.log("sdfsdf");
    const urlParams = new URLSearchParams(window.location.search);
    const accIndex = urlParams.get("parametro1");
    // const parametro2 = urlParams.get("parametro2");

    // console.log(accIndex); // Exibirá "valor1"
    // console.log(parametro2); // Exibirá "valor2"
    return accIndex;
  }

  addInformations(data) {
    const totalValue = this._totalValue.textContent.split(" ");
    console.log(totalValue);
    totalValue[1] = 10;
    console.log(totalValue.join(" "));
    // console.log(totalValue);
    // totalValue: 0,
    // valueToPay: 0,
    // valueToReceive: 0,

    // console.log(this);
    // console.log(data);
    this._userName.textContent = data?.username;
    this._userImage.src = data?.userImage;
    // data.totalValue === 0 ? ;
    if (data?.totalValue === 0) {
    }
  }

  addHandlerLoadPage(handler) {
    handler();
  }
}
export default new LoadPageInfoView();
