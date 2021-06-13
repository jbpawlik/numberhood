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
    return true;
  } else {
    return false
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
  
    const userNumber = $("#userNumber").val();
    let result = numberhood(userNumber)

    $("#outputField").show();
    if (notANumber(userNumber) === false) {
      $("#output").text('ERROR! ERROR! ERROR!  DOES NOT COMPUTE; USER DID NOT ENTER NUMBER; PRINT: "IT IS A TERRIBLE DAY IN THE NEIGHBORHOOD :("  WILL SELF DESTRUCT IF NO NUMBER ENTERED! 10... 9... 8...')
    } else if ( )

    // $("#output").text(result)
  })
});
