import { getUsers, setCurrentUser } from './data.js';

const loginForm = document.getElementById("loginForm");
const loginEmail = document.getElementById("loginEmail");
const loginPassword = document.getElementById("loginPassword");
const msg = document.getElementById("message");

if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        msg.innerHTML = ""; 
        let p = document.createElement("p");
        
        let users = getUsers();
        const existingUser = users.find((user) => user.Email === loginEmail.value);

        if (!existingUser) {
            p.textContent = "Incorrect email or password. Please try again.";
            p.style.color = "red";
            msg.appendChild(p);
            return;
        }

        if (existingUser.Password === loginPassword.value) {
            setCurrentUser(existingUser);
            
            
            if (existingUser.role === "admin") {
                window.location.href = "admin.html";
            } else {
                window.location.href = "dashboard.html";
            }
        } else {
            p.textContent = "Incorrect email or password. Please try again.";
            p.style.color = "red";
            msg.appendChild(p);
        }
    });
}