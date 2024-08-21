// Set new default font family and font color to mimic Bootstrap's default styling



// Pie Chart Example
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: [],
    datasets: [{
      data: [],
      backgroundColor: ['#00FF27', '#FFC900', '#FF1B00', '#4bc0c0', '#9966ff'],
      hoverBackgroundColor: ['#00FF27', '#FFC900', '#FF1B00', '#4bc0c0', '#9966ff'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 80,
  },
});

fetch('/user-stats/')
  .then(response => response.json())
  .then(data => {
    myPieChart.data.labels = data.map(item => item.status);
    myPieChart.data.datasets[0].data = data.map(item => item.percentage);
    myPieChart.update();
  });
