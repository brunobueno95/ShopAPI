function updateViewCItemPage() {
    let result = ""
    let html = "";
    html += `<div> <button onclick="GoToShop()">GoToShop</button>   <button onclick="GotoAccount()">Account</button>  <button onclick="LogOut()">LogOut</button></div><br>Logged in as: ${model.loggedIn.name}
    <hr>
 
    ${ShowUrItems()}<hr>
${result}
    `;

    return html;
}
function ShowUrItems() {
    let html = "";

    model.loggedIn.itemsbought.forEach(it => html += `<div style="border: solid;float:left;"><img style="width: 100px;height:149px;"src="${it.img}"><p>Title: ${it.name}</p> <button onclick="start(${it.id})">${it.typeofbtn}</button></div>`)
    return html;
}
function start(id) {
    console.log(id)

    result = thisitem.Start()




}

function GoToShop() {
    model.currentPage = "CustomerShop";
    updateView();
}



function LogOut() {
    model.currentPage = "start"
    model.loggedIn = null;
    updateView();
}