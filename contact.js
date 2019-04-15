

var arrProduct = [
    {
        code: "cake 1",
        name: "Flat White Cake",
        path: "images/12.jpg",
        price: "0.8",
        des: "A super balanced ratio from steamed milk to espresso with a layer of micro-foam",

    },
    {
        code: "cake 2",
        name: "Plain Cheese Cake",
        path: "images/IMG_4744.PNG.png",
        price: "1.0",
        des: "Plain Cheesecake comes with any of the available topping of strawberry, Red berry",
    },
    {
        code: "cake 3",
        name: "Green Tea Cheese Cake",
        path: "images/matcha.jpg",
        price: "1.2",
        des: "A silky smooth chocolate, Mousse Cake made from bold Vietnamese",
    },
    {
        code: "coffee 1",
        name: "CAPPUCCINO",
        path: "images/break-breakfast-caffeine-851559.jpg",
        price: "2.4",
        des: "Bold Milk Coffee! Bolder tasting than a Latte, our Cappuccino starts with...",
    },
    {
        code: "coffee 2",
        name: "PHIN COFFEE",
        path: "images/phin-coffee.jpg ",
        price: "1.8",
        des: "Vietnam has a rich coffee heritage and the ‘Phin’ (filter) is a key element in the Vietnamese way of enjoying coffee",
    },
    {
        code: "coffee 3",
        name: "MOCHA COFFEE",
        path: "images/phin-coffee.jpg ",
        price: "2.9",
        des: "A flawless mixture of Espresso, chocolate syrup and steamed milk, expertly topped with, hot milk foam and more chocolate syrup.",
    },
    {
        code: "Tea 1",
        name: "ORANGE TEA",
        path: "images/iced-tea-tease-today-160617_158c0c72616cd8ae26dda26823753c7e.jpg",
        price: "1.3",
        des: "Another fan favorite! A refreshing blend of cooling oolong tea, luscious lotus seeds and water chestnuts.",
    },
    {
        code: "Tea 2",
        name: "LYCHEE TEA",
        path: "images/lychee-blacktea-600.jpg ",
        price: "1.5",
        des: "A refreshing blend of black tea, whole lychee fruits and chewy golden jelly.",
    },
    {
        code: "Tea 3",
        name: "PEACH LEMONGRASS TEA",
        path: "images/Recipe-Peach-Lemon-Fusion-780x500.jpg",
        price: "1.9",
        des: "Delightfully refreshing! The perfect balance of premium tea, subtle lemongrass and sweet juicy peaches.",
    },

];


var arrImg = ["images/ohio-proud-logo.png","images/fair-trade-certified-logo.png","images/kosher-logo.png"
                ,"images/usda-organic-logo.png", "images/sqf-logo.png"];

function showImg()
{
    for (var i = 0; i < arrImg.length; i++){
        var image = document.createElement("img");
        var li = document.createElement("li");
        image.src = arrImg[i];
        li.appendChild(image);
        var d = document.getElementById("menu_logo");
        d.appendChild(li);
    }
}

// ======================================check format of tag input==============================


function checkFormat() {
    var name = document.getElementById("iName").value;
    var email = document.getElementById("iEmail").value;
    var phone = document.getElementById("iPhone").value;

    var ck_name = /^[A-Za-z]{3,30}$/;
    var ck_phone = /^[0-9]{10,11}$/;
    var ck_email = /[@]/;

    if (!ck_name.test(name)){
        alert("Name must be alphabe character!");
    }
    else if (!ck_phone.test(phone))
        alert("Name must be (10 - 11 ) integer character!");
    else if (!ck_email.test(email))
        alert("Err, Please input email right format (name@addres.domain)");
    else {
        alert("Thank you for trusting us!");
        window.open("Contact.html", "_self");
    }
        
}
function checkFormat1(){
    var email = document.getElementById("sendEmail");
    var ck_email = /[@]/;

    if (!ck_email.test(email))
        alert("Err, Please input email right format (name@addres.domain)");
        else {
            alert("Email sended sucessfully");
            window.open("Contact.html", "_self");
        }

}
function findProduct(code) {
    for (var i = 0; i < arrProduct.length; i++) {
        if (arrProduct[i].code == code)
            return arrProduct[i];
    }
    return null;
}
function search () {
    var search = document.getElementById("searchP").value;
    var check = -1;
    if(findProduct(search) == null)
        check = -1;
        else check = 1;
    
    if (check == 1)
        window.open("Menu.html", "_self");
    else
        alert("Do not have product! Try again")
}
