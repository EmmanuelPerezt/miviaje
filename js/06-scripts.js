const encabezado = document.querySelector('.contenido-hero h1')
console.log(encabezado)//con propiedad hidden en css no found
console.log(encabezado.textContent)
console.log(encabezado.innerHTML)//se trae el html

document.querySelector('.contenido-hero h1').textContent= 'nuevo heading';
const imagen = document.querySelector('.card img');
imagen.src='img/hacer2.jpg';


