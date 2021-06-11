# Mr. Roboger's Neighborhood
## by James Benjamin Pawlik (http://github.com/jbpawlik)

### __Description__
Mr. Roboger's Neighborhood is an interactive website that takes numerical input from a user and returns numbers and strings depending on the number. For example, numbers that contain a 1 return "Beep!" while numbers with a 2 return "Boop!" Each subsequent rule has higher importance and overrides previous rules. 

### __Technologies Used__
Mr. Roboger's Neighborhood uses custom HTML and CSS. JavaScript and JQuery are used for the business and interface logic.

### __Setup/Installation__
1. Download or clone the [repository](http://github.com/jbpawlik/numberhood) to your local machine
2. Navigate to the top level of the directory
3. Open index.html in your browser

Alternately, visit [Github Pages](http://jbpawlik.github.io/numberhood) to view the site.

### __Tests/Specifications__
Describe numberhood()

Test: "Should return the inputted number"
Code:
  numberhood(21)
Expected Output: "21" 

Test: "If input is not a number, return NaN"
Code:
  numberhood('a')
Expected Output: NaN

Test: "If number is 1, return 'Beep!'"
Code:
  numberhood(1)
Expected Output: "Beep!"

Test: "If number includes 1, return 'Beep!'"
Code: 
  numberhood(21)
Expected Output: "Beep!"

Test: "If number includes 2, return 'Boop!'"
Code:
  numberhood(21)
Expected Output: "Boop!"

### __Known Bugs / Future Goals__
No bugs have been found or reported. Please contact the author if you experience poor performance.

Future goals for Mr. Roboger's Neighborhood are to take number, letter, and mixed data to return a wider variety of responses.

### __License__
This software is licensed under the [BSD license](license.txt).

[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)

Copyright (c) 2021 James Benjamin Pawlik

### __Contact Information__
Contact the author at __james.benjamin.pawlik@gmail.com__
