// Business Logic

// Determines if input is a number
function notANumber(number) {
  if (isNaN(number) === true) {
    return true;
  } else {
    return false;
  }
}

//Returns an array from 0 to the input number
function numberhood(number) {
  let newArray = [];
  if (isNaN(number) === false) {
    for (i = 0; i <= number; i++) {
      newArray.push(i);
    } return newArray;
  }
}

//Returns array with 1s, 2s, and 3s changed
function changeNumbers(number) {
  let newArray = numberhood(number)
  newArray.forEach(function(i) {
    let elementString = i.toString()
    if (elementString.includes(3) === true) {
      newArray[i] = "Won't you be my neighbor?'"
    } else if (elementString.includes(2) === true) {
      newArray[i] = 'Boop!'
    } else if (elementString.includes(1) === true) {
      newArray[i] = 'Beep!'
    } 
  }) 
  return newArray
} changeNumbers(21)


function viralLoad(number) {
  let virusArray = number.toString().split("");
  return virusArray.map(digits => digits * 100).join(",") 
}

// //User Interface Logic

$(document).ready(function() {
  $('form#numberInput').submit(function(event) {
    event.preventDefault();
    
  $("#outputField").show();
  const userNumber = $("#userNumber").val();
  
  
  if (notANumber(userNumber) === true) {
    $('#numberOutput').text('ERROR! ERROR! ERROR!  DOES NOT COMPUTE; USER DID NOT ENTER NUMBER; PRINT: "IT IS A TERRIBLE DAY IN THE NEIGHBORHOOD :("  WILL SELF DESTRUCT IF NO NUMBER ENTERED! 10... 9... 8...')
    $('#virusOutput').text(userNumber)
  } else {
    $('#numberOutput').html("[" + changeNumbers(userNumber).join("] , [") + "]");
    $('#virusOutput').text(userNumber)
  }
  });

  $('button#virusButton').click(function(event) {
    event.preventDefault();

    const userNumber = $('#userNumber').val();

    if (notANumber(userNumber) === true) {
      alert('ERROR: NOT A NUMBER; VIRUS DEFEATED')
    } else {
    let virus = viralLoad(userNumber)
    alert('You won')
    alert(virus)
    alert("viruses!!!!!");
    }
  });
});

// vvvvvvvvvv GREAT ANSWER TO THE WRONG QUESTION vvvvvvvvv

//Business Logic

// function notANumber(number) {
//   if (isNaN(number) === true) {
//     return true;
//   } else {
//     return false;
//   }
// } 

// function numberhood(number) {
//   let numberInput = number.toString();
//   const numberArray = [numberInput.split("")];
//   if (notANumber(number) === false) {
//     for (i = 0; i < numberArray.length; i+=1) {
//       if (numberInput.includes(3)) {
//         return 'includes3';
//       } else if (numberInput.includes(2)) {
//         return 'includes2';
//       } else if (numberInput.includes(1)) {
//         return 'includes1';
//       } else return number;
//     }
//   }
// }

// function viralLoad(number) {
//   let virusArray = number.toString().split("");
//   return virusArray.map(digits => digits * 100).join(",") 
// }

// //User Interface Logic

// $(document).ready(function() {
//   $('form#numberInput').submit(function(event) {
//     event.preventDefault();
    
//   $("#outputField").show();

//   const userNumber = $("#userNumber").val();
//   let result = userNumber

//   if (notANumber(userNumber) === true) {
//     $("#numberOutput").text('ERROR! ERROR! ERROR!  DOES NOT COMPUTE; USER DID NOT ENTER NUMBER; PRINT: "IT IS A TERRIBLE DAY IN THE NEIGHBORHOOD :("  WILL SELF DESTRUCT IF NO NUMBER ENTERED! 10... 9... 8...')
//   } else if (numberhood(userNumber) === 'includes3') {
//     $("#numberOutput").text(result + "!!! MY FAVORITE NUMBER!!! WON'T YOU BE MY NEIGHBOR???")
//   } else if (numberhood(userNumber) === 'includes2') {
//     $("#numberOutput").text(result + "!!! BOOP!!! BOOP!!! BOOP!!!")
//   } else if (numberhood(userNumber) === 'includes1') {
//     $("#numberOutput").text(result + "!!! BEEP! BEEP! BEEP!")
//   } else 
//     $("#numberOutput").text(result + "!!! GREAT NUMBER!")
//     $('#virusOutput').text(result)
//   });

//   $('button#virusButton').click(function(event) {
//     event.preventDefault();

//     const userNumber = $('#userNumber').val();

//     if (notANumber(userNumber) === true) {
//       alert('ERROR: NOT A NUMBER; VIRUS DEFEATED')
//     } else {
//     let virus = viralLoad(userNumber)
//     alert('You won')
//     alert(virus)
//     alert("viruses!!!!!");
//     }
//   });
// });
