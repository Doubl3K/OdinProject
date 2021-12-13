function userInput(){
  let num = prompt("Please enter a number that you want to FizzBuzz!");
  return num;
}

function printNums(){
  for (let i = 1; i < num; i++) {
    let fizzy = fizz(i);
    let buzzy = buzz(i);
    let fizzybuzzy =fizzbuzz(i);
    if (fizzy==false && buzzy==false && fizzybuzzy==false) {
      console.log(i);
    }
  }
}

function fizz(i){
  if (i%3==0 && i%5!=0) {
    console.log("Fizz");
  }
  else {
    return false;
  }
}

function buzz(i){
  if (i%5==0 && i%3!=0){
    console.log("Buzz");
  }
  else {
    return false;
  }
}

function fizzbuzz(i){
  if (i%3==0 && i%5==0) {
    console.log("FizzBuzz");
  }
  else {
    return false;
  }
}




let num = userInput();
printNums(num);
