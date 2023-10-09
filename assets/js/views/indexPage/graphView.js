class GraphView {
  _graphEl = document.getElementById("myChart");

  addGraph() {
    new Chart(this._graphEl, {
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
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3, 1, 2, 3, 4, 5, 6],
            borderWidth: 1,
          },
          {
            label: "# tesdt",
            data: [12, 19, 3, 5, 2, 3, 1, 2, 3, 4, 5, 6],
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
  }
}
export default new GraphView();
