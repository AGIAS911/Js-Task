

//function / loop


function findSmallest(arr) {
    return Math.min(...arr); 
}

function AlphabeticalOrder(str) {
    return str.split('').sort().join(''); 
}

function factorial(n) {
    if (n === 0 || n === 1) return 1; 
    return n * factorial(n - 1); 
}

function oddOrEven(num) {
    return num % 2 === 0 ? "Even" : "Odd"; 
}

function addUp(num) {
    let sum = 0; 
    for (let i = num; i >= 0; i--) sum += i; 
    return sum; 
}

function minMaxLengthAverage(arr) {
    let min = Math.min(...arr); 
    let max = Math.max(...arr); 
    let len = arr.length; 
    let avg = arr.reduce((a, b) => a + b, 0) / len; 
    return [min, max, len, avg]; 
}

function countWords(str) {
    return str.split(' ').length; 
}

function MultiplyByLength(arr) {
    let len = arr.length; 
    return arr.map(num => num * len); 
}

function checkEnding(str1, str2) {
    return str1.endsWith(str2); 
}

function doubleChar(str) {
    return str.split('').map(char => char + char).join(''); 
}

function findIndex(arr, element) {
    return arr.indexOf(element); 
}




//looop


let i = 1;
while (i <= 10) {
    console.log(i); 
    i++;
}

let arr2_loop = [1, 2, 3, 4, 5];
for (let i = 0; i < arr2_loop.length; i++) {
    console.log(arr2_loop[i]); 
}

for (let i = 0; i <= 10; i += 2) {
    console.log(i); 
}

let sum4 = 0;
for (let i = 1; i <= 10; i++) {
    sum4 += i; 
}
console.log(sum4); 

let arr5_loop = [1, 2, 3, 4, 5];
let max = arr5_loop[0];
for (let i = 1; i < arr5_loop.length; i++) {
    if (arr5_loop[i] > max) max = arr5_loop[i]; 
}
console.log(max); 

let arr6_loop = [1, 2, 3, 4, 5];
let sum6 = 0;
for (let i = 0; i < arr6_loop.length; i++) {
    sum6 += arr6_loop[i]; 
}
console.log(sum6 / arr6_loop.length); 

let num7 = 5;
let fact7 = 1;
for (let i = 1; i <= num7; i++) {
    fact7 *= i; 
}
console.log(fact7); 

let limit8 = 10;
let a = 0, b = 1;
let fibOut = [0];
let nextFib = 1;
while (nextFib <= limit8) {
    fibOut.push(nextFib); 
    let temp = a + b; 
    a = b; 
    b = temp; 
    nextFib = a + b; 
}
console.log(fibOut.join(' ')); 

let limit9 = 20;
let primes = [];
for (let num = 2; num <= limit9; num++) {
    let isPrime = true; 
    for (let j = 2; j < num; j++) {
        if (num % j === 0) {
            isPrime = false; 
            break; 
        }
    }
    if (isPrime) primes.push(num); 
}
console.log(primes.join(' ')); 

let arr10 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
for (let i = 0; i < arr10.length; i++) {
    for (let j = 0; j < arr10[i].length; j++) {
        console.log(arr10[i][j]); 
    }
}

let arr11 = [1, 2, 3, 4, 5];
for (let i = arr11.length - 1; i >= 0; i--) {
    console.log(arr11[i]); 
}

let arr12 = [1, 2, 3, 4, 5];
let step = 2;
for (let i = 0; i < arr12.length; i += step) {
    console.log(arr12[i]); 
}

let arr13 = [1, 2, 1, 3, 2, 1];
let count13 = 0;
for (let i = 0; i < arr13.length; i++) {
    if (arr13[i] === 1) count13++; 
}
console.log(count13); 

const heros = [
    {name: 'Iron Man', power: 'Tech'}, 
    {name: 'Spider-Man', power: 'Spider abilities'}, 
    {name: 'Thor', power: 'Godly powers'}, 
    {name: 'Hulk', power: 'Super strength'} 
];
const newHeros = heros.map((heroObj, index) => {
    return {
        hero: heroObj.name, 
        power: heroObj.power, 
        id: index 
    };
});
console.log(newHeros); 

const inputWords = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
function filterWords(arr) {
    return arr.filter(word => word.length > 7); 
}
console.log(filterWords(inputWords)); 

const numbers16 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sumSquaredDivisibleBy5 = numbers16.reduce((acc, current) => {
    if (current % 5 === 0) {
        return acc + (current * current); 
    }
    return acc; 
}, 0);
console.log(sumSquaredDivisibleBy5);