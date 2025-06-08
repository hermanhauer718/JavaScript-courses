let calculation = localStorage.getItem('calculation');

if (calculation) {
  calculation = JSON.parse(calculation);
} else {
  calculation = '';
}

document.querySelector('.Calculation-display').textContent = `${calculation}`;



function updateCalculation(value) {
  calculation += value;
  // Replace division symbol with percentage for display only
  const displayCalculation = calculation.replace(/\//g, '%');
  document.querySelector('.Calculation-display').textContent = displayCalculation;
  localStorage.setItem('calculation', JSON.stringify(calculation));
  console.log(calculation);
}