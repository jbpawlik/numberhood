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

//forEach
function numberhood(number) {
  let numberInput = number.toString();
  const numberArray = [numberInput.split("")];
  let newArray = [0]
  if (isNaN(number) === false) {
    numberArray.forEach(function(index) {
      newArray.push(index);
      console.log(newArray.toString(", "))
      })
}} numberhood(111)


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
