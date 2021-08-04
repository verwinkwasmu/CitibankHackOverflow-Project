// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';


  
//bar chart
var ctx = document.getElementById("voucherChart");
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Apparel", "Electronics", "Food & Beverage", "Home Decor", "Stationery", "Jewelry", "Miscellaneous"],
    datasets: [{
      label: "Category",
      backgroundColor: "rgba(2,117,216,1)",
      borderColor: "rgb(255, 192, 203)",
      data: [10, 69, 40, 55, 35, 59, 33],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'Category'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 8
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 100,
          maxTicksLimit: 5
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});