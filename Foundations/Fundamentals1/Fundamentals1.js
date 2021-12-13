function add7(a){
  return a+7;
}
function multiply(a,b){
  return a*b;
}
function capitalize(str){
  return str.charAt(0).toUpperCase() +str.slice(1);
}
function lastLetter(word){
  return word.charAt(word.length-1);
}



console.log(add7(5));
console.log(multiply(2, 4));
console.log(capitalize("Hello"));
console.log(lastLetter("Bahankaho"));
console.log(lastLetter("Wakarimashta"));
