function createHome () {
    const info = document.createElement("div");
    info.setAttribute("id", "info");
    
    const intro = ["The best meat you can eat just around the corner" , "You have never tasted something better",
    "Order from home"]

    intro.forEach((element) => {
        const intro_title = document.createElement("p");
        intro_title.classList.add("title");
        intro_title.innerText = element;
        info.appendChild(intro_title);
    })
    return info;
}

function createContact() {
    const info = document.createElement("div");
    info.setAttribute("id", "info");

    const intro_title = document.createElement("p");
    intro_title.classList.add("title");
    intro_title.innerHTML = "Instagram: @eatsomemeat <br> Phone: 4325 2954"
    info.appendChild(intro_title);
    
    info.innerHTML += "<iframe src=\"https:\/\/www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1642.7200750666543!2d-58.453397228003276!3d-34.5677278392744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5d00947fc4d%3A0x24ff612e1cfa74c8!2sCdad.%20de%20La%20Paz%201485%2C%20C1426%20AHA%2C%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1641314060150!5m2!1ses-419!2sar\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\"></iframe>";
    info.style.alignItems= "center";
    return info;
}

export {createHome, createContact};

