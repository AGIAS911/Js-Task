//1


let name = "Jone";

function test() {
    let x = 10;
    
    if (true) {
        let y = 20;
        console.log(y); 
    }
    }

test();

//-----------------------------------------------------------------------------------

//2



function Person(name, age) {
    this.name = name;
    this.age = age;
}


Person.prototype.greet = function() {
    return "Hello, my name is " + this.name + " and I am " + this.age + " years old.";
};


function Employee(name, age, employeeId, position) {

    Person.call(this, name, age);
    
    this.employeeId = employeeId;
    this.position = position;
}


Employee.prototype = Object.create(Person.prototype);

Employee.prototype.constructor = Employee;

Employee.prototype.greet = function() {
    return "Hello, I am " + this.name + ", working as a " + this.position + " (ID: " + this.employeeId + ").";
};


var emp1 = new Employee("Ahmed", 30, "E101", "Backend Developer");
var emp2 = new Employee("Sara", 28, "E102", "Flutter Developer");
var emp3 = new Employee("Khaled", 35, "E103", "Project Manager");


console.log(emp1.greet());
console.log(emp2.greet());
console.log(emp3.greet());


console.log("Is emp1 a Person? " + (emp1 instanceof Person)); 
console.log("Is emp1 an Employee? " + (emp1 instanceof Employee)); 





//3




let group1 = ["Zaid", "Omar", "Ali", "Aya", "Mona", "Fadi"];
for(let i = 7; i <= 25; i++) group1.push("Student A" + i); 
let group2 = ["Rami", "Samer", "Laila", "Nour", "Tariq"];
for(let i = 6; i <= 25; i++) group2.push("Student B" + i); 
let allStudents = group1.concat(group2);


allStudents.sort();


allStudents.reverse();

let isRamiIncluded = allStudents.includes("Rami");
console.log("Is Rami in the list? " + isRamiIncluded);


allStudents.forEach(function(student, index) {
    console.log("Index: " + index + " - Name: " + student);
});



//4




let students = [];
for (let i = 1; i <= 50; i++) {

    let randomGrade = Math.floor(Math.random() * 51) + 50; 
    students.push({ id: i, name: "Student " + i, grade: randomGrade });
}


students.splice(10, 1); 


students.splice(5, 0, { id: 99, name: "Ahmed (New)", grade: 95 });

students.splice(20, 1, { id: 100, name: "Sara (Replaced)", grade: 88 });


let someStudents = students.slice(0, 5);
console.log("A copied slice of the array:", someStudents);


students.sort(function(a, b) {
    return b.grade - a.grade;
});


console.log("--- Final Sorted Student List ---");
students.forEach(function(student) {
    console.log("ID: " + student.id + " | Name: " + student.name + " | Grade: " + student.grade);
});









//5


let product = {
    id: 101,
    name: "Wireless Mouse",
    price: 25.50,
    category: "Electronics",
    available: true
};

console.log("Original Object:", product);

let jsonString = JSON.stringify(product);
console.log("JSON String:", jsonString);

let parsedObject = JSON.parse(jsonString);
console.log("Converted Object:", parsedObject);


let invalidJsonString = "{ id: 102, name: 'Keyboard', price: 45 }"; 

try {
    let errorObject = JSON.parse(invalidJsonString);
    console.log(errorObject);
} catch (error) {
    console.log("Error caught: Invalid JSON format!");
    console.log("Error details:", error.message);
}

//6

// 1. إنشاء المخزون الأول ويحتوي على 10 منتجات
let mainInventory = [
    { id: 1, name: "Laptop", price: 1200, category: "Electronics", quantity: 10 },
    { id: 2, name: "Mouse", price: 25, category: "Electronics", quantity: 50 },
    { id: 3, name: "Desk", price: 150, category: "Furniture", quantity: 5 },
    { id: 4, name: "Chair", price: 85, category: "Furniture", quantity: 20 },
    { id: 5, name: "Monitor", price: 300, category: "Electronics", quantity: 15 },
    { id: 6, name: "Keyboard", price: 45, category: "Electronics", quantity: 30 },
    { id: 7, name: "Lamp", price: 15, category: "Decor", quantity: 40 },
    { id: 8, name: "Notebook", price: 5, category: "Stationery", quantity: 100 },
    { id: 9, name: "Pen", price: 2, category: "Stationery", quantity: 200 },
    { id: 10, name: "Backpack", price: 40, category: "Accessories", quantity: 25 }
];


