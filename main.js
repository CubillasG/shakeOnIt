const contenedor = document.querySelector('.flex-container')
let contador = 0;

function crearZapatos (nombre,modelo,precio) {
            contador ++;
            imagen ="<img src='img/Donut (01).png' width='150px'>"          
            nombre = `<h2>${nombre}</h2>`
            modelo = `<h3>${modelo}</h3>`
            precio = `<p>Precio: $${precio}</p>`

            return [imagen,nombre,modelo,precio]

}

let documentFragment = document.createDocumentFragment()
const changeHidden = (number)=>{
    document.querySelector('.key-data').value = number
}

for(i = 1; i <= 20; i++){
    let modeloRandom =Math.round (Math.random()*1000);
    let precioRandom =Math.round( Math.random()*10+30);
    let zapatos = crearZapatos(`zapatos ${i}`,`${modeloRandom}`,`${precioRandom}`);
    let div = document.createElement('div');
    div.addEventListener('click',()=>{changeHidden(modeloRandom)})
    div.tabIndex = i;
    div.classList.add(`item-${i}`,'flex-item');
    div.innerHTML = zapatos[0] + zapatos[1] + zapatos [2] + zapatos [3];
    documentFragment.appendChild(div)

}
contenedor.appendChild(documentFragment)