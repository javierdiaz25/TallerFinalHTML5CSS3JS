const principal = () => {
  const liPares = document.querySelectorAll("li:nth-child(even)");
  const liImpares = document.querySelectorAll("li:nth-child(odd)");

  arregloPar = Array.from(liPares);
  arregloImpar = Array.from(liImpares);
  
 
  
};

const cambiarEstiloPares = () => {
    arregloPar.forEach(function (elem) {
        elem.style.backgroundColor = '#4CD7E5';    
    })
    arregloImpar.forEach(function (elemimpares) {
      elemimpares.style.backgroundColor = '#D35400';
  })
  };

  const cambiarEstiloImpares = () => {
    arregloImpar.forEach(function (elem) {
        
        elem.style.backgroundColor = '#4CD7E5';
    })
    arregloPar.forEach(function (elempares) {
     
      elempares.style.backgroundColor = '#D35400';
  })
};
