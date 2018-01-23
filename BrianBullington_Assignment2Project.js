//Brian Bullington's code for Assignment 2: ReverseString(), IsUnique(), DeepEqual

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

console.log(ReverseString("abcdefghijklmnop"));
console.log(ReverseString(16));
console.log(ReverseString(null));



console.log("\n"+ "\n"+ "************Is Unique************************");


function isUnique(myArray) {                 //takes string, saves it as startString and returns reverse string

    for(var i=0; i<myArray.length; i++){     // initial loop starts with the first element and iterates through the whole array
        //console.log(myArray[i]);

        for(var compareElement=(i+1); compareElement<myArray.length; compareElement++){  //second loop iterates through each element of the array starting with the one after  the element to be checked.
            if(myArray[i]===myArray[compareElement]){                                    //is the target element the same as each successive one? If a single case is found, then "false" is returned as the answer to "is unique?"
                //console.log(myArray[i], " is not unique");                             //tester that says what it found that is unique.
                return false;
            }
            //console.log(myArray[i], " is not the same as ", myArray[compareElement]);   //tester that prints each successful time through to track what is being compared
        }
    }
    //console.log("We checked it all and it looks good");                               //tester that prints when you get to the end.
    return true

}

console.log(isUnique([5, "a", "b", "c", 12, 14, "d"]));
console.log(isUnique([5, "a", "b", "c", 12, 5, 14, "d", "b"]));

