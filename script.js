function math() {
var a = +prompt("Введите a");
var b = +prompt("Введите b");
while (b === 0) {
  alert("Error");
  var b = +prompt("Введите b еще раз");
}
var c = +prompt("Введите c");
if (a == 0) {
  var xa = -c / b;
  alert("X: " + Math.round(xa));
}
var d = b * b - 4 * a * c;
if (d === 0) {
  var x0 = -b / (2 * a);
  alert("Дискриминант равен нулю");
  alert("X: " + x0);
} else if (d > 0) {
  var x1 = (-b - Math.sqrt(d)) / (2 * a);
  var x2 = (-b + Math.sqrt(d)) / (2 * a);
  alert("X1: " + Math.floor(x1));
  alert("X2: " + Math.floor(x2));
} else {
  alert("Дискриминант отрицательный");
  alert("√" + d);
}
}