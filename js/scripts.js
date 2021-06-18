// Business Logic

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
}

//Calculates viral load if user clicks on spam link in email
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
  
  if (isNaN(userNumber) === true) {
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

    if (isNaN(userNumber) === true) {
      alert('ERROR: NOT A NUMBER; VIRUS DEFEATED')
    } else {
    let virus = viralLoad(userNumber)
    alert('You won')
    alert(virus)
    alert("viruses!!!!!");
    }
  });
});
