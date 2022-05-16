// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Area Chart Example
var ctx = document.getElementById("myAreaChart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["2000","2005","2010","2015","2020","2022"],
    datasets: [{
      label: "Elementos ajenos",
      lineTension: 0.3,
      backgroundColor: "rgb(161, 60, 60)",
      borderColor: "rgb(161, 60, 60)",
      pointRadius: 5,
      pointBackgroundColor: "rgb(161, 60, 60)",
      pointBorderColor: "rgb(161, 60, 60)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgb(161, 60, 60)",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      data: [10, 30, 26, 18, 28, 10],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 100,
          maxTicksLimit: 5
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
