titulo.innerHTML = '09 - array ';
// De aquí en adelante estaremos viendo una serie de métodos de arreglos
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio','Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
// Recorrer un array
for(let i = 0; i < meses.length; i++ ){
    console.log( `meses[${i}] = ${meses[i]} ` )
}

// ForEach
/* carrito.forEach( function(producto) {
    console.log( `Articulo: ${ producto.nombre } Precio: $ producto.precio} ` )
}) */