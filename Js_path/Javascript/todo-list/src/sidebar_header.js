import { actual_category } from ".";

function createSidebar() {
    const sidebar = document.createElement("div");
    sidebar.setAttribute("id", "sidebar");

    const categories = ["Notes", "Archived", "Deleted"];
    const links = document.createElement("ul");
    for (const category of categories) {
        const link = document.createElement("li");
        link.innerHTML = `<btn> ${category} </btn>`;
        link.addEventListener("click", () => {switchTab(category)});
        links.appendChild(link);
    }
    sidebar.appendChild(links);

    return sidebar;
}

function switchTab(tab) {
    actual_category.innerHTML = "";
    switch (tab) {
        case "Notes":
            actual_category.appendChild(current);
            break;
        case "Archived":
            actual_category.appendChild(archived);
            break;
        case "Deleted":
            actual_category.appendChild(erased);
            break;
    }

}


export {createSidebar };