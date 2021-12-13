const container = document.querySelector("#container");

//a <p> with red text that says “Hey I’m red!”
const p1 = document.createElement("p");
p1.style.color = "red";
p1.textContent = "Hey I am red!";
container.appendChild(p1);

//an <h3> with blue text that says “I’m a blue h3!”
const h3 = document.createElement("h3");
h3.style.color = "blue";
h3.textContent = "Hey I am blue!";
container.appendChild(h3);

//a <div> with a black border and pink background color with the following elements inside of it
const div = document.createElement("div");
div.style.border = "5px solid white";
div.style.backgroundColor = "blue";
container.appendChild(div);

//another <h1> that says “I’m in a div”
const h1 = document.createElement("h1");
h1.textContent = "I am in a div!";
div.appendChild(h1);

//a <p> that says “ME TOO!”
const pindiv = document.createElement("p");
pindiv.textContent = "ME TOO!";
div.appendChild(pindiv);


/*
Add the following elements to the container using ONLY javascript and the DOM methods shown above.

    a <p> with red text that says “Hey I’m red!”
    an <h3> with blue text that says “I’m a blue h3!”
    a <div> with a black border and pink background color with the following elements inside of it:
        another <h1> that says “I’m in a div”
        a <p> that says “ME TOO!”
        Hint for this one: after creating the div with createElement, append the <h1> and <p> to it before adding it to the container.
*/
function alertTheNerd() {
  alert("Hello World");
}

const btn = document.querySelector("#btn");
btn.onclick = () => alert ("Hello World");

const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", alertTheNerd);
//btn2.addEventListener('click', function (e) {
//  e.target.style.background = 'blue';
//});
