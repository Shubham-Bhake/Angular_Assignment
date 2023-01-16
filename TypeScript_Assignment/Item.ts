class Item{

    public itemid:Number;
    public itemname:String;
    public iteitemprice:Number;
    public category:String;

    constructor(itemid:Number,itemname:String,iteitemprice:Number,category:String){
        this.itemid=itemid;
        this.itemname=itemname;
        this.iteitemprice=iteitemprice;
        this.category=category;
    }

    display = () => console.log(this.itemid+'------' + this.itemname+'----'+this.iteitemprice+'------'+this.category)
    
}
let item =new Item(10,"parle",100,"Biscuit");
let item2 =new Item(2,"britania",200,"Biscuit");
item.display();
item2.display();
