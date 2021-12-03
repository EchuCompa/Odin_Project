// your javascript file
const container = document.querySelector('#container');
                        
const red_p = document.createElement('p');
red_p.textContent = 'Hey I’m red!';
red_p.style.color = 'red';       
container.appendChild(red_p);

const blue_h3 = document.createElement('h3');
blue_h3.textContent = 'I’m a blue h3!';
blue_h3.style.color = 'blue';       
container.appendChild(blue_h3);

const new_div = document.createElement('div');
new_div.style.border = 'black solid 2px';   
new_div.style.backgroundColor = "pink";

const new_h1 = document.createElement('h1');
new_h1.textContent = 'I’m in a div';      
new_div.appendChild(new_h1);

const new_p = document.createElement('p');
new_p.textContent = 'ME TOO!';      
new_div.appendChild(new_p);

container.appendChild(new_div);


btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  })


