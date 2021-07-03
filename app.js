let p_tag = document.querySelector("p");
let a_tag = document.createElement("a");
p_tag.innerHTML = "<a href=https://fk-austria.at>AUSTRIA WIEN</a>"
//a_tag.innerText = 'AUSTRIA WIEN';
//a_tag.setAttribute("href","https://fk-austria.at");

p_tag.appendChild(a_tag);