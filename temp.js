let celsiusInput = document.querySelector('#celsius > input')
let fahrenheitInput = document.querySelector('#fahrenheit > input')
let kelvinInput = document.querySelector('#kelvin > input')
let btn = document.querySelector('.button button')
function roundNumber(number){
    return Math.round(number*100)/100
}
celsiusInput.addEventListener('input', function(){
    let celTemp = parseFloat(celsiusInput.value)
    let fahrTemp = (celTemp*(9/5)) + 32
    let kelTemp = celTemp + 273.15
    fahrenheitInput.value = roundNumber(fahrTemp)
    kelvinInput.value = roundNumber(kelTemp)
})
fahrenheitInput.addEventListener('input', function(){
    let fahrTemp = parseFloat(fahrenheitInput.value)
    let celTemp = (fahrTemp - 32) * (5/9)
    let kelTemp = (fahrTemp -32) * (5/9) + 273.15
    celsiusInput.value = roundNumber(celTemp)
    kelvinInput.value = roundNumber(kelTemp)
})
kelvinInput.addEventListener('input', function(){
    let kelTemp = parseFloat(kelvinInput.value)
    let celTemp = kelTemp - 273.15
    let fahrTemp = (kelTemp - 273.15) * (9/5) + 32
    celsiusInput.value = roundNumber(celTemp)
    fahrenheitInput.value = roundNumber(fahrTemp)
})
btn.addEventListener('click', ()=>{
    celsiusInput.value = ""
    fahrenheitInput.value = ""
    kelvinInput.value = ""
})