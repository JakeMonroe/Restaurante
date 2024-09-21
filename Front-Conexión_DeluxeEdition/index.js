const express = require('express');
const path = require('path');
const mysql = require('mysql');

const app = express();

let conexion = mysql.createConnection({
    host: 'localhost',
    database: 'Restaurantes',
    user: 'root',
    password: ''
})


app.set('view engine', 'ejs');

app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public','index.html'));
});


app.post('/registrar', function(req, res) {
    const datos = req.body;

    let Tipo = datos.Tipo;
    let Producto = datos.Producto;
    let mesa = datos.mesa;
    let tipocliente = datos.tipocliente;

    
    const query1 = `INSERT INTO Ordenn (Mesa) VALUES (?)`;

    conexion.query(query1, [mesa], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error en la primera consulta');
        }

        
        const query2 = 'INSERT INTO Cliente (Tipo_Cliente) VALUES (?)';
        conexion.query(query2, [tipocliente], (err, results) => {
            if (err) {
                console.error(err);
                return res.status(500).send('Error en la segunda consulta');
            }

            
            const query3 = 'INSERT INTO Producto (Nombre_Producto) VALUES (?)';
            conexion.query(query3, [Producto], (err, results) => {
                if (err) {
                    console.error(err);
                    return res.status(500).send('Error en la tercera consulta');
                }

                
                const query4 = 'INSERT INTO Tipo (Nombre_Tipo) VALUES (?)';
                conexion.query(query4, [Tipo], (err, results) => {
                    if (err) {
                        console.error(err);
                        return res.status(500).send('Error en la cuarta consulta');
                    }

                });
            });
        });
    });
});

app.listen(3000, function() {
    console.log('Servidor en línea en http://localhost:3000');
});