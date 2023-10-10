class GraphView {
  _graphEl = document.getElementById("myChart");
  _magicParam = false;

  addGraphHandler(handler) {
    handler();
  }

  addMovsToGraphAllMov(arrMovs, graphicVa) {
    // allMovs.map((mov) => {
    //   const numModule = Math.abs(mov.value);
    //   const revenueOrExpense = mov.value > 0 ? 0 : 1;
    //   const arrIndex = +mov.data.split("-")[1] - 1;
    //   console.log(revenueOrExpense, arrIndex, numModule);
    //   // console.log(graphAll.data.datasets[revenueOrExpense].data);
    //   console.log(graphAll.data.datasets[revenueOrExpense].data[arrIndex]);
    //   graphAll.data.datasets[revenueOrExpense].data[arrIndex] += numModule;
    // });
    // this._allMovs

    this._graphAll.data.datasets[0].data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this._graphAll.data.datasets[1].data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    arrMovs.map((mov) => {
      const numModule = Math.abs(mov.value);
      const revenueOrExpense = mov.value > 0 ? 0 : 1;
      const arrIndex = +mov.data.split("-")[1] - 1;
      console.log(revenueOrExpense, arrIndex, numModule);
      // console.log(graphAll.data.datasets[revenueOrExpense].data);
      console.log(
        this._graphAll.data.datasets[revenueOrExpense].data[arrIndex]
      );
      this._graphAll.data.datasets[revenueOrExpense].data[arrIndex] +=
        numModule;
    });
    this._graphAll.update();
  }

  addGraph(allMovs) {
    // eu posso só chamar esse add graph em todas as funções de add MOv
    // const arr = [];
    // arr[0] = 2;
    // arr[2] = 3;
    // console.log(arr);
    // console.log(allMovs);
    // console.log("09" == 8);
    // console.log("09" - 2);
    // console.log(typeof +"09");
    this._allMovs = allMovs;

    this._graphAll = new Chart(this._graphEl, {
      type: "bar",
      data: {
        labels: [
          "jan",
          "fev",
          "mar",
          "abr",
          "maio ",
          "jun",
          "jul",
          "ago",
          "set",
          "out",
          "nov",
          "dez",
        ],
        datasets: [
          {
            label: "ganhos",
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            // data: [12, 19, 3, 5, 2, 3, 1, 2, 3, 4, 5, 6],
            // data: [],
            borderWidth: 1,
          },
          {
            label: "despesas",
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            // data: [12, 19, 3, 5, 2, 3, 1, 2, 3, 4, 5, 6],
            // data: [],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    console.log(this._graphAll.data.datasets[0].data);

    this.addMovsToGraphAllMov(this._allMovs, this._graphAll);
    // allMovs.map((mov) => {
    //   const numModule = Math.abs(mov.value);
    //   const revenueOrExpense = mov.value > 0 ? 0 : 1;
    //   const arrIndex = +mov.data.split("-")[1] - 1;
    //   console.log(revenueOrExpense, arrIndex, numModule);
    //   // console.log(graphAll.data.datasets[revenueOrExpense].data);
    //   console.log(graphAll.data.datasets[revenueOrExpense].data[arrIndex]);
    //   graphAll.data.datasets[revenueOrExpense].data[arrIndex] += numModule;
    // });
    if (this._magicParam) {
      console.log("ok");
    }

    console.log(this._graphAll.data.datasets[0].data);
    // graphAll.data.datasets[0].data.pop();
    // console.log(graphAll.data.datasets[0].data);
    // this._graphAll.update();
    this._magicParam = false;
  }
}
export default new GraphView();
