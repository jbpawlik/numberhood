//Business Logic




function numberhood(number) {
  let numberInput = [parseInt(number)];
  numberInput.toString().split('')
  for (i = 0; i < numberInput.length; i+=1) {
    if (numberInput[i] === 1) {
    return 'Beep!';
  } else {
    return numberInput
  }}
} numberhood(11)




function numberhood(number) {
  let numberInput = [parseInt(number)];
  numberInput.toString().split('')
  for (i = 0; i <= numberInput.length; i++) {
    if (numberInput[i] === 1) {
    return 'Beep!';
  } else {
    return numberInput
  }}
} numberhood(11)



function numberhood(number) {
  let numberInput = [parseInt(number)];
  for (i = 0; i < numberInput.length; i++) {
    if (numberInput.indexOf(i) === 1) {
    return 'Beep!';
  } else {
    return numberInput
  }}
} numberhood(11)


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