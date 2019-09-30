function circum() {
    
    
  const n1 = parseFloat(document.querySelector('#firstNumber').value)
  

  const radius = 2*Math.PI*n1
 

  document.querySelector('#result').innerHTML = "circumference of the given number is "+radius
}


document.querySelector('#circumButton').addEventListener('click', circum)