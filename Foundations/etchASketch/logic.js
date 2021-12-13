function gridCreate(){
  for (var i = 0; i < 16; i++) {
    const container = document.querySelector(".grid-container");
    const content = document.createElement("div");
    content.classList.add("row"+i);
    container.appendChild(content);
    content.style.display = "flex";
    for (var j = 0; j < 16; j++) {
      const container = document.querySelector(".row"+i);
      const content = document.createElement("div");
      content.classList.add("item", "column"+j);
      container.appendChild(content);
      content.style.width = "60px";
      content.style.height = "60px";
    }
  }
}

function draw(){
  const itemArr = document.getElementsByClassName('item');
  let mouseTarget = {};
  for (var i = 0; i < itemArr.length; i++) {
    mouseTarget[i] = itemArr[i];
    let mouseTargetz = mouseTarget[i];
    mouseTargetz.addEventListener('mouseenter', e => {
      let rgb = "rgb("+Math.floor(Math.random()*255) +","+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+")"
      mouseTargetz.style.backgroundColor = rgb;
    });
  }
}

function buttonPress(){
  const resButton = document.querySelector("button");
  resButton.addEventListener('click', resButtonPressed => {
    const itemArr = document.getElementsByClassName('item');
    let mouseTarget = {};
    let newGridSize = prompt("Please enter new Grid density");
    if (newGridSize>100 || newGridSize<1 || isNaN(newGridSize)) {
      alert("Please enter a number between 1 and 100");
    }
    else{
    gridReCreate(newGridSize);
    }
  });
}

function gridReCreate(newGridSize){
  let delte = document.querySelector(".grid-container");
  delte.innerHTML="";
  let wh = parseInt(newGridSize);
  wh = 960 / wh;
  wh = wh+"px";
  for (var i = 0; i < newGridSize; i++) {
    const container = document.querySelector(".grid-container");
    const content = document.createElement("div");
    content.classList.add("row"+i);
    container.appendChild(content);
    content.style.display = "flex";
    for (var j = 0; j < newGridSize; j++) {
      const container = document.querySelector(".row"+i);
      const content = document.createElement("div");
      content.classList.add("item", "column"+j);
      container.appendChild(content);
      content.style.width = wh;
      content.style.height = wh;
    }
  }
  reDraw(newGridSize);
}

function reDraw(newGridSize){
  const itemArr = document.getElementsByClassName('item');
  let mouseTarget = {};
  newGridSize = newGridSize*newGridSize;
  for (var i = 0; i < newGridSize; i++) {
    mouseTarget[i] = itemArr[i];
    let mouseTargetz = mouseTarget[i];
    mouseTargetz.addEventListener('mouseenter', e => {
      let rgb = "rgb("+Math.floor(Math.random()*255) +","+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+")"
      mouseTargetz.style.backgroundColor = rgb;
    });
  }
}


gridCreate();
draw();
buttonPress();
