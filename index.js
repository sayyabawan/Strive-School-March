/* Ex.A
   Create a variable called "test" and assign a string to it.
*/
let test = "This is a string"

/* Ex.B
    Create a variable called "sum" and assign to it the result of the sum between 10 and 20.
*/
let x = 10
let y = 20
let sum = x + y

 /* Ex.C 
    Create a variable called "random" and assign to it a random number between 0 and 20 (it should be randomly created at each execution).
*/
let random = Math.random() * (20 - 0) +1


/* Ex.D
    Create a variable called "me" and assign to it an object containing the following information: name = your name, surname = your surname, age = your age.
*/
let me = {
    name : "Sayyab",
    surname: "Awan",
    age: 25,
};

/* Ex.E 
    Programmatically remove the age property from the previously create object.
*/
delete me.age; 

/* Ex.F 
   Programmatically add to the object me an array called "skills", containing the programming languages you know right now.
*/

me.skills = ["Python", "Java", "Javascript"]


/* Ex.G 
   Programmatically remove the last skill from the "skills" array inside the "me" object.
*/
me.skills.pop()

// JS Functions
/* Ex.1
    Write a function called "dice"; it should randomize an integer number between 1 and 6.
*/
const dice = function (){
    let randomize = Math.floor(Math.random() * (6 - 0)) +1
    console.log(randomize)
}
 dice()



 /* Ex.2 
    Write a function called "whoIsBigger" which receives 2 numbers as parameters and returns the biggest one.
*/
const whoIsBigger = function (numb1,numb2){
    let number1 = numb1
    let number2 = numb2
    if (number1 > number2) {
        console.log(`The bigger number is ${number1}`)
    } else {
        console.log(`The bigger number is ${number2}`)
    }

}
whoIsBigger(71,50)


/* Ex.3
    Write a function called "splitMe" which receives a string as a parameter and returns an array with every word in that string.
    Ex. splitMe("I love coding") => returns ["I", "Love", "Coding"]
*/
let splitMe = function (splitText){
    let mySplit = splitText
    let result = mySplit.split (' ')
    console.log(result)
}
splitMe("Hello I am Awan")


/* Ex.4
    Write a function called "deleteOne" which receives a string and a boolean as parameters. If the boolean value is true it should return the string without the first letter, otherwise it should remove the last one from it.
*/

const deleteOne = function (stringText,booleanText) {
    let string1 = stringText
    let boolean = booleanText

    if (boolean === true){
        let result = string1.slice(1)
        console.log(result)

    }   else {
        console.log(string1.slice(0,-1))
    }
}
deleteOne("Strive", false)


/* Ex.5
   Write a function called "onlyLetters" which receives a string as a parameter and returns it removing all the digits.
   Ex.: onlyLetters("I have 4 dogs")  => returns "I have  dogs"
*/

const onlyLetters = function (anyText) {
    const myText = anyText
    const withoutNumber = myText.replace(/\d+/g, '')

    console.log(withoutNumber)
}

onlyLetters("Hello 2 me")

/* Ex.6 
   Write a function called "isThisAnEmail" which receives a string as a parameter and returns true if the string is a valid email address.
*/

const whatDayIsIt = function (){
    let day = new Date();
    let weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    let today = weekday[day.getDay()];

    console.log(`Today is ${today}`)
}
whatDayIsIt()
g