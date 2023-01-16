var Item = /** @class */ (function () {
    function Item(itemid, itemname, iteitemprice, category) {
        var _this = this;
        this.display = function () { return console.log(_this.itemid + '------' + _this.itemname + '----' + _this.iteitemprice + '------' + _this.category); };
        this.itemid = itemid;
        this.itemname = itemname;
        this.iteitemprice = iteitemprice;
        this.category = category;
    }
    return Item;
}());
var item = new Item(10, "parle", 100, "Biscuit");
var item2 = new Item(2, "britania", 200, "Biscuit");
item.display();
item2.display();
//# sourceMappingURL=Item.js.map