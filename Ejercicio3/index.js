const cambiar = () => {
  var body = document.getElementById('body');
  var select = document.getElementById('seleccionarTema');
  var value = select.options[select.selectedIndex].value;
  console.log('Valor selecionado: '+value); 
  body.className = value;
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

var a = document.querySelectorAll('a');
a.forEach(element => {
  element.className = 'decoracionEnlace';
})
