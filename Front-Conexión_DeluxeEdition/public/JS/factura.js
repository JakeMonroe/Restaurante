function obtenerParametros() {
    const params = new URLSearchParams(window.location.search);
    const listaOrdenes = document.getElementById('listaOrdenes');

    let index = 1;
    while (params.get(`Tipo${index}`)) {
        const tipo = params.get(`Tipo${index}`);
        const producto = params.get(`Producto${index}`);
        
        const item = document.createElement('li');
        item.textContent = `${tipo}: ${producto}`;
        listaOrdenes.appendChild(item);

        index++;
    }

    const mesa = params.get('Mesa');
    const cliente = params.get('Cliente');
    const fechaHora = params.get('FechaHora');

    document.getElementById('Mesa').textContent = mesa || 'No seleccionado';
    document.getElementById('Cliente').textContent = cliente || 'No seleccionado';
    document.getElementById('fecha-hora').textContent = fechaHora ? new Date(fechaHora).toLocaleString() : 'No disponible';
}

window.onload = obtenerParametros;
