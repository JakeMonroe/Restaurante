function actualizarOpciones(){
    const tipo = document.getElementById('Tipo').value;

    const producto = document.getElementById('Producto');

    producto.innerHTML = '';

    const opciones ={
        Bebidas:['Jugo', 'Cerveza', 'Agua', 'Gaseosa', 'Coctel', 'Café', 'Té', 'Vino', 'Limonada', 'Refresco', 'Smoothie', 'Leche', 'Chocolate caliente', 'Batido', 'Whisky'],
        Comidas:['Pizza', 'Hamburguesa', 'Sushi', 'Tacos', 'Ensalada', 'Pasta', 'Sopa', 'Sandwich', 'Pollo asado', 'Paella', 'Lasagna', 'Empanadas', 'Ceviche', 'Burritos', 'Shawarma'],
    };

    if(opciones[tipo]) {
        opciones[tipo].forEach(function(item){
            const option = document.createElement('option');
            option.value = item.toLowerCase();
            option.textContent = item;
            producto.appendChild(option);
        });
    }
}


let ordenes =[];

function agregarOrden(){
    const tipo = document.getElementById('Tipo').value;
    const producto = document.getElementById('Producto').value;



ordenes.push({ tipo, producto});

actualizarListaOrdenes();
}

function actualizarListaOrdenes(){
    const listaOrdenes = document.getElementById('listaOrdenes');
    listaOrdenes.innerHTML='';

    ordenes.forEach((orden, index)=>{
        const item = document.createElement('li');
        item.textContent = `${orden.tipo}: ${orden.producto}`;
        listaOrdenes.appendChild(item);
    });


}

/* document.getElementById('Formulario').addEventListener('submit', function(event) {
    event.preventDefault(); 

    finalizarPedido(); 
});
 */
/* function finalizarPedido() {
    if (ordenes.length === 0) {
        alert('No hay órdenes en el carrito.');
        return;
    }

    const mesa = document.getElementById('Mesa').value;
    const cliente = document.getElementById('Cliente').value;
    const hora = new Date();
    const fechaHora = hora.toISOString();

    const queryParams = ordenes.map((orden, index) => 
        `Tipo${index + 1}=${encodeURIComponent(orden.tipo)}&Producto${index + 1}=${encodeURIComponent(orden.producto)}`
    ).join('&') + `&Mesa=${encodeURIComponent(mesa)}&Cliente=${encodeURIComponent(cliente)}&FechaHora=${encodeURIComponent(fechaHora)}`;

    window.location.href = `Factura.html?${queryParams}`;
}



 */