
import { getCurrentUser, logout } from './data.js';

const currentUser = getCurrentUser();


if (!currentUser) {

    window.location.href = "login.html";

}


const userInfoDiv = document.getElementById("user-info");

if (userInfoDiv) {

    userInfoDiv.innerHTML = `
        <h2>Welcome, ${currentUser.FullName}</h2>
        <p><strong>Name:</strong> ${currentUser.FullName}</p>
        <p><strong>Email:</strong> ${currentUser.Email}</p>
        <p><strong>Address:</strong> ${currentUser.Address}</p>
        <p><strong>Role:</strong> ${currentUser.role}</p>
    `;

}


const logoutBtn = document.getElementById("logout-btn");

if (logoutBtn) {

    logoutBtn.addEventListener("click", function () {

        logout();

        window.location.href = "login.html";

    });

}
    