let obj1 = { name: "Adam", age: 25, gender: "male" };
console.log(obj1.name, obj1.age, obj1.gender); 

let obj2 = { name: "Adam", age: 25 };
obj2.gender = "male"; 
console.log(obj2); 

let obj3 = { name: "Adam", age: 25 };
console.log(obj3.name); 

let arr1 = [1, 2, 3, 4, 5];
arr1.forEach(num => console.log(num)); 

let arr2 = ["apple", "banana", "cherry"];
console.log(arr2.sort()); 

let arr3A = ["apple", "banana", "cherry"];
console.log(arr3A.reverse()); 

let arr3B_1 = [1, 2, 3];
let arr3B_2 = [4, 5, 6];
console.log(arr3B_1.concat(arr3B_2)); 

let arr3C = [1, 2, 3, 4, 5, 6];
console.log(arr3C.slice(1, 4)); 

let arr3D = [1, 2, 3, 4, 5];
arr3D.splice(1, 1); 
console.log(arr3D); 

let arr3E = [1, 2, 3, 4, 5];
console.log(arr3E.indexOf(3)); 

let arr3F = [1, 2, 3, 4, 5];
console.log(arr3F.join(",")); 

let arr3G = "1,2,3,4,5";
console.log(arr3G.split(",")); 

let arr7 = [1, 2, 3, 4, 5];
console.log(arr7.length); 

let arr8 = [1, 2, 3, 4, 5];
for (let item of arr8) {
    console.log(item); 
}

let arr9 = [1, 2, 3, 4, 5];
console.log(Array.isArray(arr9));