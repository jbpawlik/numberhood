//Business Logic

function notANumber(number) {
  let inputNumber = parseInt(number);
  if (isNaN(inputNumber) === false) {
    return true;
  } else {
    return false;
  }
} notANumber(1)

function number1(number) {
  let numberInput = number.toString()
  numberArray = [numberInput.split("")]
    for (i = 0; i < numberArray.length; i+=1) {
    if (numberInput.includes(2)) {
    return 'Boop!';
  } else {
    return numberInput
  }}
} number1(111)

// Not a number function (working)
// function notANumber(number) {
//   let inputNumber = parseInt(number);
//   if (isNaN(inputNumber) === false) {
//     return true;
//   } else {
//     return false;
//   }
// } notANumber(1)

// function notANumber(number) {
//   let inputNumber = parseInt(number);
//   if (inputNumber === Number) {
//     return true;
//   } else {
//     return false;
//   }
// } notANumber(1)

// function notANumber(number) {
//   if (parseInt(number) !== Number) {
//     alert('Please enter a number')
//   } else {
//     return isANumber = parseInt(number)
//   }
// } notANumber('a')


function number1(number) {
  let numberInput = number.toString()
  numberArray = [numberInput.split("")]
    for (i = 0; i < numberArray.length; i+=1) {
    if (numberInput.includes(2)) {
    return 'Boop!';
  } else {
    return numberInput
  }}
} number1(111)

function number2(number) {
  let numberInput = number.toString()
  numberArray = [numberInput.split("")]
    for (i = 0; i < numberArray.length; i+=1) {
    if (numberInput.includes(1)) {
    return 'Beep!';
  } else {
    return numberInput
  }}
} number2(111)

function number3(number) {
  let numberInput = number.toString()
  numberArray = [numberInput.split("")]
    for (i = 0; i < numberArray.length; i+=1) {
    if (numberInput.includes(3)) {
    return "Won't you be my neighbor?";
  } else {
    return numberInput
  }}
} number3(111)

// function numberhood(number) {
//   let numberInput = '111'
//   numberArray = [numberInput.split("")]
// } 



// function numberhood(number) {
//   const numberInput = [parseInt(number)]
//   let checkFor1 = false;
//   numberInput.forEach(function(element) {
//     if (numberInput.includes(1) === true) {
//       checkFor1 = true;
//     } else {
//       checkFor1 = false
//     }
//     console.log(checkFor1)
//   })
// } numberhood(11)



// function numberhood(number) {
//   const numberInput = [parseInt(number)]
//   let checkFor1 = false;
//   numberInput.forEach(function(element) {
//     if (numberInput.includes(1) === true) {
//       checkFor1 = true;
//     } else {
//       checkFor1 = false
//     }
//     console.log(checkFor1)
//   })
// } numberhood(11)






// function numberhood(number) {
//   let numberInput = [parseInt(number)];
//   for (i = 0; i <= numberInput.length; i+=1) {
//     if (numberInput.includes(1)) {
//     return 'Beep!';
//   } else {
//     return numberInput
//   }}
// } numberhood(11)




// Trying to take input, split it into an array, and check whether array contains 1
// function numberhood(number) {
//   let numberInput = [parseInt(number)];
//   let numberArray = numberInput.join(" ").split();
//   console.log(numberArray)
//   for (i = 0; i < numberArray.length; i+=1) {
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

    $("#output").text(result)
  })
});