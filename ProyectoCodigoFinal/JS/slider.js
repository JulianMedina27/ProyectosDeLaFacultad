
let imagenes = [
    {
        "url": "img/java.jpg",
        "nombre": "Proyecto 01",
        "descripcion": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam cupiditate natus officiis hic aperiam sapiente veritatis itaque dicta dolore cumque qui eum quisquam, iusto, facilis modi doloremque enim voluptatem nisi"

    },
    {
        "url": "img/i",
        "nombre": "Proyecto 02",
        "descripcion": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam cupiditate natus officiis hic aperiam sapiente veritatis itaque dicta dolore cumque qui eum quisquam, iusto, facilis modi doloremque enim voluptatem nisi"

    },
    {
        "url": "img/img3.webp",
        "nombre": "Proyecto 03",
        "descripcion": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam cupiditate natus officiis hic aperiam sapiente veritatis itaque dicta dolore cumque qui eum quisquam, iusto, facilis modi doloremque enim voluptatem nisie"

    },
]

let atras = document.getElementById('atras');
let adelante = document.getElementById('adelante');
let imagen = document.getElementById('img');
let puntos = document.getElementById('puntos');
let texto = document.getElementById('texto')
let actual = 0
posicionCarrusel()

atras.addEventListener('click', function(){
    actual -=1

    if (actual == -1){
        actual = imagenes.length - 1
    }

    imagen.innerHTML = ` <img class="img" src="${imagenes[actual].url}" alt="logo pagina" loading="lazy"></img>`
    texto.innerHTML = `
    <h3>${imagenes[actual].nombre}</h3>
    <p>${imagenes[actual].descripcion}</p>
    `
    posicionCarrusel()
})  
adelante.addEventListener('click', function(){
    actual +=1

    if (actual == imagenes.length){
        actual = 0
    }

    imagen.innerHTML = ` <img class="img" src="${imagenes[actual].url}" alt="logo pagina" loading="lazy"></img>`
    texto.innerHTML = `
    <h3>${imagenes[actual].nombre}</h3>
    <p>${imagenes[actual].descripcion}</p>
    `
    posicionCarrusel()
})  

function posicionCarrusel() {
    puntos.innerHTML = ""
    for (var i = 0; i <imagenes.length; i++){
        if(i == actual){
            puntos.innerHTML += '<p class="bold">.<p>'
        }
        else{
            puntos.innerHTML += '<p>.<p>'
        }
    } 
}