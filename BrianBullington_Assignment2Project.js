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
var myLunch= myApple;
var myApple2={color: "red", name: "apple"};
var myMango={name: "banana", color: "yellow", taste:"delicious"};

var fruitTray1={myApple, myBanana};
var fruitTray2={myLunch, myBanana};         //note: fruitTray1 and fruitTray2 have identical elements at their deepest level, but when iterating through it is noted that the top level key has different names.
var fruitTray3={myApple, myMango};
var fruitTray4={myMango, myApple};

console.log(fruitTray1);
console.log(fruitTray2);






// console.log(Object.keys(myApple2).sort());

var num1= 1;
var num2= 2;

var word1="1";
var word2="2";



console.log("***********");

function deepEqual(elem1, elem2) {
    if (elem1 === elem2) {                            //true if passed values are identical (or both are null)
        return true;
    }
    else if (elem1 === null || elem2 === null || typeof elem1 != typeof elem2) {     //returns false exactly 1 object is null
        return false;
    }
    else if (typeof elem1 == "object" && typeof elem2 == "object") {  //2 objects

        for (var key in elem1) {                                        //checks if all keys in elem 1 are also in elem 2
            if (elem2[key] == undefined) {
                // console.log("found a key in elem1 that wasn't in elem 2");
                // console.log(key, elem1[key], elem2[key]);
                return false;
            }
        }
        for (var key in elem2) {
            if (elem1[key] == undefined) {                              //checks to see if all elem2 keys are also in elem1
                // console.log("found a key in elem1 that wasn't in elem 2");
                // console.log(key, elem1[key], elem2[key]);
                return false;
            }
            // console.log("time to dive deep with ", elem1[key], elem2[key]);  //test code to check the recursion
            return deepEqual(elem1[key], elem2[key]);                           //if elem2 key is in elem1, checks to see if the values of those keys is the same using deepEqual. If the values associated with the key are objects, this will get recursively dive in. Any "not equals" will throw their own "false" from inside the recursion
        }
        return true;                               //2 objects, all the keys are identical, and comparing through never threw a "false"
    }
}

console.log("2 and 2: ", deepEqual(2,2));                               //identical numbers
console.log("null  and 2: ", deepEqual(null,2));                        //null and a number
console.log("null and null: ", deepEqual(null,null));                   //2 nulls
console.log("myApple and myApple2: ", deepEqual(myApple2, myApple));    //two objects with identical insides
console.log("myLunch and myApple2: ", deepEqual(myLunch, myApple));     //two objects that point to the same value
console.log("myMango and myApple2: ", deepEqual(myMango, myApple));     //two objects with different keys
console.log("fruitTray1 and fruitTray2: ", deepEqual(fruitTray1, fruitTray2));  //two objects made of two identical objects... but comes back as false because the name of the objects inside are different. (i.e. when it sees the keys "myLunch and "myApple" it treats these as different
console.log("fruitTray2 and fruitTray3: ", deepEqual(fruitTray2, fruitTray3));  //two objects made of different objects
console.log("fruitTray3 and fruitTray4: ", deepEqual(fruitTray3, fruitTray4));  //two objects made of different objects

// Your code here.
var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true