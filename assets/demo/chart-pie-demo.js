// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Pie Chart Example
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Fosforo", "Microplasticos", "Nitrogeno", "Residuos Industriales"],
    datasets: [{
      data: [12.21, 20.58, 11.25, 8.32],
      backgroundColor: ['#e8d044', '#122f3e', '#2b7093', '#be4d25'],
    }],
  },
});
