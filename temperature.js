"use strict"; // Use ECMAScript 5 strict mode in browsers that support it
function calculate() {
  var result;
  var original = document.getElementById("original");
  var temp = original.value;
  var regexp = /^\s*([-+]?\d+(?:\.\d+)?(?:[eE][-+]?\d+)?)\s*([cfCF])\s*$/;
  
  var m = temp.match(regexp);
  
  if (m) {
    var num = m[0];
    var type = m[1];
    num = parseFloat(num);
    if (type == 'c' || type == 'C') {
      result = (num * 9/5)+32;
      result = result + type;
    }
    else {
      result = (num - 32)*5/9;
      result = result + type;
    }
    converted.innerHTML = result;
  }
  else {
    converted.innerHTML = "ERROR! Try something like '-4.2C' instead";
  }
}