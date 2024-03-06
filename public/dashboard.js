$(document).ready(function () {
  console.log("Loading");
  $("#btn-login").click(function () {
    $.ajax({
      url: "http://localhost:2024/api/history",
      type: "GET",
      dataType: "json",
      headers: {
        Authorization: $("#private-key").val(),
      },
      success: function (data) {
        $("#main").show();
        $("#table-body").empty();
        data.forEach(function (item, index) {
          let date = new Date(item.createdAt);
          date.setHours(date.getHours());
          let formattedDate = date.toLocaleString("en-GB", { hour12: false });
          $("#table-body").append(`
            <tr>
                <td>${index + 1}</td>
                <td>${item.name}</td>
                <td>${item.dob}</td>
                <td>${formattedDate}</td>
            </tr>
            `);
        });
        console.log(typeof data);
      },
      error: function (error) {
        console.log(error);
      },
    });
  });
  $("#main").hide();
});
/* globals Chart:false, feather:false */

(function () {
  "use strict";

  feather.replace({ "aria-hidden": "true" });

  // Graphs
  var ctx = document.getElementById("myChart");
  // eslint-disable-next-line no-unused-vars
  var myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      datasets: [
        {
          data: [15339, 21345, 18483, 24003, 23489, 24092, 12034],
          lineTension: 0,
          backgroundColor: "transparent",
          borderColor: "#007bff",
          borderWidth: 4,
          pointBackgroundColor: "#007bff",
        },
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: false,
            },
          },
        ],
      },
      legend: {
        display: false,
      },
    },
  });
})();
