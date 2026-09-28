
import { getCurrentUser, getUsers, logout } from './data.js';

const currentUser = getCurrentUser();

if (!currentUser) {
    window.location.href = "login.html";
}


if (currentUser && currentUser.role !== "admin") {
    alert("Access Denied! Admins only.");
    window.location.href = "dashboard.html";
}


const usersListDiv = document.getElementById("users-list");

if (usersListDiv) {

    const allUsers = getUsers();

    let htmlContent = "";

    allUsers.forEach(function (user) {

        htmlContent += `
            <div class="user-card">

                <h3>${user.FullName}</h3>

                <p>
                    <strong>Email:</strong>
                    ${user.Email}
                </p>

                <p>
                    <strong>Address:</strong>
                    ${user.Address}
                </p>

                <p>
                    <strong>Role:</strong>
                    ${user.role}
                </p>

            </div>
        `;

    });

    usersListDiv.innerHTML = htmlContent;
}

const logoutBtn = document.getElementById("logout-btn");

if (logoutBtn) {

    logoutBtn.addEventListener("click", function () {

        logout();

    });

}
