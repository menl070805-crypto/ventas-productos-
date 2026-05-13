// LISTA DE PRODUCTOS
const productos = [
    {nombre:"Artesanía de barro", categoria:"artesanias", precio:"$150", img:"img/artesania.jpg"},
    {nombre:"Vestido ", categoria:"ropa", precio:"$350", img:"img/vestido.jpg"},
    {nombre:"Audífonos", categoria:"electronica", precio:"$500", img:"img/audifonos.jpg"},
    {nombre:"Bujía", categoria:"refacciones", precio:"$120", img:"img/bujia.jpg"},
    {nombre:"Sofá", categoria:"muebles", precio:"$2500", img:"img/sofa.jpg"},
    {nombre:"Pulsera artesanal", categoria:"artesanias", precio:"$80", img:"img/pulsera.jpg"},
    {nombre:"Playera", categoria:"ropa", precio:"$200", img:"img/playera.jpg"},
    {nombre:"Televisión", categoria:"electronica", precio:"$4000", img:"img/television.jpg"},
    {nombre:"Llanta", categoria:"refacciones", precio:"$900", img:"img/llanta.jpg"},
    {nombre:"Mesa", categoria:"muebles", precio:"$1200", img:"img/mesa.jpg"},
    {nombre:"Silla", categoria:"muebles", precio:"$800", img:"img/silla.jpg"},
    {nombre:"Mueble TV", categoria:"muebles", precio:"$1500", img:"img/mueble-tv.jpg"},
    {nombre:"Carburador", categoria:"refacciones", precio:"$300", img:"img/carburador.jpg"},
    {nombre:"Faro", categoria:"refacciones", precio:"$250", img:"img/faro.jpg"},
    {nombre:"Laptop", categoria:"electronica", precio:"$6000", img:"img/laptop.jpg"},
    {nombre:"Bocina", categoria:"electronica", precio:"$400", img:"img/bocina.jpg"},
    {nombre:"Blusa", categoria:"ropa", precio:"$180", img:"img/blusa.jpg"},
    {nombre:"Pantalón", categoria:"ropa", precio:"$220", img:"img/pantalon.jpg"},
    {nombre:"Jaguar ", categoria:"artesanias", precio:"$500", img:"img/jaguar.jpg"},
    {nombre:"Pompon", categoria:"artesanias", precio:"$100", img:"img/pompon.jpg"}
];

// MOSTRAR PRODUCTOS
function mostrarProductos(lista){
    const contenedor = document.getElementById("productos");
    contenedor.innerHTML = "";

    lista.forEach(p => {
        contenedor.innerHTML += `
        <div class="card" onclick="comprarProducto('${p.nombre}')">

        <div class="img-container">
            <img src="${p.img}">
        </div>

        <h3>${p.nombre}</h3>
        <p class="precio">${p.precio}</p>

        <button 
class="btn-comprar"

onclick="
event.stopPropagation();
agregarCarrito('${p.nombre}','${p.precio}')
">
Agregar al carrito

</button>

        </div>
        `;
    });
}

function comprarProducto(nombre){

    let respuesta = confirm("¿Deseas comprar " + nombre + "?");

    if(respuesta){
        alert("✅ Agregaste " + nombre + " al carrito");
    }else{
        alert("❌ Compra cancelada");
    }

}

function volverInicio(){

    document.getElementById("productos").style.display = "none";

    document.getElementById("inicio").style.display = "block";

    document.getElementById("footer").style.display = "grid";
}

function filtrar(categoria){

    const contenedor =
    document.getElementById("productos");

    const inicio =
    document.getElementById("inicio");

    const footer =
    document.getElementById("footer");

    // Ocultar portada
    inicio.style.display = "none";

    // Ocultar footer
    footer.style.display = "none";

    // Mostrar productos
    contenedor.style.display = "grid";

    if(categoria === "todos"){

        mostrarProductos(productos);

    }else{

        const filtrados = productos.filter(
            p => p.categoria === categoria
        );

        mostrarProductos(filtrados);
    }
}

let carrito = [];

let total = 0;

/* BUSCADOR */

function buscarProducto(){

    const texto =
    document.getElementById("busqueda")
    .value
    .toLowerCase();

    const filtrados = productos.filter(p =>
        p.nombre.toLowerCase().includes(texto)
    );

    mostrarProductos(filtrados);

    document.getElementById("inicio").style.display = "none";

    document.getElementById("productos").style.display = "grid";

    document.getElementById("footer").style.display = "none";
}

/* AGREGAR AL CARRITO */

function agregarCarrito(nombre, precio){

    carrito.push({
        nombre,
        precio
    });

    actualizarCarrito();
}

/* ACTUALIZAR */

function actualizarCarrito(){

    const lista =
    document.getElementById("lista-carrito");

    lista.innerHTML = "";

    total = 0;

    carrito.forEach((producto,index)=>{

        total += parseInt(
            producto.precio.replace("$","")
        );

        lista.innerHTML += `

<div class="item-carrito">

    <p>${producto.nombre}</p>

    <p>${producto.precio}</p>

    <button onclick="eliminarProducto(${index})">

        Eliminar

    </button>

</div>

`;
    });

    document.getElementById("contador-carrito")
    .innerText = carrito.length;

    document.getElementById("total")
    .innerText = "Total: $" + total;
}

/* ELIMINAR */

function eliminarProducto(index){

    carrito.splice(index,1);

    actualizarCarrito();
}

/* ABRIR */

function abrirCarrito(){

    document.getElementById("carrito")
    .classList.add("activo");
}

/* CERRAR */

function cerrarCarrito(){

    document.getElementById("carrito")
    .classList.remove("activo");
}