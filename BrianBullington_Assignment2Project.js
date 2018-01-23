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



console.log("\n"+ "\n"+ "************Deep Equal************************");

var myApple={name: "apple",color: "red"};

var myBanana={name: "banana", color: "yellow"};

var fruitTray1={myApple, myBanana};
var fruitTray2={myApple, myBanana};
var fruitTray3={myApple, myMango};


var myMango={name: "banana", color: "yellow", taste:"delicious"};

var myLunch= myApple;
// console.log(Object.keys(myLunch).sort());

var myApple2={color: "red", name: "apple"};
// console.log(Object.keys(myApple2).sort());

var num1= 1;
var num2= 2;

var word1="1";
var word2="2";

console.log(myLunch.color);

console.log(Object.keys(myApple).length);

// console.log(Object.keys(myApple).sort());
// console.log(Object.keys(myApple2).sort());
// console.log(Object.keys(myApple).sort());
// console.log(Object.keys(myApple2).sort());
// console.log(Object.keys(myApple).sort()==Object.keys(myApple2).sort());
// console.log(Object.keys(myApple));

console.log(myApple2.colors==undefined);

console.log("***********");

function deepEqual(elem1, elem2) {
    if (elem1 === elem2) {                            //true if objects are identical
        return "elements are identical";
    }
    else if ((elem1 === null && elem2 === null)) {    //true if both objects are null
        return "nulls are equal enough";
    }
    else if (elem1 === null || elem2 === null) {     //returns false exactly 1 object is null
        return "null doesn't equal anything else";
    }
    else if (typeof elem1 == "object" && typeof elem2 == "object") {  //2 objects

        for (var key in elem1) {                                        //checks if all keys in elem 1 are also in elem 2
            if (elem2[key] == undefined) {
                console.log("found a key in elem1 that wasn't in elem 2");   //quickly checks that every key in elem1 is also in elem 2
                console.log(key, elem1[key], elem2[key]);
                return "not the same 1"
            }
        }
        for (var key in elem2) {                                        //checks if all keys in elem 1 are also in elem 2
            if (elem1[key] == undefined) {
                console.log("found a key in elem1 that wasn't in elem 2");   //quickly checks that every key in elem1 is also in elem 2
                console.log(key, elem1[key], elem2[key]);
                return "not the same 2"
            }
        }
        console.log("checkpoint same keys");
        for (var key in elem1) {                                        //once we know the keys are the same, we check each element in the key with deepEqual
            deepEqual(elem1[key], elem2[key]);
        }
        return "two objects are equal!!";
    }
}

console.log("deepEqual 2 and 2 ", deepEqual(2,2));
console.log("**");
console.log("deepEqual null and null", deepEqual(null,null));
console.log("**");
// console.log("deepEqual null and 2 ", deepEqual(null,2));
// console.log("deepEqual myLunch and myApple2 ", deepEqual(myLunch, myApple));
console.log("deepEqual myApple and myApple2 ", deepEqual(myApple2, myApple));
console.log("**");
console.log("deepEqual myMango and myApple2 ", deepEqual(myMango, myApple));

console.log("******hlkljkhlkhjl************")
// for (var x in myApple){
//     console.log(x);
//     console.log(myApple[x]);







// console.log(myApple.names);
//
// console.log(Object.keys(myApple).length);
// console.log(Object.keys(myApple).sort());
// console.log(Object.keys(myApple2).sort());
// console.log(Object.keys(myApple).sort()==Object.keys(myApple2).sort());

// console.log("deepEqual two and 2 ", deepEqual("two",2));