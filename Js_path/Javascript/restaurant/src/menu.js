/*
    <div id="info">
    <p class="title">Menu</p>
    <div class="item"> 
        <img src="./img/chicken_leg.jpg" alt="Chicken leg">
        <div class="product">
            <h4>Chicken leg: $20</h4>

            <span>  <br> The most tender chicken leg in all the world. </span>  
        </div>
    </div> */
import chicken from "./img/chicken_leg.jpg";
import beef from "./img/beef.jpg";
import meat from "./img/meat.jpg"
import ribs from "./img/ribs.jpg"

class Item {
    constructor(name, image, description, price) {
        this.name = name
        this.image = image
        this.description = description
        this.price = price
    }
}

const items = [new Item("Chicken Leg", chicken, "The most tender chicken leg in all the world.", "20") ,
               new Item("Roast Beef", beef , "The tastiest roast beef you can get", "40"), 
               new Item("Special meat", meat, "This is a surprise, if you guess what it is you get a discount.",
               "60"),
               new Item("Ribs", ribs, "If you cook them slowly and add some barbeque you got a yourself a delicious \
                dish", "80")
            ]

function createMenu() {
    const info = document.createElement("div");
    info.setAttribute("id", "info");

    const menu_title = document.createElement("p");
    menu_title.classList.add("title");
    menu_title.innerText = "Menu";
    info.appendChild(menu_title);

    items.forEach( (element) => info.appendChild(createMenuItem(element)) );

    return info;
}

function createMenuItem(item) {
    const menu_item = document.createElement("div");
    menu_item.classList.add("item");

    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.name;
    menu_item.appendChild(img);

    const product = document.createElement("div");
    product.classList.add("product");

    const title = document.createElement("h4");
    title.innerText = item.name + ":      " + item.price + "$";
    product.appendChild(title);

    const description = document.createElement("span");
    description.innerHTML = `<br> ${item.description}`;
    product.appendChild(description);

    menu_item.appendChild(product);
    return menu_item;
}


export {createMenu};