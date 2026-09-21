 console.log(typeof(100))   
 console.log(typeof(73.9));
     
 console.log( typeof(NaN))  
 console.log(typeof("Water"))   
 console.log(typeof(false))   
 console.log(typeof(9 != 11))   
 console.log("Orang" + "e")   
 console.log("Orange" - "s")   
 console.log("4" + "8")   
console.log("4" - "8")    
console.log("name" + 3)    
console.log("name" - 3)    
 console.log(82 * "word")   
 console.log(1 + "hello")   
 console.log("hello" + 1)   
 console.log(1 + true)   
 console.log("hello" + true)   
 console.log(typeof (Infinity))   
console.log(1 == '1')    
 console.log(1 === '1')   


// number
// number
// number
// string
// boolean
// boolean
// Orange
// NaN
//  48
//  -4
//  name3
//  NaN
//  NaN
//  1hello
//  hello1
//  2
//  hellotrue
//  number
//  true
//  false


//1


let cash = 1000;
let currentLiabilities = 500;

let cashFlowRatio = cash / currentLiabilities;

console.log(cashFlowRatio); 




//2


let revenues = 1000;
let expenses = 500;

let netIncome = revenues - expenses;

console.log(netIncome); 


//3

let profit = 1000;
let sales = 500;

let netIncomeFromSales = profit * sales;

console.log(netIncomeFromSales); 

//4


let n1 = 7;
let n2 = 9;
let n3 = 2;
let average = (n1 + n2 + n3) / 3;
console.log(average);


//5

let price = 150;
let discountPercentage = 30;
let finalPrice = price - (price * (discountPercentage / 100));
console.log(finalPrice);


//6


let age = 20;
let isEligible = age > 18 && age < 30;
console.log(isEligible);

//7
let number1_exp = 2;
let number2_exp = 3;
let exponential = number1_exp ** number2_exp;
console.log(exponential);

// 8
let number1_rem = 10;
let number2_rem = 4;
let remainder = number1_rem % number2_rem;
console.log(remainder);


// ----------------------------------------------------------------------------------------------------------

// string



//1
let str = "Welcome to Orange"; 

console.log(str.toUpperCase()); 
console.log(str.split(' ')[1].toUpperCase()); 
console.log(str.replace("Welcome to", "Hello from")); 
console.log(str.toLowerCase()); 
console.log(str.length); 
console.log(str.replace("Orange", '"Orange"')); 
console.log(str + " Jordan"); 

//2
let inputWord = "cactus"; 
let firstLetter = inputWord[0]; 
let modifiedWord = firstLetter + inputWord.slice(1).replaceAll(firstLetter, '*'); 

console.log(modifiedWord); 

// -------------------------------------------------------------------------------------------------------------------------------
// array

//1
let arr = ["Coding", "Academy", "By", "Orange"]; 

console.log(arr.concat(["Jordan"])); 
console.log(arr.slice(0, 2)); 
console.log(["Welcome", "To"].concat(arr)); 
console.log(arr.slice(1)); 
console.log(arr.join(" ")); 
console.log(arr); 
console.log([arr[0], arr[3]]); 

//2
let fruit = ["banana", "apple", "orange", "watermelon"]; 
let vegetables = ["carrot", "tomato", "pepper", "lettuce"]; 

vegetables.pop(); 
console.log(vegetables);

fruit.shift(); 
console.log(fruit);
fruit.push(fruit.indexOf("orange")); 
console.log(fruit);
vegetables.push(vegetables.length); 
console.log(vegetables);

let food = fruit.concat(vegetables); 
food.splice(4, 2); 
food.reverse(); 
console.log(food.join(",")); 

// -------------------------------------------------------------------------------------------------------------------------

//Conditionals


function checkEligibility(yearOfBirth) { 
    const currentYear = new Date().getFullYear(); 
    const age = currentYear - yearOfBirth; 
    
    if (age > 60) { 
        return "You may join the seniors' program."; 
    } else if (age > 30) { 
        return "You are not eligible. You may join other programs."; 
    } else if (age >= 18 && age <= 30) { 
        return "You are eligible. Start your application."; 
    } else if (age < 18) { 
        return "You may join the kids' program."; 
    }
}


function switchCase(str) { 
    return str.split('').map(char => 
        char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
    ).join(''); 



}

console.log(switchCase("Anas"));



function toCamelCase(str) { 
    return str.split(' ').join("");
        
}
console.log(toCamelCase("Coding Academy by Orange"))

function removeElement(arr, element) { 
    return arr.filter(item => item !== element); 
}


function checkOddOrEven(num) { 
    return num % 2 === 0 ? "Even" : "Odd"; 
}


function isNumber(val) { 
    return typeof val === 'number' && !isNaN(val); 
}


function findLargest(num1, num2) { 
    return num1 > num2 ? num1 : num2; 
}


function checkTriangleType(side1, side2, side3) { 
    if (side1 === side2 && side2 === side3) return "Equilateral"; 
    if (side1 === side2 || side1 === side3 || side2 === side3) return "Isosceles"; 
    return "Scalene"; 
}


function isNumberInRange(num, min, max) { 
    return num >= min && num <= max; 
}


function isLeapYear(year) { 
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0); 
}


// Loop


for (let i = 2; i <= 50; i += 2) { 
    console.log(i); 
}
let j = 2; 
while (j <= 50) { 
    console.log(j); 
    j += 2; 
}


