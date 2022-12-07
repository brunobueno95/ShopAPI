function updateViewAdministratorShop() {


    let html = "";

    html += `<button onclick="LogOut()">LogOut</button><br>
    Logged is as Administrator: ${model.shop._admin.name}
    <hr>
    <h1>Statistics:</h1><br>
    <h4>Amount of Customers: ${model.shop.allcustomers.length}</h4>
    <h4>Most popular product: ${findTitleMostPopularProduct()}</h4>
    <h4>Total Profit:${setProfit()} </h4><hr>
    <h4>All Items and their Info</h4><br>
    ${ShowAllItemsAndInfo()}
    `;


    return html
}

function findTitleMostPopularProduct() {

    let product = model.shop.allitems.sort(compareMostPopularProduct)
    let arraylastindex = product.length;
    return product[product.length - 1]._item.name
}

function compareMostPopularProduct(a, b) {
    return a._item.amountofbuys - b._item.amountofbuys;
}

function setProfit() {
    // let item;
    // let itemssold = [];
    // let totalprofit =0;

    // // model.shop.allcustomers.forEach(c=> c.itemsbought.forEach(puch) )
    let profit = {
        totalpr: 0
    }
    if (model.shop.allitems.length > 0) {
        const initialValue = 0;
        const sumWithInitial = model.shop.itemssold.reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            initialValue
        );
        return sumWithInitial
    }
    else {
        return 0;
    }
    ;
    // return totalprofit;

}
let profit;
for (i = 0; i < model.shop.itemssold.length; i++) {
    profit += model.shop.itemssold[i].profitpersell
}



function ShowAllItemsAndInfo() {
    let html = "";
    model.shop.allitems.forEach(it => html += `<div style="border: solid;float:left;"><img style="width: 100px;height:149px;"src="${it._item.img}"><p style="font-weight:bold">Format: ${it._item.type}</p><p>Title: ${it._item.name}</p> <p>Price to Customer: ${it._item.pricetocustomer}</p> <p>Percentage to the content creator per sell:${it.percentagetocreator * 100}% </p> <p>Profit per sell ${it.profitpersell}</p></div>`)
    return html;
}