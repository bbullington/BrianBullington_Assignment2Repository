//Brian Bullington's code for Assignment 2: ReverseString(), IsUnique(), DeepEqual

console.log("***********FizzBuzz Demonstration*********")

// var startString= "abcd"
// //var startStringLength=startString.length;
// var backString = "";
//
// backString=startString[0]
// startString= startString.slice(1);
//
// console.log("startString is ", startString);
// console.log("backString is ", backString);

console.log("************Reverse String************************")

function ReverseString(startString) {                 //takes string, saves it as startString and returns reverse string
    if(startString===null){
        return "Nice try; here you go: llun"          //handles null value in a cheeky way
    }
    var backString = "";                              //blank starting string to store output
    while (startString.length >= 1) {                 //each iteration removes a letter from the string. loop runs until it is done
        backString= startString[0] + backString      //puts the first letter of startString to the start of backString
        startString= startString.slice(1);            //cuts the first letter off startString
        // console.log("startString is ", startString);   //test outputs
        // console.log("backString is ", backString);
    }
    return backString;
}

console.log(ReverseString(null));
console.log(ReverseString("abcdefghijklmnop"));
console.log(ReverseString(16));

console.log("\n"+ "\n"+ "************Is Unique************************");
