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