/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let convertBtn = document.getElementById("convert-btn")
let inputEl = document.getElementById("input")
let lengthEl = document.getElementById("conv-length")
let volumeEl = document.getElementById("conv-volume")
let weightEl = document.getElementById("conv-weight")

const meterToFeet = 3.281 
const literToGallon = 0.264
const kilogramToPound = 2.204

convertBtn.addEventListener("click", function() {
    let baseValue = inputEl.value 
    
    lengthEl.textContent = `${baseValue} meters = ${(baseValue * meterToFeet).toFixed(2)} feet | ${baseValue} feet = ${(baseValue / meterToFeet).toFixed(2)} meters`

    volumeEl.textContent = `${baseValue} liters = ${(baseValue * literToGallon).toFixed(2)} gallons | ${baseValue} gallons = ${(baseValue / literToGallon).toFixed(2)} liters`
    
    weightEl.textContent = `${baseValue} kilograms = ${(baseValue * kilogramToPound).toFixed(2)} lbs | ${baseValue} lbs = ${(baseValue / kilogramToPound).toFixed(2)} kilograms`

})
