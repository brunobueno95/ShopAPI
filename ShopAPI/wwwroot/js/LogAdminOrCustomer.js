function updateViewLogAdminOrCustomer() {

    let html = "";
    html += `<h1>Log in as Administrator or Customer</h1><br>
    <button onclick ="LogInAsAdmin()">Log In As Admin</button><br>
    <button onclick ="LogInAsCustomer()">Log In As Customer</button>`
    return html;

}

function LogInAsAdmin() {
    model.currentPage = "adminLogin";
    updateView();
}
function LogInAsCustomer() {
    model.currentPage = "login";
    updateView();
}