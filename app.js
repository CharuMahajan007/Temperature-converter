let cel = document.getElementById("cel")
let fahr = document.getElementById("fahr")

// event listeners
//event on celsius input
cel.addEventListener("change", function(){
    let convertedValueFahr = celToFahr(cel.value);
    fahr.value = convertedValueFahr;
})

//event on fahrenheit input
fahr.addEventListener("change", function(){
    let convertedValueCel = fahrToCel(fahr.value);
    cel.value = convertedValueCel;
})

//functions
function celToFahr(value){
    return ((value*1.8)+32);
}
function fahrToCel(value){
    return ((value-32)* .5556);
}