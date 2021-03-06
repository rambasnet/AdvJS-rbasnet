google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawPieChart);

function drawPieChart() {
  var data = google.visualization.arrayToDataTable(
    [
      ['Expenses Typle', 'Monthly Amount'],
      ['Principal & Interest', calculatePrincipalAndInterest()],
      ['Property Taxes', monthlyTaxes()],
      ["Homewoner's Insurance", monthlyInsurance()],
      ['HOA Fees', monthlyHOA()]
    ]
  );

  var options = {
    legend: 'none',
    colors: ['blue', 'red', 'green', 'orange'],
    backgroundColor: 'transparent',
    chartArea:{left:20,top:20,width:'100%', height:'100%'}
  };

  var chart = new google.visualization.PieChart(document.getElementById('myChart'));
  chart.draw(data, options);
}