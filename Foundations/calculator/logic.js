function saveNum(){
  savedNum = firstNum;
  firstNum = "";
}
function numInput(num){
  firstNum = firstNum + num;

}
function clear(){
  savedNum = "";
  firstNum = "";
  opperator = "";

  const thing = document.getElementById("output").value =  "";
}
function equals(opperator){
  switch (opperator) {
    case "+":
      firstNum = parseFloat(firstNum) + parseFloat(savedNum);
      savedNum = "";
      opperator ="";
      break;
    case "-":
      firstNum = parseFloat(savedNum) - parseFloat(firstNum);
      savedNum = "";
      opperator = "";
      break;
    case "*":
        firstNum = parseFloat(savedNum) * parseFloat(firstNum);
        savedNum = "";
        opperator = "";
      break;
    case "/":
      firstNum = parseFloat(savedNum) / parseFloat(firstNum);
      savedNum = "";
      opperator = "";
    break;
    default:
      alert("No viable equation found! Please reenter num(+,-,*,/)num and hit =")
      clear();
  }
      const thing = document.getElementById("output").value +=  firstNum;
}
function buttonPress(){
    const sevenButton = document.getElementById("sevenButton");
    sevenButton.addEventListener("click", ()=>{
      const thing = document.getElementById("output").value +=  "7";
      numInput("7");
      return
    })
    const eightButton = document.getElementById("eightButton");
    eightButton.addEventListener("click", ()=>{
      const thing = document.getElementById("output").value +=  "8";
      numInput("8");
      return
    })
    const nineButton = document.getElementById("nineButton");
    nineButton.addEventListener("click", ()=>{
      const thing = document.getElementById("output").value +=  "9";
      numInput("9");
      return
    })
    const plusButton = document.getElementById("plusButton");
    plusButton.addEventListener("click", ()=>{
      const thing = document.getElementById("output").value +=  "+";
      saveNum();
      return opperator = "+";
    })

    const fourButton = document.getElementById("fourButton");
    fourButton.addEventListener("click", ()=>{
      const thing = document.getElementById("output").value +=  "4";
      numInput("4");
      return
    })
    const fiveButton = document.getElementById("fiveButton");
    fiveButton.addEventListener("click", ()=>{
      const thing = document.getElementById("output").value +=  "5";
      numInput("5");
      return
    })
    const sixButton = document.getElementById("sixButton");
    sixButton.addEventListener("click", ()=>{
      const thing = document.getElementById("output").value +=  "6";
      numInput("6");
      return
    })
    const minusButton = document.getElementById("minusButton");
    minusButton.addEventListener("click", ()=>{
      const thing = document.getElementById("output").value +=  "-";
      saveNum();
      return opperator = "-";
    })

    const oneButton = document.getElementById("oneButton");
    oneButton.addEventListener("click", ()=>{
      const thing = document.getElementById("output").value +=  "1";
      numInput("1");
      return
    })
    const twoButton = document.getElementById("twoButton");
    twoButton.addEventListener("click", ()=>{
      const thing = document.getElementById("output").value +=  "2";
      numInput("2");
      return
    })
    const threeButton = document.getElementById("threeButton");
    threeButton.addEventListener("click", ()=>{
      const thing = document.getElementById("output").value +=  "3";
      numInput("3");
      return
    })
    const multiplyButton = document.getElementById("multiplyButton");
    multiplyButton.addEventListener("click", ()=>{
      const thing = document.getElementById("output").value +=  "*";
      saveNum();
      return opperator = "*";
    })

    const zeroButton = document.getElementById("zeroButton");
    zeroButton.addEventListener("click", ()=>{
      const thing = document.getElementById("output").value +=  "0";
      numInput("0");
      return
    })
    const pointButton = document.getElementById("pointButton");
    pointButton.addEventListener("click", ()=>{
      const thing = document.getElementById("output").value +=  ".";
      numInput(".");
      return
    })
    const divideButton = document.getElementById("divideButton");
    divideButton.addEventListener("click", ()=>{
      const thing = document.getElementById("output").value +=  "/";
      saveNum();
      return opperator = "/";
    })
    const equalsButton = document.getElementById("equalsButton");
    equalsButton.addEventListener("click", ()=>{
      const thing = document.getElementById("output").value +=  "=";
      equals(opperator);
      return
    })
    const clearButton = document.getElementById("clearButton");
    clearButton.addEventListener("click", ()=>{
      clear();
      return
    })
}
let savedNum = "";
let firstNum = "";
let opperator = "";
buttonPress();
