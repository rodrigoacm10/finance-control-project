export const state = {
  // currentAccountIndex: 10,
  accounts: [
    {
      userEmail: "sla@gmail.com",
      password: 123,
      moviments: [
        {
          data: "2023-09-13",
          situation: "recebido",
          value: 100.0,
          category: "Renda",
          description: "salário",
        },
        {
          data: "2023-09-25",
          situation: "a receber",
          value: 100.0,
          category: "Renda",
          description: "salário",
        },
        {
          data: "2023-09-13",
          situation: "pago",
          value: -50.0,
          category: "Renda",
          description: "salário",
        },
        {
          data: "2023-09-13",
          situation: "a pagar",
          value: -100.0,
          category: "Renda",
          description: "salário",
        },
      ],
      username: "Wagner Love",
      userImage: "assets/img/dave.jpg",
      totalValue: 10.2,
      valueToPay: 412,
      valueToReceive: 0,
      movimentsRealized: [],
      movimentsRecived: [],
      movimentsPaid: [],
      movimentsToRecive: [],
      movimentsToPay: [],
    },
    {},
    {},
  ],
};

// currentAccount: accounts[currentAccountIndex],

export const findIndexAccout = function (arrData) {
  const userEmail = arrData[0];
  const userPassword = +arrData[1];

  console.log("aaaa", userEmail);
  console.log("aaaaaaa", userPassword);
  const accIndex = state.accounts.findIndex(
    (el) => el.userEmail === userEmail && el.password === userPassword
  );
  console.log(accIndex);
  // state.currentAccount = state.accounts[accIndex];
  state.currentAccountIndex = accIndex;
  console.log(state.currentAccountIndex);
};

export const addMovimentToState = function (accIndex, movBlock) {
  state.accounts[accIndex].moviments.push(movBlock);
};

export const addMovimentReceivedToState = function (accIndex, movBlock) {
  state.accounts[accIndex].movimentsRecived.push(movBlock);
};

export const addMovimentPaidToState = function (accIndex, movBlock) {
  state.accounts[accIndex].movimentsPaid.push(movBlock);
};

export const addMovimentToReceiveToState = function (accIndex, movBlock) {
  state.accounts[accIndex].movimentsToRecive.push(movBlock);
};

export const addMovimentToPayToState = function (accIndex, movBlock) {
  state.accounts[accIndex].movimentsToPay.push(movBlock);
};

export const addMovimentRealizedToState = function (accIndex, movBlock) {
  state.accounts[accIndex].movimentsRealized.push(movBlock);
};
