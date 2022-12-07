function updateViewAdminLogin() {
    let html = "";
    html += `<button onclick="backToStart()">Back to Start</button><br><br><div>
    Admin Id <input type="text" oninput="model.CheckUser.id = this.value">
    Password <input type="text" oninput="model.CheckUser.password = this.value">
    <br>
    <button onclick="LoginAdmin()">Login</button>
    
    </div>
    `
    return html;
}
function LoginAdmin() {
    if (model.shop.admin.id == model.CheckUser.id && model.shop.admin.password == model.CheckUser.password) {
        model.loggedIn = model.admin;
        model.currentPage = "AdminShop"
        updateView()
    }
    else {
        alert("Wrong id or password")
    }
}
