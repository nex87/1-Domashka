function product (id, name, type, cost) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.cost = cost;
}

function client (id, firstName, lastName, summBuys) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.summBuys = summBuys;
}

function buyInfo (time, productName, productType, quantity) {
    this.time = time;
    this.productName = productName;
    this.productType = productType;
    this.quantity = quantity;
    this.sum = sum;
}

function shop () {
    this.clients  = [];
    this.products = [];
    this.buysHistory = [];
}

shop.prototype = {
    addProduct: function (product) {
        this.products.push(product);
    },
    remProduct: function (product) {
        this.products.forEach(function (item, i, products) {
            if (item.id == product.id) {
                products.splice(i, 1);
            }
        });
    },
    addClient: function (client) {
        this.clients.push(client);
    },
    remClient: function (client) {
        this.clients.forEach(function (item, i, clients) {
            if (item.id == client.id) {
                clients.splice(i, 1);
            }
        });
    },
    addBuy: function (buyInfo) {
        this.buysHistory.push(buyInfo);
    },
    countSells: function () {

    },
    countEarned: function () {

    },
    countInv: function () {
        
    },
}
const firstShop = new shop();

let product01 = new product(01, "....apple", "fruit", 30),
    product02 = new product(02, "pineapple", "fruit", 50),
    product03 = new product(03, "....peach", "fruit", 70),
    product04 = new product(04, ".....kiwi", "fruit", 40),
    product05 = new product(05, "...banana", "fruit", 25);

firstShop.addProduct(product01);
firstShop.addProduct(product02);
firstShop.addProduct(product03);
firstShop.addProduct(product04);
firstShop.addProduct(product05);

firstShop.remProduct(product01);
firstShop.remProduct(product05);

let client01 = new client(01, "Gennadij", "Ivanov"),
    client02 = new client(02, "....Ivan", "Petrov"),
    client03 = new client(03, "...Elena", "Igorevna"),
    client04 = new client(04, "...Roman", "Ivamovich"),
    client05 = new client(05, "....Nika", "Alekseevna");

firstShop.addClient(client01);
firstShop.addClient(client02);
firstShop.addClient(client03);
firstShop.addClient(client04);
firstShop.addClient(client05);

firstShop.remClient(client01);
firstShop.remClient(client05);

console.log (firstShop.clients);