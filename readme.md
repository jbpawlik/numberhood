# __Mr. Robogers' Numberhood__
### by [James Benjamin Pawlik](http://github.com/jbpawlik)

<img src="img/mrrobogers.jpg" alt="Mr. Rogers with a robot" width="200"/>

### __Description__

Mr. Robogers' Numberhood is an interactive website that takes numerical input from a user. The input is returned as an array counting up from zero to the number. As it counts up, the program replaces certain numbers in the array.  For example, numbers that contain a 1 return "Beep!" while numbers with a 2 return "Boop!" Each subsequent rule has a higher importance and overrides previous rules. 

The resulting array is returned as a string in the form of an email to the user. At the bottom of the email is a spam link that if clicked teaches the user an important lesson about Internet security. Blank user inputs and inputs that are not numbers return unique results.

### __Technologies Used__
Mr. Robogers' Numberhood uses custom HTML and CSS. JavaScript and JQuery are used for the business and interface logic.

### __Setup/Installation__
1. Download or clone the [repository](http://github.com/jbpawlik/numberhood) to your local machine
2. Navigate to the top level of the directory
3. Open index.html in your browser
4. Enter a number in the number field
5. Send the number to Mr. Robogers to get an email back

Alternately, visit [Github Pages](http://jbpawlik.github.io/numberhood) to view the site.

### __Tests/Specifications__
Describe numberhood()

Test 1: "Should return an array with 0 if user inputs 0"    
Code: numberhood(0)    
Expected Output: [0]

Test 2: "If input is not a number, return NaN"    
Code: numberhood('a')    
Expected Output: [NaN]

Test 3: "Should return any number inputted"
Code: numberhood(12)
Expected Output: [12]

Test 4: "Should return array counting up from zero to the input"
Code: numberhood(5)
Expected Output: [0, 1, 2, 3, 4, 5]

Describe changeNumbers()

Test 1: "If number is 1, replace 1 with 'Beep!'"    
Code: changeNumbers(1)    
Expected Output: [0, 'Beep!']

Test 2: "If a number contains 1, replace number with 'Beep!'"
Code: changeNumbers(12)
Expected Output: [0, 'Beep!', 2 ... 9, 'Beep!', 'Beep!', 12]

Test 3: "If number is 2, return 'Boop!'"    
Code: changeNumbers(2)    
Expected Output: [0, 'Beep!, 'Boop!']

Test 4: "If number includes 2, replace 2 with 'Boop!'"    
Code: changeNumbers(12)
Expected Output: [0, 'Beep!', "Boop!" ... 9, 'Beep!', 'Beep!', 'Beep!']

Test 5: "If a number includes both a 1 and a 2, replace number with 'Boop!'"    
Code: changeNumbers(12)    
Expected Output: [0, 'Beep!', 'Boop!' ... 9, 'Beep!', 'Beep!', 'Boop!']

Test 6: "If a number is 3, replace with 'Won't you be my neighbor?'"
Code: changeNumbers(3)
Expected Output: [0, 'Beep!, 'Boop!', 'Won't you be my neighbor?']

Test 7: "If number includes 3, replace with "Won't you be my neighbor?""    
Code: changeNumbers(13)    
Expected Output: [0 ... 9, 'Beep!', 'Beep!', 'Boop!' 'Won't you be my neighbor?']

### __Known Bugs / Future Goals__
No bugs have been found or reported. Please contact the author if you experience poor performance.

Future goals for Mr. Robogers' Numberhood are to take alphanumberic and mixed data to return a wider variety of responses.

### __License__
This software is licensed under the [BSD license](license.txt).

[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)

Copyright (c) 2021 James Benjamin Pawlik

### __Contact Information__
Contact the author at __james.benjamin.pawlik@gmail.com__
