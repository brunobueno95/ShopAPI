function updateViewLogin(){
    let html = "";
    html+= `<button onclick="backToStart()">Back to Start</button><br><br>
    <div>
    UserName Id <input type="text" oninput="model.CheckUser.id = this.value">
    Password <input type="text" oninput="model.CheckUser.password = this.value">
    <br>
    <button onclick="Login()">Login</button>
    
    </div>
    `
return html;
}

function Login(){
    let customer = model.shop.allcustomers.find(c=> c.id == model.CheckUser.id && c.password == model.CheckUser.password);
    if(customer){
model.loggedIn = customer;
model.currentPage = "CustomerShop";
updateView();
    }
    else{
        alert("Wrong Id or password")
    }
}

function backToStart(){
    model.currentPage="start";
    updateView();
}