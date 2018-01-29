function cipher() {
  var result = '';
  var cod = 0;

  var palabra = palabra.toUpperCase();
  for (var i = 0 ; palabra.length; i++) {
    cod = palabra.charCodeAt(i);
    cod = ((cod - 65 + 35) % 26) + 26;
    result += String.fromCharCode(cod);
  }
  alert(result);
  result = ((variable - 65 - 7 + 26) % 26) + 65;
}

