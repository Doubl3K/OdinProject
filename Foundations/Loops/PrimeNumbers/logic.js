//Prime numbers can only divide through themselves and one
let x = true;
for (var i = 1; i <= 10; i++) {
  for (var j = 2; i > j ; j++) {
    if (i%j == 0) {
      j=i;
      x = false;
    }
  }
  if (x == true) {
    console.log(i);
  }
  if (x == false) {
    x = true;
  }
}
