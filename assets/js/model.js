export const state = {
  // currentAccountIndex: 10,
  accounts: [
    {
      userEmail: "sla@gmail.com",
      password: 123,
      moviments: [
        {
          data: "2023-09-13",
          situation: "",
          value: 100.0,
          category: "Renda",
          description: "salário",
        },
        {
          data: "2023-09-20",
          situation: "",
          value: 100.0,
          category: "Renda",
          description: "salário",
        },
      ],
      username: "Wagner Love",
      userImage: "assets/img/dave.jpg",
      totalValue: 0,
      valueToPay: 0,
      valueToReceive: 0,
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
