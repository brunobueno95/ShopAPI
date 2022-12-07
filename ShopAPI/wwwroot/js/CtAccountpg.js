function updateViewCAccountPage() {

    let html = "";

    html += `<div> <button onclick="GoToShop()">GoToShop</button>   <button onclick="GoToCItemPg()">GoToYourItems</button>  <button onclick="LogOut()">LogOut</button></div><br>Logged in as: ${model.loggedIn.name}
    <hr>
    <br>
    
    All Expenses: ${CalculateExpenses()}
    <hr>
    
    <div>Choose one of your cards or add a new card<div>
    <div>Your Cards :${ShowCards()}
    </div><hr><br>
    <div> Add Card:<br>
    Card number: <input type="password" oninput="model.inputCard.cardNumer = this.value"><br>
    Cvc: <input type="password" oninput="model.inputCard.cvc = this.value"><br>
    Name on the Card: <input type="text" oninput="model.inputCard.name = this.value"><br>
    Card Type - MasterCard <input type="radio" value="MasterCard" oninput="model.inputCard.cardType = this.value" name="type"><br>
     Visa <input type="radio" value="Visa" oninput="model.inputCard.cardType = this.value" name="type"><br>


    <button onclick="addcard()">Add new card</button>
    </div>
    `
    return html;
}

function ShowCards() {
    let html = ""
    model.loggedIn.account.forEach(cd => {
        if (!cd.chosen) {
            html += `<div style="border:solid; width:350px;height:200px"><img src="${cd.img}" style="height:100px;widht:150px;">
    <p>Name on the card :${cd.name} </p> <button onclick="ChooseCard(${cd.cardNumber})">Choose Card</button></div>`
        }
        else {
            html += `<div style="border:solid; width:350px;height:200px">This is your currently chosen Card<br>
            <img src="${cd.img}" style="height:120px;widht:200px;">
    <p>Name on the card :${cd.name} </p>
            </div>`

        }
    });
    return html;
}

function ChooseCard(cdnum) {
    console.log(cdnum)
    let chosenCard = model.loggedIn.account.find(c => c.cardNumber == cdnum);
    chosenCard.chosen = true;
    let othercards = model.loggedIn.account.forEach(c => {
        if (c.cardNumber != cdnum) {
            c.chosen = false;
        }
    })
    updateView();

}

function addcard() {
    let Cimage = ""
    if (model.inputCard.cardType = "Visa") {
        Cimage = "Visa.png"
    }
    else {
        Cimage = "mastercard.png"
    }
    let card = {
        cardType: model.inputCard.cardType,
        cardNumber: model.inputCard.cardNumber,
        cvc: model.inputCard.cvc,
        img: Cimage,
        name: model.inputCard.name

    }

    model.loggedIn.account.push(card);
    updateView();
}

function CalculateExpenses() {
    let expenses = {
        pricetocustomer: 0
    }
    if (model.loggedIn.itemsbought.length > 0) {
        expenses = model.loggedIn.itemsbought.reduce((a, b) => ({ pricetocustomer: a.pricetocustomer + b.pricetocustomer }))
    }
    else {
        expenses.pricetocustomer = 0;
    }
    return expenses.pricetocustomer;
}