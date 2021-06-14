# Mr. Roboger's Numberhood
## by James Benjamin Pawlik (http://github.com/jbpawlik)

### __Description__
Mr. Roboger's Numberhood is an interactive website that takes numerical input from a user and returns numbers and strings depending on the number. For example, numbers that contain a 1 return "Beep!" while numbers with a 2 return "Boop!" Each subsequent rule has higher importance and overrides previous rules. 

### __Technologies Used__
Mr. Roboger's Numberhood uses custom HTML and CSS. JavaScript and JQuery are used for the business and interface logic.

### __Setup/Installation__
1. Download or clone the [repository](http://github.com/jbpawlik/numberhood) to your local machine
2. Navigate to the top level of the directory
3. Open index.html in your browser
4. Enter a number in the number field to get a response

Alternately, visit [Github Pages](http://jbpawlik.github.io/numberhood) to view the site.

### __Tests/Specifications__
Describe numberhood()

Test 1: "Should return the user's input"    
Code: numberhood(21)    
Expected Output: "21"     

Test 2: "If input is not a number, return NaN"    
Code: numberhood('a')    
Expected Output: NaN    

Test 3: "If number is 1, return 'Beep!'"    
Code: numberhood(1)    
Expected Output: "Beep!"    

Test 4: "If number includes 1, return 'Beep!'"    
Code: numberhood(21)    
Expected Output: "Beep!"    

Test 5: "If number is 2, return 'Boop!'"    
Code: numberhood(2)    
Expected Output: "Boop!"    

Test 6: "If number includes 2, return 'Boop!"    
Code: numberhood(12)    
Expected Output: "Boop!"    

Test 7: "If a number includes both a 1 and a 2, only return 'Boop!'"    
Code: numberhood(21)    
Expected Output: "Boop!"

Test 8: "If number includes 3, return "Won't you be my neighbor?""    
Code: numberhood(31)    
Expected Output: "Won't you be my neighbor?"    

### __Known Bugs / Future Goals__
No bugs have been found or reported. Please contact the author if you experience poor performance.

Future goals for Mr. Roboger's Numberhood are to take alphanumberic and mixed data to return a wider variety of responses.

### __License__
This software is licensed under the [BSD license](license.txt).

[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)

Copyright (c) 2021 James Benjamin Pawlik

### __Contact Information__
Contact the author at __james.benjamin.pawlik@gmail.com__
