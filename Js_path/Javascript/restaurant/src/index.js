/*

    <div id="header">
        <h1>Eat some meat</h1>
        <ul id="links">
            <li class="link">Home</li>
            <li class="link">About</li>
            <li class="link">Contact</li>
        </ul>
    </div>
        
      
     
    
    */
import {createMenu} from "./menu.js";
import {createHome, createContact} from "./home.js";
import "./style.css";



function createHeader() {
    const header = document.createElement("div");
    header.id = "header";

    const title= document.createElement("h1");
    title.innerText = "Eat some meat";
    header.appendChild(title);
    
    const links_name = ["Home", "Menu", "Contact"];
    const links = document.createElement("ul");
    links.id = "links";
    links_name.forEach(element => {
        const link = document.createElement("li");
        link.classList.add("link");
        link.innerText = element;
        link.addEventListener( "click" , () => {switchTab(element)});
        links.appendChild(link);
    });
    header.appendChild(links);

    return header;
}

function switchTab(tab) {
    content.innerHTML = "";
    switch (tab) {
        case "Home":
            content.appendChild(home);
            break;
        case "Menu":
            content.appendChild(menu);
            break;
        case "Contact":
            content.appendChild(contact);
            break;
    }

}

const body = document.body;

const header = createHeader();
body.appendChild(header);

const content = document.createElement("div");
content.setAttribute("id", "content");
body.appendChild(content);

const menu = createMenu();
const home = createHome();
const contact = createContact();

switchTab("Home");


