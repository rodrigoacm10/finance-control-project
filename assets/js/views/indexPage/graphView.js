class GraphView {
  _graphEl = document.getElementById("myChart");
  _magicParam = false;

  addGraphHandler(handler) {
    handler();
  }

  addMovsToGraphAllMov(arrMovs, graphicVa) {
    this._graphAll.data.datasets[0].data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this._graphAll.data.datasets[1].data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    arrMovs.map((mov) => {
      const numModule = Math.abs(mov.value);
      const revenueOrExpense = mov.value > 0 ? 0 : 1;
      const arrIndex = +mov.data.split("-")[1] - 1;

      this._graphAll.data.datasets[revenueOrExpense].data[arrIndex] +=
        numModule;
    });
    this._graphAll.update();
  }

  addGraph(allMovs) {
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

            borderWidth: 1,
          },
          {
            label: "despesas",
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

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

    this.addMovsToGraphAllMov(this._allMovs, this._graphAll);

    this._magicParam = false;
  }
}
export default new GraphView();
