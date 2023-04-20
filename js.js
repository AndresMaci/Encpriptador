
var textInput;
function encrypt() {
  textInput = document.getElementById("texto").value;
  let x = String(textInput);
  x = x.replace(/[a|e|i|o|u]/g, function (letra) {
    switch (letra) {
      case "a":
        return "ai";
      case "e":
        return "enter";
      case "o":
        return "ober";
      case "i":
        return "imes";
      case "u":
        return "ufat";
    }
  });
  let output = x;
  document.getElementById("resultado").value = output;
}

function decrypt() {
  let textInput = document.getElementById("texto").value;
  if (textInput.trim() !== "") {
    let x = String(textInput);
    console.log(x);
    x = x.replace(/(ai|enter|imes|ober|ufat)/g, function (letra) {
      switch (letra) {
        case "ai":
          return "a";
        case "enter":
          return "e";
        case "ober":
          return "o";
        case "imes":
          return "i";
        case "ufat":
          return "u";
      }
    });
    let output = x;
    document.getElementById("resultado").value = output;
  } else {
    console.log("El campo de entrada está vacío.");
  }
}

const myButton = document.getElementById("copiar");
const myTextarea = document.getElementById("resultado");

myButton.addEventListener("click", function () {
  
  myTextarea.select(); // Selecciona el contenido del textarea
  document.execCommand("copy"); // Copia el contenido seleccionado al portapapeles
  
});

let boton1 = document.getElementById("encriptar");
boton1.addEventListener("click", encrypt);


let boton2 = document.getElementById("desencriptar");
boton2.addEventListener("click", decrypt);



