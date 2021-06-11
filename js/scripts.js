//Business Logic

function numberhood(number) {
  let numberInputer = [parseInt(number)]
  
array.includes(1)



// Trying to take input, split it into an array, and check 
// function numberhood(number) {
//   let numberInput = [parseInt(number)];
//   numberInput.join(" ");
//   numberInput.split();
//   console.log(numberInput)
//   for (i = 0; i < numberInput.length; i+=1) {
//     if (numberInput.includes(1)) {
//     return 'Beep!';
//   } else {
//     return numberInput
//   }}
// }


// function numberhood(number) {
//   let numberInput = [parseInt(number)];
//   numberInput.toString().split('')
//   for (i = 0; i <= numberInput.length; i++) {
//     if (numberInput[i] === 1) {
//     return 'Beep!';
//   } else {
//     return numberInput
//   }}
// } numberhood(11)



// function numberhood(number) {
//   let numberInput = [parseInt(number)];
//   let checkfor1 = numberInput.includes(1);
//   for (i = 0; i <= numberInput.length; i++) {
//     if (checkfor1 === true) {
//     return 'Beep!';
//   } else { 
//     return numberInput
//   }}
// } numberhood(11)



// function numberhood(number) {
//   let numberInput = [parseInt(number)];
//   for (i = 0; i <= numberInput.length; i++) {
//   if (numberInput[0] === 1) {
//     return 'Beep!';
//   } else { 
//     return numberInput
//   }}
// } numberhood(11)

// function numberhood(number) {
//   let numberInput = [parseInt(number)];
  
  
//   if (numberInput === 1) {
//     return 'Beep!';
//   } else {
//     return numberInput
//   }
// } numberhood(1)


// function numberhood(number) {
//   let numberInput = parseInt(number);
//   if (numberInput === 1) {
//     return 'Beep!';
//   } else {
//     return numberInput
//   }
// } numberhood(1)

//User Interface Logic

$(document).ready(function() {
  $('form#numberInput').submit(function(event) {
    event.preventDefault();
  
    const number1 = $("#number1").val();
    let result = numberhood(number1)

    $("#output").append(result)
  })
});