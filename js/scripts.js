//WIP: I misunderstood the prompt. The code that is not commented out is what I am working on for the resubmission. The commented-out code below it is a fully functional answer to the wrong problem. :)  My gh-pages site at jbpawlik.github.io/numberhood has the working original.

// Business Logic

// function notANumber(number) {
  function notANumber(number) {
    if (isNaN(number) === true) {
      return true;
    } else {
      return false;
    }
  }

//Loops need to: 
//determine whether input number contains a 1, 2, or 3
//output a count up from 0
//replace 1, 2, or 3


//Counts to 10 (works)
// function count() {
//   for (let i = 1; i <= 10; i++) {
//     console.log(i);
//   }
// }
// count();

//Counts from 0 to number
// function countUp(number) {
//   const newArray = []
//   for (let i = 0; i <= number; i++) {
//     newArray.push(i);
//   }
// }
// countUp(10);

// function countToTen(number) {
//   for (i = 1; i <= 10; i++)
//   console.log(number)
// } countToTen(10)


// function numberhood(number) {
//   let newArray = []
//   if (isNaN(number) === false) {
//     for (i = 0; i <= number; i++);
//     console.log(newArray.push(i));
//     return newArray;
// }} numberhood(111)

//DOESN'T RETURN A USEABLE OUTPUT?
function numberhood(number) {
  let newArray = [];
  for (i = 0; i <= number; i++) {
    newArray.push(i);
    return newArray;
  }
} numberhood(10)

//WORKS - BUT WHY? AND HOW TO GET USABLE OUTPUT?
//CAN'T return newArray?
//Return newArray hides the array somehow?
function numberhood(number) {
  let newArray = [];
  for (i = 0; i <= number; i++) {
    console.log(newArray.push(i));
    console.log(newArray);
  }
} numberhood(10)

//HOW TO USE ARRAY OUTPUT IN FOREACH LOOP (not working)
function changeNumber(number) {
  let inputArray = numberhood(number);
  inputArray.forEach(function(element) {
    console.log(inputArray)
  })
} changeNumber(10)


//WHY DOES THIS WORK BUT THE ARRAY DOESN'T? I DON'T GET IT
// let array = [];
// for (let i = 1; i <= 10; i++) {
//   array.push(i);
// } array
// (10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


//Testing
function numberhood(number) {
  let newArray = [];
  if (isNaN(number) === false) {
  for (i = 0; i <= number; i++) {
    newArray.push(i);
  } return newArray;
}} numberhood(10)

// How do I get newArray from numberhood function?
// function changeNumbers(number) {
//   let newArray = numberhood(number)
//   newArray.forEach(function(element) {
//     console.log(element);
//   })
// } changeNumbers(10)

function changeNumbers(number) {
  let newArray = numberhood(number)
  newArray.forEach(function(element) {
    if (element === 1) {
      console.log(element = 'Boop!')
    } console.log(newArray)
  }) 
} changeNumbers(10)








//for loop
function numberhood(number) {
  let numberInput = number.toString();
  const numberArray = [numberInput.split("")];
  if (isNaN(number) === false) {
    for (i = 0; i <= numberArray.length; i+=1) {
      if (numberArray.includes(1)); {
        numberArray.push(i);
        return numberArray.toString();
      }
    }}
} numberhood(0)

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
  let result = userNumber

  if (notANumber(userNumber) === true) {
    $("#numberOutput").text('ERROR! ERROR! ERROR!  DOES NOT COMPUTE; USER DID NOT ENTER NUMBER; PRINT: "IT IS A TERRIBLE DAY IN THE NEIGHBORHOOD :("  WILL SELF DESTRUCT IF NO NUMBER ENTERED! 10... 9... 8...')
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
