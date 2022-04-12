google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = [];
  data.push(['Expenses', 'Mhl'])
  data.push(['Principal & Interest', 1480.01])
  data.push(['Property Taxes', 364.58])
  data.push(["Homeowner's Insurance", 102.08])
  data.push(['HOA', 50.0])

  data = google.visualization.arrayToDataTable(data);

  var options = {
    width: 200,
    height: 200,
    legend: { position: 'none' },
    colors: ['blue', 'red', 'orange', 'green']
  };

  var chart = new google.visualization.PieChart(document.getElementById('myChart'));
  chart.draw(data, options);
}