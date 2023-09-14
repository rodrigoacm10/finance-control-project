export const state = {
  currentAccount: 0,
  accounts: [
    {
      username: "sla@gmail.com",
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
      movimentsRecived: [],
      movimentsPaid: [],
      movimentsToRecive: [],
      movimentsToPay: [],
    },
    {},
    {},
  ],
};
