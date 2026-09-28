import { getUsers, saveUsers } from './data.js';

const regForm = document.getElementById("regForm");
const nameInput = document.getElementById("fullName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const address = document.getElementById("address");

if (regForm) {
    regForm.addEventListener("submit", function (event) {
        event.preventDefault();
        
        let users = getUsers();
        
        
        if (password.value !== confirmPassword.value) {
            alert("Passwords do not match!");
            return;
        }

       
        const emailExists = users.some(user => user.Email === email.value);
        if (emailExists) {
            alert("Email is already registered!");
            return;
        }

       
        let nextUser = users.length > 0 ? users[users.length - 1].id + 1 : 1;
        
        users.push({
            id: nextUser,
            FullName: nameInput.value,
            Email: email.value,
            Password: password.value,
            Address: address.value,
            role: "user" 
        });

        saveUsers(users); 
        
        alert("Registration Successful! Please login.");
        regForm.reset();
        window.location.href = "login.html"; 
    });
}