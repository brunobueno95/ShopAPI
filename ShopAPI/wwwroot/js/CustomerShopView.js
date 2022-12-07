

function updateViewCShop() {
    let html = "";
   
    html += `<div> <button onclick="GoToCItemPg()">GoToYourItems</button>   <button onclick="GotoAccount()">Account</button>  <button onclick="LogOut()">LogOut</button></div><br>Logged in as: ${model.loggedIn.name}<br> 
    <hr>
    Filter Your Search <br>
    Videos <input type="radio" value ="video" onchange ="model.searchInputRadio = this.value; " name="search">
    AudioBook <input type="radio" value ="audiobk" onchange ="model.searchInputRadio = this.value;" name="search">
    Ebook <input type="radio" value ="ebook" onchange ="model.searchInputRadio = this.value; " name="search"><br>
    Show All Items <input type="radio" value ="allItems" onchange ="model.searchInputRadio = this.value; " name="search">
    Search by Title <input type="text" oninput = "model.searchInputText = this.value">
    <button onclick="updateView()">Search</button>
    <hr>
    ${ShowItems()}
    `;

    return html;
}
function ShowItems() {
    let html = "";
    let seacrchType = model.shop.allitems

    if (model.searchInputRadio == "video") {
        seacrchType = model.shop.allitems.filter(it => it._item.type == "Video");

    }
    else if (model.searchInputRadio == "audiobk") {
        seacrchType = model.shop.allitems.filter(it => it._item.type == "Audio book")

    }
    else if (model.searchInputRadio == "allItems") {
        seacrchType = model.shop.allitems

    }
    else if (model.searchInputRadio == "ebook") {
        seacrchType = model.shop.allitems.filter(it => it._item.type == "Ebook")

    }
    if (model.searchInputText != undefined) {
        seacrchType = seacrchType.filter(it => it._item.name.includes(model.searchInputText))
    }
    seacrchType.forEach(it => html += `<div style="border: solid;float:left;"><img style="width: 100px;height:149px;"src="${it._item.img}"><p style="font-weight:bold">Format: ${it._item.type}</p><p>Title: ${it._item.name}</p> <p>Price: ${it._item.pricetocustomer}</p><button onclick="Buy(${it._item.id})">Buy</button></div>`)





    return html;
}

function Buy(itemid) {
    let thisitem = model.shop.allitems.find(i => i._item.id == itemid);
    model.shop.allitems.forEach(it => it.profitpersell = it._item.pricetocustomer - (it._item.pricetocustomer * it.percentagetocreator));

    model.loggedIn.itemsbought.push(thisitem._item)

    model.shop.itemssold.push(thisitem.profitpersell)
    thisitem.amountofbuys++;
    updateView();


}

function GoToCItemPg() {
    model.currentPage = "CItemPage";
    updateView();

}

function GotoAccount() {
    model.currentPage = "CAccountPage"
    updateView();
}