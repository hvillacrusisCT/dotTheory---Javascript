/*Task: Imagine you have 10 images on a web page. 
Each image is 190 pixels wide. Using the two variables in this script,
create a new variable named totalWidth that multiplies width by totalImages. Since the value of width is a string, you'll need to use a 
built-in JavaScript function to retrieve the number value.*/

// Variables
let width = "190";
let totalImages = 10;

// Convert the width string to an integer
let widthInt = parseInt(width);

// Calculate the total width
let totalWidth = widthInt * totalImages;

// Display the result
console.log("Total width of images:", totalWidth);
