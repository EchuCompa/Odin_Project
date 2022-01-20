import "./style.css";

import {todo, project} from "./todos";
import {createSidebar} from "./sidebar_header";
import {categoryFromList} from "./dom_todos";

let proj1 = new project("Now", "I am");
const todos_1 = ["Walk the dog", "Program some COBOL", "Rescue a princess", "Go to the supermarket"];
for (const new_todo of todos_1 ) {
    proj1.addTodo(new todo(new_todo, "Do it now", new Date(), 3) );
}

const notes = [proj1];
const archive = [];
const deleted = []; //Last five deleted projects 

const body = document.body;

const header = document.createElement("div");
header.classList.add("header");


const content = document.createElement("div");
content.classList.add("content");
body.appendChild(content);

const sidebar = createSidebar();
content.appendChild(sidebar);

let actual_category = document.createElement("div");
actual_category = categoryFromList(actual_category, notes);

export {actual_category};


