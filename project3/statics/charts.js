google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = [];
  data.push(['Monthly Expenses', '$'])
  data.push(['Principal & Interest', 1255.76])
  data.push(['Property Taxes', 364.58])
  data.push(["Homeowner's Insurance", 102.08])
  data.push(['HOA', 50.0])

  data = google.visualization.arrayToDataTable(data);

  var options = {
    width: 200,
    height: 200,
    legend: { position: 'none' },
    colors: ['blue', 'red', 'orange', 'green'],
    backgroundColor: 'transparent'
  };

  var chart = new google.visualization.PieChart(document.getElementById('myChart'));
  chart.draw(data, options);
}