mainInventory.sort(function(a, b) {
    return a.price - b.price; 
});
console.log("Inventory sorted by price:", mainInventory);


let availableCategories = ["Electronics", "Furniture", "Decor", "Stationery", "Accessories"];
let hasFurniture = availableCategories.includes("Furniture");
console.log("Does the store sell Furniture? " + hasFurniture);


let removedProduct = mainInventory.splice(3, 1);
console.log("Removed Product:", removedProduct);

let topFiveCheapest = mainInventory.slice(0, 5);
console.log("Top 5 Cheapest Products:", topFiveCheapest);

let newBranchInventory = [
    { id: 11, name: "Tablet", price: 400, category: "Electronics", quantity: 12 },
    { id: 12, name: "Headphones", price: 80, category: "Electronics", quantity: 35 }
];

let finalMergedInventory = mainInventory.concat(newBranchInventory);
console.log("Final Merged Inventory:", finalMergedInventory);



//7




const square = n => n * n;


const isEven = n => n % 2 === 0;


const numbers = [1, 2, 3, 4, 5, 6];


const squaredNumbers = numbers.map(n => n * n);
console.log("Squared Numbers:", squaredNumbers); 


const evenNumbers = numbers.filter(n => n % 2 === 0);
console.log("Even Numbers:", evenNumbers); 


const products = [
    { name: "Laptop", price: 1000 },
    { name: "Mouse", price: 50 },
    { name: "Keyboard", price: 100 }
];

const calculateTotal = items => items.reduce((total, item) => total + item.price, 0);

console.log("Total Price:", calculateTotal(products)); 





//8




const userProfile = {
    namee: "Anas",
    email: "anas@example.com",
    age: 22,
    address: "Zarqa, Jordan"
};


const { namee, email, address: residence } = userProfile;

console.log("Name:", namee);
console.log("Email:", email);
console.log("Residence:", residence);


const skills = ["C#", "Flutter", "JavaScript", "SQL"];
const [primarySkill, secondarySkill, ...otherSkills] = skills;

console.log("Primary Skill:", primarySkill);     
console.log("Secondary Skill:", secondarySkill); 
console.log("Other Skills:", otherSkills);       
function createUser(username, role = "Regular User", isActive = true) {
    return {
        username: username,
        role: role,
        isActive: isActive
    };
}



const adminUser = createUser("Ahmad", "Admin", false);
console.log("Admin User:", adminUser);


const normalUser = createUser("Sara");
console.log("Normal User:", normalUser); 




//9



const classA_Students = ["S101", "S102", "S103"];
const classB_Students = ["S103", "S104", "S105"];

const allEnrolledStudents = [...classA_Students, ...classB_Students];
console.log("All Students (with duplicates):", allEnrolledStudents);


const uniqueStudents = [...new Set(allEnrolledStudents)];
console.log("Unique Students:", uniqueStudents);

function calculateAverage(...grades) {
   
    if (grades.length === 0) return 0;
    const sum = grades.reduce((total, grade) => total + grade, 0);
    return sum / grades.length;
}

const studentGradesMap = new Map();

studentGradesMap.set("S101", calculateAverage(85, 90, 92)); 
studentGradesMap.set("S102", calculateAverage(70, 75));     
studentGradesMap.set("S103", calculateAverage(100, 95));


console.log("Grade for S101:", studentGradesMap.get("S101"));


studentGradesMap.set("S102", 80); 
console.log("Updated Grade for S102:", studentGradesMap.get("S102"));

studentGradesMap.delete("S103"); 

const finalStudentDataArray = Array.from(studentGradesMap);

console.log("Final Student Data Array:", finalStudentDataArray);



//10



 const students2 = [
            {
                name: "Anas",
                id: 101,
                grade: 85
            },
            {
                name: "Ahmad",
                id: 102,
                grade: 72
            },
            {
                name: "Omar",
                id: 103,
                grade: 45
            },
            {
                name: "Mohammad",
                id: 104,
                grade: 91
            },
            {
                name: "Yousef",
                id: 105,
                grade: 58
            }
        ];

        const report = document.getElementById("report");

        students2.forEach(student => {
            const status = student.grade >= 50 ? "Pass" : "Fail";

            const studentReport = `
                <div>
                    <h2>Student Report</h2>
                    <p>Name: ${student.name}</p>
                    <p>ID: ${student.id}</p>
                    <p>Grade: ${student.grade}</p>
                    <p>Status: ${status}</p>
                </div>
                <hr>
            `;

            report.innerHTML += studentReport;
        });



