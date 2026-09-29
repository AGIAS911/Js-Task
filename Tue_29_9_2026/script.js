const form = document.getElementById("empLogin");
const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const dep = document.getElementById("dep");
const tableBody = document.getElementById("employeeTableBody");
const totalSalary = document.getElementById("totalSalary");
let count=0 ;
let employees = JSON.parse(localStorage.getItem("employees")) || [];

function Employee(name, email, dep) {
    this.name = name;
    this.email = email;
    this.dep = dep;
    this.salary = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
}

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let newEmployee = new Employee(fullName.value, email.value, dep.value);
    employees.push(newEmployee);

    localStorage.setItem("employees", JSON.stringify(employees));




    form.reset();
    TableRender();
});

function TableRender() {
    tableBody.innerHTML = "";
    let currentEmployee = JSON.parse(localStorage.getItem("employees"));
    for (const element of currentEmployee) {
        let row = `
<tr>

<td>${element.name}</td>
<td>${element.email}</td>
<td>${element.dep}</td>
<td>${element.salary}</td>
</tr>


`;
        count+=element.salary;
        totalSalary.textContent =count;
        tableBody.innerHTML += row;
    }

}

function reload() {
    localStorage.clear();
}