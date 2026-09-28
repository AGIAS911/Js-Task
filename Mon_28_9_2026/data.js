export function getUsers() {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    
    const adminExists = users.some(u => u.role === 'admin');
    if (!adminExists) {
        const adminUser = {
            id: 0,
            FullName: "Admin User",
            Email: "admin@system.com",
            Password: "admin123", 
            Address: "System",
            role: "admin"
        };
        users.push(adminUser);
        saveUsers(users);
    }
    
    return users;
}

export function saveUsers(usersArray) {
    localStorage.setItem('users', JSON.stringify(usersArray));
}

export function setCurrentUser(user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
}

export function getCurrentUser() {
    return JSON.parse(localStorage.getItem('currentUser'));
}

export function logout() {
    localStorage.removeItem('currentUser'); 
    window.location.href = 'login.html'; 
}