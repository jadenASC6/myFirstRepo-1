// a variable is declared using let like this :
let variableOne;
// a variable is used to refer to a data type, the three basic ones are strings, booleans, and numbers
let variableTwo = 'string';
let variableThree = "string2";
//both of those variables are refering to strings, to write a string quotes are needed
let variableFour = true;
let variableFive = 5 == 4; //this is a flase statement and is basically the same as saying false
// booleans are either true or false statements that's it, they can be written as a comparison or 
//as simply true or false
let variableSix = 6;
let variableSeven = 10 - 3;
// numbers are numbers LOL
//You've seen alot of this already but two slashes are used to comment out lines of code
//The computer doesn't read this if you want to comment out multiple lines use this 
/* line one
line two
line three
etc */
// values can be put into an array and be used later like so 
let arrayOfStuff = ['Jaden', 17, true, 'pizza'];
console.log(arrayOfStuff[0]);
// to print to the console use console.log([write what you want to print here]);
// array values use something called an index
// An index is a number that is tied to the value in an array in order starting from 0
// in the case of this array 'Jaden' is at index 0 and pizza is at index 4
// one super important array you can use is the process.argv array
// this array allows you to get user input in the terminal
// process.argv's second index and onwards is user input

console.log(process.argv[2]);

// go ahead and run the program using node codingBasics.js [put whatever you want here]
// you shouldve seen what you wrote logged in the console, cool huh
// if you want to see the other indexes of process.argv console.log(process.argv);
// arrays use a variety of built in functions like .push() .splice() .pop() .shift() .unshift()
// each with their own uses you can look these up to see what they do and even look for more
// you'll learn more about functions soon
// but what if you want to print everything in an array separately?
// that's what loops are for
// a loop runs a line of code until a condition is met
for (let i = 0; i < 4; i++) {
    console.log(arrayOfStuff[i]);
}
// If you checked the terminal you should've seen every value in arrayOfStuff print
// so lets break it down
// let i = 0 is exactly what it looks like you are declaring a variable named i 
// the nice part is i only exists in this loop
// since i is set to zero until i reaches 5 the loop will run over and over
// the last part i++ simply means you're adding 1 to i everytime the loop starts over
// remember you can use varibales other than i but i is usually the default variable for loops
// anything in side the curly brace after will run over and over until i meets the condition you set after declaring i
// that was alot so next up is conditionals
// conditionals set up a condition and if it is true or in some cases false the computer will run certain code
if (variableSix == 6) {
    console.log('That\'s true, I remember');
} else if (variableSix != 6) {
    console.log('Did someone change my code?');
} else {
    console.log('No one will ever see me!')
}
// notice unlike with declaring varibles this time we use == this assesses whether the statement is true or false 
// one = simply assigns a value to a variable
// if statements are lazy if any of the conditions are met the rest is skipped over
// that is why when you run this in the terminal you will always get the first result
// go back up to line  11 and change variableSix to anything else
// run the code again and you should get the second option if not make sure to save
// since condition one and two will always be fulfilled the final condition "else" which accounts for any condition that
// makes the other conditions false will never be seen
// That was alot but lets move on to functions
// remember console.log()?
// the .log() part is a function that is built into javascript
// guess what you can make your own
// a function is a block of code that you can call on anytime later on in the code
function coolFunction() {
    return 'I\'m a cool function';
}
console.log(coolFunction());
// notice functions use return, a function is not read when it is declared
// as a result it requires a call this call is simply the function's name with this ()
// the reason functions return is because they are not meant to be read but used later in the code
// since the function returns a value you can use this value later on
// functions can also have something called a parameter
// this parameter lets your function account for variables
function sumFunction(a,b) {
    return a + b;
}
// in this case a nd b are two parameters this function uses
// these parameters must be declared when calling the function

console.log(sumFunction(1,1));

//Now an example of how all of these can be used together
let helloWorld = ['Hello Sky', 'Hello Tree', 'Hello Dog'];

function helloWorldFunction() {
    return helloWorld;
}

for (let i = 0; i < helloWorld.length; i++) {
    if (i == 0) {
        console.log('...');
    } else if (i == 1) {
        console.log('I guess I should say hello...');
    } else {
        console.log(helloWorldFunction());
    }
}

// you can also use loops to print each item in an array like so :
for (let i = 0; i < helloWorld.length; i++) {
    console.log(helloWorld[i]);
}

// forgot to mention in a function return should be the last line anything after return will not be read
// also forgot to mention functions wen called do not require you put anything.[function] you simply call 
// them like so [function name]() and you're done
// play around with these and look into other embedded functions like Math.random()
// look up how to make and use objects