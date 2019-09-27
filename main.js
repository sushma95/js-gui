function multiply() {
    
    
  const n1 = parseFloat(document.querySelector('#firstNumber').value)
  const n2 = parseFloat(document.querySelector('#secondNumber').value)
const n3 = parseFloat(document.querySelector('#thirdNumber').value)

  const volume = n1*n2*n3
 

  document.querySelector('#result').innerHTML = volume
}


document.querySelector('#volumeButton').addEventListener('click', multiply)