let calculation = localStorage.getItem('calculation');

if (calculation) {
  calculation = JSON.parse(calculation);
} else {
  calculation = '';
}

document.querySelector('.Calculation-display').textContent = `${calculation}`;



function updateCalculation(value) {
  calculation += value;
  document.querySelector('.Calculation-display').textContent = `${calculation}`;
  localStorage.setItem('calculation', JSON.stringify(calculation));
  console.log(calculation);
}