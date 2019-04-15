function changeImg(x) {
    var d = document.getElementById("menu_img");
    d.style.transform = "translateX(" + x + "px)";
}
function changeColor(x) {
    var put1 = document.getElementById("ip1");
    var put2 = document.getElementById("ip2");
    var put3 = document.getElementById("ip3");
    var put4 = document.getElementById("ip4");
    var put5 = document.getElementById("ip5");

    put1.style.backgroundColor = "white";
    put2.style.backgroundColor = "white";
    put3.style.backgroundColor = "white";
    put4.style.backgroundColor = "white";
    put5.style.backgroundColor = "white";
    x.style.backgroundColor = "#600";
}


// =================================================================================


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
        path: "images/beverage-caffeine-cappuccino-162947.jpg ",
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

function getdata1() {
    var div_menu_cake = document.getElementById("Menu_cakes_img");
    var div_menu_coffee = document.getElementById("Menu_coffee_img");
    var div_menu_tea = document.getElementById("Menu_tea_img")
    for (var i = 0; i < arrProduct.length; i++) {
        var div = document.createElement("div");
        div.setAttribute("class", "format_menu");
        var img = document.createElement("img");
        
        var p = document.createElement("p");
        p.setAttribute("class", "format_menu_p");
        var input = document.createElement("input");
        input.setAttribute("class", "format_menu_input");
        img.setAttribute("class", "format_menu_img");

        img.src = arrProduct[i].path;
        img.id = arrProduct[i].code;
        // img.addEventListener("mouseover", shotran);
        p.innerHTML = "Code: " + arrProduct[i].code + "<br>Name: "
            + arrProduct[i].name + "<br>About it: " + arrProduct[i].des + "<br>Price: " + arrProduct[i].price + "$";
        input.value = "Buy now";
        input.type = "button";
        input.addEventListener("click", addProduct);
        input.name = arrProduct[i].code;

        div.appendChild(img);
        div.appendChild(input);
        div.appendChild(p);


        if (i < 3)
            div_menu_cake.appendChild(div);
        else if (i < 6)
            div_menu_coffee.appendChild(div);
        else if (i < arrProduct.length)
            div_menu_tea.appendChild(div);
    }

}
function show() {

}
function findProduct(code) {
    for (var i = 0; i < arrProduct.length; i++) {
        if (arrProduct[i].code == code)
            return arrProduct[i];
    }
    return null;
}


// =======================================================================

//lam gio hang

function khoitao() {
    if (window.localStorage.getItem("count") == null)
        window.localStorage.setItem("count", 0);
}

function findProduct2(masp) {
    //tim xem ma sp da co trong local hay chua
    for (var i = 0; i < window.localStorage.length; i++) {
        var tmp = window.localStorage.getItem(masp);
        if (tmp != null)
            return true;
    }
    return false;
}

function addProduct() {
    var masp = event.target.name;
    //them moi ma san pham nay vao localStorage
    var result = findProduct2(masp);
    if (result == false)//chua co ma sp nay
    {
        window.localStorage.setItem(masp, 1);
        var c = window.localStorage.getItem("count");
        c++;
        window.localStorage.setItem("count", c);
        alert("Added Sucessfully");
    }
    else {
        alert("Existed! Don't added again!");
    }

}

function view() {
    var sum = 0;

    var s = "<table>";
    s = s + "<tr>";
    s = s + "<th>Product</th>";
    s = s + "<th>Your options</th>";
    s = s + "<th>Price</th>";
    s = s + "</tr>";
    for (i = 0; i < window.localStorage.length; i++) {
        var masp = window.localStorage.key(i);
        if (masp != null) {
            //tim sp tren mang arr dua vao mang
            var sp = findProduct(masp);
            if (sp != null) {
                s = s + "<tr>";
                s = s + "<td>";
                s = s + "<img src='" + sp.path + "'>";
                s = s + "<span>" + sp.name + "</span>";
                s = s + "<span>" + sp.code + "</span>";
                s = s + "<span onclick='xoa(\"" + sp.code + "\")' class ='bantay'>remove </span></td>";
                s = s + "<td>";
                s = s + "<input type='number' value='" + window.localStorage.getItem(masp) +
                    "' min='1' max ='10' onchange='sua(\"" + sp.code + "\",this)'></td>";
                s = s + "<td>" + sp.price + " $</td>";
                s = s + "</tr>";
                sum = sum + window.localStorage.getItem(masp) * sp.price;

            }
        }
    }//het vong for


    s = s + "</table>";
    s = s + "<p>Tong tien can thanh toan: " + sum + " $</p>";
    var div = document.getElementById("giohang");
    div.innerHTML = s;
}

function sua(masp, control) {
    window.localStorage.setItem(masp, control.value);
    view();
}

function xoa(masp) {
    window.localStorage.removeItem(masp);
    var c = window.localStorage.getItem("count");
    c--;
    window.localStorage.setItem("count", c);
    view();
}

// function camon() {
//     if (checkFormat() == 0) {

//     }
//     else if (!checkFormat() == 1)
//         alert("Name must be alphabe character!");

// }
function checkFormat() {
    var name = document.getElementById("Input_name").value;
    var phone = document.getElementById("Input_phone").value;
    var ck_name = /^[A-Za-z]{3,30}$/;
    var ck_phone = /^[0-9]{10,11}$/;
    if (!ck_name.test(name)){
        alert("Name must be alphabe character!");
    }
    else if (!ck_phone.test(phone))
        alert("Name must be (10 - 11 ) integer character!");
    else {
        alert("Thank you, our staff will send your order to you!");
        window.localStorage.clear();
        window.location.href = "http://127.0.0.1:5500/Practical/Menu.html";
    }

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
function search1(){
    var search = document.getElementById("searchP").value;
        
        document.getElementById("Menu_cakes").style.display = "none";
        document.getElementById("Menu_coffee").style.display = "none";
        document.getElementById("Menu_tea").style.display = "none";
        
    
    if(search == "cake")
    {
        
        document.getElementById("Menu_cakes").style.display = "block";
        document.getElementById("menu_footer").style.display = "none";
    }
    else if(search == "tea")
    {
        
        document.getElementById("Menu_tea").style.display = "block";
        document.getElementById("menu_footer").style.display = "none";
    }
    else if(search == "coffee")
    {
        
        document.getElementById("Menu_coffee").style.display = "block";
        document.getElementById("menu_footer").style.display = "none";
    }
    else 
    alert("Sorry, we do not have the product you are looking for");
}