//11


class Person1 {

    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

 
    getInfo() {
        return `Name: \({this.name} | Email:\){this.email}`;
    }
}


class Student extends Person1 {
    constructor(name, email, major) {
       
        super(name, email);
        this.major = major; 
    }


    getInfo() {
      
        return `\({super.getInfo()} | Role: Student | Major:\){this.major}`;
    }
}


class Instructor extends Person1 {
    constructor(name, email, department) {
        super(name, email);
        this.department = department;
    }

   
    getInfo() {
        return `\({super.getInfo()} | Role: Instructor | Dept:\){this.department}`;
    }
}


const person1 = new Person1("Omar", "omar@example.com");
const student1 = new Student("Anas", "anas@example.com", "Computer Information Systems");
const instructor1 = new Instructor("Dr. Ahmad", "ahmad@example.com", "Computer Science");


console.log(person1.getInfo());


console.log(student1.getInfo());


console.log(instructor1.getInfo());


//12 => another files


//13

  const output = document.getElementById("output");

        localStorage.setItem("name", "Anas");
        localStorage.setItem("age", "22");
        localStorage.setItem("major", "CIS");

        function displayStorage() {
            output.innerHTML = "";

            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                const value = localStorage.getItem(key);

                output.innerHTML += `
                    <p>${key}: ${value}</p>
                `;
            }

            output.innerHTML += `
                <p>Total Items: ${localStorage.length}</p>
            `;
        }

        document.getElementById("saveBtn").addEventListener("click", () => {
            localStorage.setItem("name", "Anas");
            localStorage.setItem("age", "22");
            localStorage.setItem("major", "CIS");

            displayStorage();
        });

        document.getElementById("getBtn").addEventListener("click", () => {
            const name = localStorage.getItem("name");

            output.innerHTML = `
                <p>Name: ${name}</p>
            `;
        });

        document.getElementById("removeBtn").addEventListener("click", () => {
            localStorage.removeItem("name");

            displayStorage();
        });

        document.getElementById("clearBtn").addEventListener("click", () => {
            localStorage.clear();

            displayStorage();
        });

        displayStorage();



        //14


        function toDoList(){




            
/* ============================================================
   EXERCISE: MISSION CHECKLIST
   Build a working to-do app for the Space Explorer crew.

   WHAT THE FINISHED APP DOES:
   1. Shows the starting tasks from the data below
   2. Adds a new task when the form is submitted
   3. Marks a task as done (or not done) when you click its text
   4. Deletes a task when you click its Delete button
   5. Shows how many tasks are still remaining
   6. Shows a message when the list is completely empty
   7. Clears all completed tasks with one button

   WHAT YOU WILL PRACTICE:
   objects and arrays of objects, loops, functions, selecting
   elements, createElement, appendChild, classList, dataset,
   addEventListener, event.target, and preventDefault.

   HOW TO WORK:
   Go step by step, in order. Each step has a TODO, some hints,
   and a CHECKPOINT. Do not move on until the checkpoint works.
   Keep the browser console open (F12) to catch errors early.

   THE BIG IDEA:
   The tasks ARRAY is the single source of truth. We never edit
   the list on the page directly. Instead we:
   change the array  ->  call renderTasks()  ->  page redraws
   ============================================================ */


/* ===== THE DATA (given) =====
   Each task is an object with three keys:
   id    a unique number, so we can tell tasks apart
   text  what the task says
   done  true if completed, false if not */

let tasks = [
   { id: 1, text: "Check the rover battery", done: false },
   { id: 2, text: "Review the Mars landing map", done: true },
   { id: 3, text: "Brief Rania on the launch plan", done: false }
];

let nextId = 4;

const savedTasks = localStorage.getItem("tasks");

if (savedTasks) {
   tasks = JSON.parse(savedTasks);
}

const savedNextId = localStorage.getItem("nextId");

if (savedNextId) {
   nextId = Number(savedNextId);
}


/* ============================================================
   STEP 1: SELECT THE ELEMENTS
   TODO: Store each of these elements in a const variable.

   IDs you need:
   task-form, task-input, task-list, counter, empty-msg, clear-done

   Hint: document.getElementById("...")
   CHECKPOINT: console.log one of them, you should see the element,
   not null. If you see null, check the spelling of the id.
   ============================================================ */

const formTask = document.getElementById("task-form");
const inputTask = document.getElementById("task-input");
const inputCount = document.getElementById("char-count");
const taskList = document.getElementById("task-list");
const emptyMsg = document.getElementById("empty-msg");
const taskCounter = document.getElementById("counter");
const clearBtn = document.getElementById("clear-done");


/* ============================================================
   STEP 2: WRITE THE renderTasks() FUNCTION
   This function draws the whole list from the tasks array.

   TODO inside the function:
   a) Empty the list first, so we don't duplicate items:
      list.innerHTML = "";
   b) Loop over the tasks array (for...of works well here)
   c) For EACH task, create this structure:

      <li data-id="1">
        <span class="task-text">Check the rover battery</span>
        <button class="delete-btn">Delete</button>
      </li>

   Hints:
   document.createElement("li")
   li.dataset.id = task.id
   span.textContent = task.text
   span.classList.add("task-text")
   li.appendChild(span)

   d) If task.done is true, add the class "done" to the li
   e) Append the li to the list
   f) At the very end, call updateCounter() (you write it in step 4)

   CHECKPOINT: after step 3, you should see the 3 starting tasks,
   and the second one should appear crossed out.
   ============================================================ */

function renderTasks() {

   taskList.innerHTML = "";

   if (tasks.length == 0) {
      emptyMsg.classList.remove("hidden");
      updateCounter();
      return;
   }

   emptyMsg.classList.add("hidden");

   tasks.forEach((task) => {

      const li = document.createElement("li");
      const span = document.createElement("span");
      const btn = document.createElement("button");

      li.dataset.id = task.id;

      span.textContent = task.text;
      span.classList.add("task-text");

      btn.textContent = "Delete";
      btn.classList.add("delete-btn");

      if (task.done) {

         li.classList.add("done");
         li.appendChild(span);
         taskList.appendChild(li);

      }
      else {
         li.appendChild(span);
         li.appendChild(btn);

         taskList.appendChild(li);
      }

   });

   updateCounter();
}


/* ============================================================
   STEP 3: CALL renderTasks() ON PAGE LOAD
   TODO: Scroll to the very bottom of this file and call the
   function there, so the list appears when the page opens.
   ============================================================ */


/* ============================================================
   STEP 4: WRITE THE updateCounter() FUNCTION
   TODO:
   a) Count how many tasks have done === false
      Hint: start a variable at 0, loop, add 1 when not done
   b) Write the result into the counter element:
      "2 task(s) remaining"
   c) If tasks.length is 0, REMOVE the "hidden" class from the
      empty message. Otherwise ADD the "hidden" class.

   CHECKPOINT: the footer should say "2 task(s) remaining".
   ============================================================ */

function updateCounter() {

   let remaindConut = 0;

   tasks.forEach((task) => {

      if (task.done === false) {
         remaindConut++;
      }

   });

   taskCounter.textContent = `${remaindConut} task(s) remaining`;

}


/* ============================================================
   STEP 5: ADD A NEW TASK WITH THE FORM
   TODO: Listen for the "submit" event on the form.
   Inside the listener:
   a) Stop the page from reloading: event.preventDefault()
   b) Read the input value and trim the spaces
   c) If the text is empty, stop with return
   d) Create a new task OBJECT using nextId, the text, done: false
   e) Add it to the array: tasks.push(newTask)
   f) Increase nextId by 1
   g) Clear the input
   h) Call renderTasks()

   CHECKPOINT: type a task, press Add, it appears at the bottom
   and the counter goes up by 1. Empty input adds nothing.
   ============================================================ */


inputTask.addEventListener("input", function (event) {

   event.preventDefault();

   inputCount.textContent = `${inputTask.value.length} / 50`;

});


formTask.addEventListener("submit", function (event) {

   event.preventDefault();

   let textForm = inputTask.value.trim();

   if (textForm === "") {
      return;
   }

   tasks.push({
      done: false,
      id: nextId,
      text: textForm
   });

   localStorage.setItem("tasks", JSON.stringify(tasks));

   renderTasks();

   inputTask.value = "";
   inputCount.textContent = "0 / 50";

   nextId++;

   localStorage.setItem("nextId", nextId);

   console.log(nextId);

});




/* ============================================================
   STEP 6: TOGGLE DONE AND DELETE (event delegation)
   Instead of one listener per task, put ONE "click" listener on
   the list itself and check what was clicked with event.target.

   Important: dataset values are always STRINGS.
   Convert with Number(): Number(li.dataset.id)

   TODO inside the listener:
   a) Get the clicked element: const target = event.target
   b) Get the li it belongs to: target.parentElement
      and read its id with Number(...dataset.id)

   c) If target has the class "task-text" (TOGGLE):
      loop over tasks, find the one with the matching id,
      and flip its value: task.done = !task.done
      Then call renderTasks()

   d) If target has the class "delete-btn" (DELETE):
      build a NEW empty array, loop over tasks, and push every
      task EXCEPT the one with the matching id. Then replace:
      tasks = newArray
      Then call renderTasks()

   Hint: target.classList.contains("task-text") returns true/false

   CHECKPOINT: clicking text crosses it out and back again,
   Delete removes the task, the counter updates every time.
   ============================================================ */

taskList.addEventListener("click", function (event) {

   const clicked = event.target;
   const li = clicked.parentElement;
   const id = Number(li.dataset.id);


   if (clicked.classList.contains("task-text")) {

      for (const task of tasks) {

         if (task.id === id) {

            task.done = !task.done;

            break;
         }

      }

      localStorage.setItem("tasks", JSON.stringify(tasks));

      renderTasks();
   }


   if (clicked.classList.contains("delete-btn")) {

      const newArray = [];

      for (const task of tasks) {

         if (task.id !== id) {
            newArray.push(task);
         }

      }

      tasks = newArray;

      localStorage.setItem("tasks", JSON.stringify(tasks));

      renderTasks();
   }

});



/* ============================================================
   STEP 7: CLEAR COMPLETED TASKS
   TODO: Listen for "click" on the clear-done button.
   Build a new array that keeps ONLY tasks where done is false,
   replace tasks with it, and call renderTasks().

   CHECKPOINT: mark two tasks done, click "Clear completed",
   both disappear. Delete everything and the empty message shows.
   ============================================================ */

clearBtn.addEventListener("click", function () {

   const newArray = [];

   for (const task of tasks) {

      if (!task.done) {
         newArray.push(task);
      }

   }

   tasks = newArray;

   localStorage.setItem("tasks", JSON.stringify(tasks));

   renderTasks();

});


/* ============================================================
   BONUS CHALLENGES (for those who finish early)

   BONUS 1: LIVE CHARACTER COUNTER
   Listen for the "input" event on the text field and update
   #char-count to show "12 / 50" as the user types.
   Remember to reset it to "0 / 50" after adding a task.

   BONUS 2: NO DUPLICATES
   Before adding a task, loop over tasks and check if the same
   text already exists (ignore upper/lower case with
   .toLowerCase()). If it does, don't add it.

   BONUS 3: FILTER BUTTONS (All / Active / Done)
   a) Create a variable: let currentFilter = "all";
   b) Select all buttons with the class "filter-btn"
      (querySelectorAll) and add a click listener to each
   c) On click: set currentFilter to the button's data-filter,
      move the "active" class to the clicked button, re-render
   d) In renderTasks, skip tasks that don't match the filter:
      "active" shows only not-done tasks
      "done"   shows only done tasks
      Hint: continue skips the current loop round
   ============================================================ */


renderTasks();


        }



        //15


function setCookie(name, value, daysToExpire) {
    const date = new Date();

    date.setTime(date.getTime() + (daysToExpire * 24 * 60 * 60 * 1000));

    const expires = "expires=" + date.toUTCString();

    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
    const cookieName = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
    
    for(let i = 0; i < cookieArray.length; i++) {
        let c = cookieArray[i];
       
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
     
        if (c.indexOf(cookieName) === 0) {
            return c.substring(cookieName.length, c.length);
        }
    }
    return ""; 
}


function deleteCookie(name) {

    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}


function saveThemePreference(theme) {
    setCookie("theme", theme, 30); 
    document.body.className = theme;
    console.log("Theme saved:", theme);
}

function saveLanguagePreference(lang) {
    setCookie("language", lang, 30);
    console.log("Language saved:", lang);
}


window.onload = function() {
    const savedTheme = getCookie("theme");
    const savedLanguage = getCookie("language");

    if (savedTheme !== "") {
        document.body.className = savedTheme;
        console.log("Applied Theme:", savedTheme);
    } else {
        console.log("No theme preference found. Using default.");
    }

    if (savedLanguage !== "") {
       
        console.log("Applied Language:", savedLanguage);
    }
};