for (let i = 2; i <= 50; i += 2) { 
    console.log(i); 
    console.log(i); 
}


for (let i = 2; i <= 50; i += 2) { 
    console.log(i); 
}
for (let i = 1; i <= 50; i += 2) { 
    console.log(i); 
}


for (let i = 1; i <= 100; i++) { 
    if (i % 15 === 0) console.log("FizzBuzz"); 
    else if (i % 3 === 0) console.log("Fizz"); 
    else if (i % 5 === 0) console.log("Buzz"); 
    else console.log(i); 
}


function fizzBuzz(num) { 
    if (num % 15 === 0) return "FizzBuzz"; 
    if (num % 3 === 0) return "Fizz"; 
    if (num % 5 === 0) return "Buzz"; 
    return num; 
}


function fizzBuzzRecursive(n, current = 1) { 
    if (current > n) return; 
    console.log(fizzBuzz(current)); 
    fizzBuzzRecursive(n, current + 1); 
}


function convertToBanknotes(amount, notes) { 
    let result = []; 
    for (let i = 0; i < notes.length; i++) { 
        while (amount >= notes[i]) { 
            result.push(notes[i]); 
            amount -= notes[i]; 
        }
    }
    return result.join(', '); 
}


function countCharacter(str, char) { 
    let count = 0; 
    for (let i = 0; i < str.length; i++) { 
        if (str[i].toLowerCase() === char.toLowerCase()) count++; 
    }
    return count; 
}


for (let i = 0; i <= 20; i++) console.log(i); 

for (let i = 3; i <= 29; i += 2) console.log(i); 

for (let i = 12; i >= -14; i -= 2) console.log(i); 

for (let i = 50; i >= 20; i--) { 
    if (i % 3 === 0) console.log(i); 
}


let strVal = 'CodingAcademy'; 
let arrVal = [7, 500, 'KH404', 'black', 36]; 

for (let i = 0; i < arrVal.length; i++) { 
    console.log(arrVal[i]); 
}
for (let i = strVal.length - 1; i >= 0; i--) { 
    console.log(strVal[i]); 
}


const numbersArray = [7, 23, 18, 9, 13, 38, 10, 12, 0, 124]; 
let evens = []; 
let odds = []; 

for (let i = 0; i < numbersArray.length; i++) { 
    if (numbersArray[i] % 2 === 0) { 
        evens.push(numbersArray[i]); 
    } else { 
        odds.push(numbersArray[i]); 
    }
}


function generateMeals(numMeals) { 
    const protein = ['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans']; 
    const grain = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers']; 
    const vegetable = ['peas', 'green beans', 'kale', 'edamame', 'broccoli', 'asparagus']; 
    const beverage = ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea']; 
    const dessert = ['apple', 'banana', 'more kale', 'ice cream', 'chocolate', 'kiwi']; 
    
    let generatedMeals = new Set(); 
    let mealPlans = []; 
    
    while (generatedMeals.size < numMeals) { 
        let p = protein[Math.floor(Math.random() * protein.length)]; 
        let g = grain[Math.floor(Math.random() * grain.length)]; 
        let v = vegetable[Math.floor(Math.random() * vegetable.length)]; 
        let b = beverage[Math.floor(Math.random() * beverage.length)]; 
        let d = dessert[Math.floor(Math.random() * dessert.length)]; 
        
        let currentMeal = `${p}, ${g}, ${v}, ${b}, ${d}`; 
        
        if (!generatedMeals.has(currentMeal)) { 
            generatedMeals.add(currentMeal); 
            mealPlans.push(currentMeal); 
        }
    }
    
    return mealPlans; 
}



// obj




function getProperties(obj) {
    return Object.keys(obj); 
}

function getPropertyCount(obj) {
    return Object.keys(obj).length; 
}

function combineObjects(obj1, obj2) {
    return Object.assign({}, obj1, obj2); 
}

function uppercaseProperties(obj) {
    let copy = {};
    for (let key in obj) {
        copy[key] = typeof obj[key] === 'string' ? obj[key].toUpperCase() : obj[key];
    }
    return copy; 
}

function filterNonNull(obj) {
    let copy = {};
    for (let key in obj) {
        if (obj[key] !== null) {
            copy[key] = obj[key];
        }
    }
    return copy; 
}

function getSortedPropertyNames(obj) {
    return Object.keys(obj).sort(); 
}



// JAVASCRIPT_IF (1).pdf

let age2 = 27;
if (age2 > 18) {
    console.log("You are an adult"); 
}

let num = 4;
if (num % 2 === 0) {
    console.log("The number is even"); 
}

let char = "a";
if (/^[a-zA-Z]$/.test(char)) {
    console.log("It's a letter"); 
}

let list = [1, 2, 3];
if (Array.isArray(list)) {
    console.log("It's an array"); 
}

let x = 5;
if (x > 0) {
    console.log("x is a positive number"); 
}

let z = 9;
if (z % 3 === 0) {
    console.log("z is a multiple of 3"); 
}

let password = "mypassword123";
if (password.length >= 8) {
    console.log("Your password is strong"); 
}

let workingAge = 30;
if (workingAge >= 18 && workingAge <= 65) {
    console.log("You are of working age"); 
}

let color = "red";
if (["red", "green", "blue"].includes(color)) {
    console.log("color is a primary color"); 
}

function isValidNumber(val) {
    if (!isNaN(val)) {
        console.log(`${val} is a valid number`); 
    } else {
        console.log(`${val} is not a number`); 
    }
}