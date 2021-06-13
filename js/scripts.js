//Business Logic

function notANumber(number) {
  let inputNumber = parseInt(number);
  if (isNaN(inputNumber) === false) {
    return true;
  } else {
    return false;
  }
} 

function numberhood(number) {
  let numberInput = number.toString()
  numberArray = [numberInput.split("")]
    for (i = 0; i < numberArray.length; i+=1) {
    if (numberInput.includes(1)) {
    return 'Boop!';
  } else {
    return numberInput
  }}
}

// function number1(number) {
//   let numberInput = number.toString()
//   numberArray = [numberInput.split("")]
//     for (i = 0; i < numberArray.length; i+=1) {
//     if (numberInput.includes(2)) {
//     return 'Boop!';
//   } else {
//     return numberInput
//   }}
// } number1(111)

// function number2(number) {
//   let numberInput = number.toString()
//   numberArray = [numberInput.split("")]
//     for (i = 0; i < numberArray.length; i+=1) {
//     if (numberInput.includes(1)) {
//     return 'Beep!';
//   } else {
//     return numberInput
//   }}
// } number2(111)

// function number3(number) {
//   let numberInput = number.toString()
//   numberArray = [numberInput.split("")]
//     for (i = 0; i < numberArray.length; i+=1) {
//     if (numberInput.includes(3)) {
//     return "Won't you be my neighbor?";
//   } else {
//     return numberInput
//   }}
// } number3(111)



//User Interface Logic

$(document).ready(function() {
  $('form#numberInput').submit(function(event) {
    event.preventDefault();
  
    const number1 = $("#number1").val();
    let result = numberhood(number1)

    $("#output").text(result)
  })
});
