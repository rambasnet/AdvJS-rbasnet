function updateLoanType(year) {
  let element = document.getElementById('loantype');
  element.value = year;
}

function calculateP() {
  let price = Number(document.getElementById('price').value);
  let downPayment = Number(document.getElementById('down').value);
  let Principal = price - downPayment;
  return Principal;
}

function calculatePrincipalAndInterest() {
  let P = calculateP();
  console.log(P);
  let I = Number(document.getElementById('rate').value) / 100 / 12;
  let N = Number(document.getElementById('loantype').value) * 12;
  // M = P [ I ( 1 + I )^N ] / [ ( 1 + I )^N – 1 ]
  let M = (P * (I * (1 + I) ** N)) / ((1 + I) ** N - 1);
  return M;
}

function monthlyTaxes() {
  let taxes = Number(document.getElementById('tax').value) / 12;
  return taxes;
}

function monthlyInsurance() {
  let insurance = Number(document.getElementById('insurance').value) / 12;
  return insurance;
}

function monthlyHOA() {
  return Number(document.getElementById('hoa').value);
}

function updateAnswer() {
  let M = calculatePrincipalAndInterest();
  // Create our number formatter.
  // https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-strings
  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  //formatter.format(2500); /* $2,500.00 */
  let total = M;
  M = formatter.format(M);
  document.getElementById('ansPrincipal').innerHTML = M;
  let taxes = monthlyTaxes();
  total += taxes;
  document.getElementById('ansTax').innerHTML = formatter.format(taxes);
  let insurance = monthlyInsurance();
  total += insurance;
  document.getElementById('ansInsurance').innerHTML = formatter.format(insurance);
  let HOA = monthlyHOA();
  total += HOA;
  document.getElementById('ansHOA').innerHTML = formatter.format(HOA)
  document.getElementById('monthly').innerHTML = formatter.format(total);
  drawPieChart();
}
