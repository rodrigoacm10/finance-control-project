export const state = {
  // currentAccountIndex: 10,
  accounts: [
    {
      userEmail: "sla@gmail.com",
      password: 123,
      moviments: [
        {
          id: 4249928092023,
          data: "2023-09-13",
          situation: "recebido",
          value: 10.2,
          category: "renda",
          description: "salário",
        },
        {
          id: 3249928092023,
          data: "2023-10-25",
          situation: "a receber",
          value: 10.0,
          category: "renda",
          description: "salário",
        },
        {
          id: 2249928092023,
          data: "2023-09-13",
          situation: "pago",
          value: -50.0,
          category: "renda",
          description: "salário",
        },
        {
          id: 1249928092023,
          data: "2023-09-13",
          situation: "a pagar",
          value: -100.0,
          category: "renda",
          description: "salário",
        },
        {
          id: 4229928092023,
          data: "2023-09-30",
          situation: "a pagar",
          value: -99.0,
          category: "renda",
          description: "salário",
        },
      ],
      username: "Aurton senna",
      userImage: "assets/img/dave.jpg",
      totalValue: 10.2,
      valueToPay: 412,
      valueToReceive: 10,
      movimentsRealized: [
        {
          id: 4249928092023,
          data: "2023-09-13",
          situation: "recebido",
          value: 10.2,
          category: "renda",
          description: "salário",
        },
        {
          id: 2249928092023,
          data: "2023-09-13",
          situation: "pago",
          value: -50.0,
          category: "renda",
          description: "salário",
        },
      ],
      movimentsRecived: [
        {
          id: 4249928092023,
          data: "2023-09-13",
          situation: "recebido",
          value: 10.2,
          category: "renda",
          description: "salário",
        },
      ],
      movimentsPaid: [
        {
          id: 2249928092023,
          data: "2023-09-13",
          situation: "pago",
          value: -50.0,
          category: "renda",
          description: "salário",
        },
      ],
      movimentsToRecive: [
        {
          id: 3249928092023,
          data: "2023-10-25",
          situation: "a receber",
          value: 10.0,
          category: "renda",
          description: "salário",
        },
      ],
      movimentsToPay: [
        {
          id: 1249928092023,
          data: "2023-09-13",
          situation: "a pagar",
          value: -100.0,
          category: "renda",
          description: "salário",
        },
        {
          id: 4229928092023,
          data: "2023-09-30",
          situation: "a pagar",
          value: -99.0,
          category: "renda",
          description: "salário",
        },
      ],
    },
    {
      userEmail: "sla2@gmail.com",
      password: 1234,
      moviments: [
        {
          id: 4149928092023,
          data: "2024-09-13",
          situation: "recebido",
          value: 10.2,
          category: "renda",
          description: "salário",
        },
        {
          id: 4049928092023,
          data: "2023-09-25",
          situation: "a receber",
          value: 10.0,
          category: "renda",
          description: "salário",
        },
        {
          id: 4219928092023,
          data: "2024-09-13",
          situation: "a pagar",
          value: -55.0,
          category: "renda",
          description: "salário",
        },
        {
          id: 4229928092023,
          data: "2023-09-13",
          situation: "a pagar",
          value: -99.0,
          category: "renda",
          description: "salário",
        },
      ],
      username: "Steve Love",
      userImage: "assets/img/steve.jpg",
      totalValue: 1002,
      valueToPay: 12.2,
      valueToReceive: 40,
      movimentsRealized: [],
      movimentsRecived: [],
      movimentsPaid: [],
      movimentsToRecive: [],
      movimentsToPay: [],
    },
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

export const removingMovGeral = function (accIndex, movIndex) {
  if (movIndex > -1) {
    const valueMov = state.accounts[accIndex].moviments[movIndex].value;
    state.accounts[accIndex].moviments.splice(movIndex, 1);
    return valueMov;
  }
};

export const removingMovRealized = function (accIndex, movIndex) {
  if (movIndex > -1) {
    const valueMov = state.accounts[accIndex].movimentsRealized[movIndex].value;
    state.accounts[accIndex].movimentsRealized.splice(movIndex, 1);
    return valueMov;
  } else return false;
};

export const removingMovPaid = function (accIndex, movIndex) {
  if (movIndex > -1) {
    const valueMov = state.accounts[accIndex].movimentsPaid[movIndex].value;
    state.accounts[accIndex].movimentsPaid.splice(movIndex, 1);
    return valueMov;
  } else return false;
};

export const removingMovReceived = function (accIndex, movIndex) {
  if (movIndex > -1) {
    const valueMov = state.accounts[accIndex].movimentsRecived[movIndex].value;
    state.accounts[accIndex].movimentsRecived.splice(movIndex, 1);
    return valueMov;
  } else return false;
};

export const removingMovToPay = function (accIndex, movIndex) {
  if (movIndex > -1) {
    const valueMov = state.accounts[accIndex].movimentsToPay[movIndex].value;
    state.accounts[accIndex].movimentsToPay.splice(movIndex, 1);
    return valueMov;
  } else return false;
};

export const removingMovToReceive = function (accIndex, movIndex) {
  if (movIndex > -1) {
    const valueMov = state.accounts[accIndex].movimentsToRecive[movIndex].value;
    state.accounts[accIndex].movimentsToRecive.splice(movIndex, 1);
    return valueMov;
  } else return false;
};

export const throwTotalValue = function (accIndex, valueReceived) {
  state.accounts[accIndex].totalValue += -valueReceived;
  console.log(state.accounts[accIndex]);
};

export const throwToPayValue = function (accIndex, valueReceived) {
  state.accounts[accIndex].valueToPay += valueReceived;
  console.log(state.accounts[accIndex]);
};

export const throwToReceiveValue = function (accIndex, valueReceived) {
  state.accounts[accIndex].valueToReceive += -valueReceived;
  console.log(state.accounts[accIndex]);
};
