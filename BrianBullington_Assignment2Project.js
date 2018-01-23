//Brian Bullington's code for Assignment 2: ReverseString(), IsUnique(), DeepEqual

console.log("***********FizzBuzz Demonstration*********")

var startString= "abcd"
//var startStringLength=startString.length;
var backString = "";


backString=startString[0]
startString= startString.slice(1);

console.log("startString is ", startString);
console.log("backString is ", backString);


function ReverseString(startString) {                 //takes string, saves it as startString and returns reverse string
    var backString = "";                              //blank starting string to store output
    while (startString.length >= 1) {                 //each iteration removes a letter from the string. loop runs until it is done
        backString= backString + startString[0]       //puts the first letter of startString to the end of backString
        startString= startString.slice(1);

        backString= startString.slice(0,1)+backString;
        console.log("startString is ", startString);
        console.log("backString is ", backString);
    }
}

// ReverseString("abcdefg")


//     {
//         return "FizzBuzz";
//     }
//     else if(value%3==0){
//         return "Fizz";
//     }
//     else if(value%5==0){
//         return "Buzz";
//     }
//     else{
//         return value;
//     }
// }
//
//
//
//
//
//
// function fizzbuzzdesignator(value){                 //Takes number and determines if divisible by 5&3, 3, 5, or none of the above. Returns what to print.
//     if(value%5==0 && value%3==0)
//     {
//         return "FizzBuzz";
//     }
//     else if(value%3==0){
//         return "Fizz";
//     }
//     else if(value%5==0){
//         return "Buzz";
//     }
//     else{
//         return value;
//     }
// }
//
// for(var i=1; i<=100; i++){                           //iterates to 100, printing based on teh fizzbuzzdesignator function
//     console.log(fizzbuzzdesignator(i));
// }
//
// console.log("************1000th prime************")
//
//
// function isprime(value){
//     for(i=2; i<value; i++){
//         if(value%i==0){
//             //console.log(i);
//             return false;
//         }
//     }
//     return value>1;
// }
// //console.log(isprime(14));
//
// var primeNumberCounter = 0;  //This will be where I count up to the 1000th prime number
//
// for(testcase=2; testcase<100000; testcase++){       //testcase is the iterative number to test. Starting at 2 to avoid 1 and 0. Limit put to prevent infinite loop.
//     if(isprime(testcase)){                          // test if testcase if prime. If so, then iterate up primeNumberCounter
//         primeNumberCounter++
//     }
//     if(primeNumberCounter==1000){                   //when we reach the 1000th prime number, then print out what the number is, i.e. testcase
//         console.log(testcase+ "is the "+ primeNumberCounter + "th prime!");
//         break;                                      //end for loop
//     }
// }
//
// console.log("test");
//
