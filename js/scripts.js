//Business Logic

function notANumber(number) {
  if (isNaN(number) === false) {
    return true;
  } else {
    return false;
  }
} 

function numberhood(number) {
  let numberInput = number.toString();
  const numberArray = [numberInput.split("")];
  if (notANumber(number) === true) {
    for (i = 0; i < numberArray.length; i+=1) {
      if (numberInput.includes(3)) {
        return 'includes3';
      } else if (numberInput.includes(2)) {
        return 'includes2';
      } else if (numberInput.includes(1)) {
        return 'includes1';
      } else return number;
    }
  }
}
  



// function numberhood(number) {
//   let numberInput = number.toString()
//   numberArray = [numberInput.split("")]
//     for (i = 0; i < numberArray.length; i+=1) {
//     if (notANumber(number) === true && numberInput.includes(3)) {
//       return 'includes3';
//     } else if (notANumber(number) === true && numberInput.includes(2)) {
//       return 'includes2';
//     } else if (notANumber(number) === true && numberInput.includes(1)) {
//       return 'includes1';
//     }
//   }
// }


// function numberhood(number) {
//   let numberInput = number.toString()
//   numberArray = [numberInput.split("")]
//     for (i = 0; i < numberArray.length; i+=1) {
//     if (numberInput.includes(1)) {
//     return true;
//   } else {
//     return false
//   }}
// }
// function numberhood2(number) {
//   let numberInput = number.toString()
//   numberArray = [numberInput.split("")]
//     for (i = 0; i < numberArray.length; i+=1) {
//     if (numberInput.includes(2)) {
//     return 'contains2';
//   } else {
//     return false
//   }}
// }
// function numberhood3(number) {
//   let numberInput = number.toString()
//   numberArray = [numberInput.split("")]
//     for (i = 0; i < numberArray.length; i+=1) {
//     if (numberInput.includes(3)) {
//     return true;
//   } else {
//     return false
//   }}
// }

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
    
    $("#outputField").show();

    const userNumber = $("#userNumber").val();
    let result = userNumber

    if (notANumber(userNumber) === false) {
      $("#numberOutput").text('ERROR! ERROR! ERROR!  DOES NOT COMPUTE; USER DID NOT ENTER NUMBER; PRINT: "IT IS A TERRIBLE DAY IN THE NEIGHBORHOOD :("  WILL SELF DESTRUCT IF NO NUMBER ENTERED! 10... 9... 8...')
    } else if (numberhood(userNumber) === 'includes3') {
      $("#numberOutput").text(result + "!!! MY FAVORITE NUMBER!!! WON'T YOU BE MY NEIGHBOR???")
    } else if (numberhood(userNumber) === 'includes2') {
      $("#numberOutput").text(result + "!!! BOOP!!! BOOP!!! BOOP!!!")
    } else if (numberhood(userNumber) === 'includes1') {
    $("#numberOutput").text(result + "!!! BEEP! BEEP! BEEP!")
    } else 
    $("#numberOutput").text(result + "!!! GREAT NUMBER!")

    $('#virusOutput').text(result)
  })

  $('button#virusButton').click(function(event) {
    event.preventDefault();

    const userNumber = $('#userNumber').val();

    if (notANumber(userNumber) === false) {
      alert('ERROR: NOT A NUMBER; VIRUS DEFEATED')
    } else {
    alert('You won')
    alert('10000000')
    alert("viruses!!!!!");
    }
  });
});
