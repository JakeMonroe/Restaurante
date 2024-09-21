USE Restaurante;
---- Subir Datos atravez de rutas; poner la carpeta de tablas a la carpeta de xamp despues mysql despues data
LOAD DATA INFILE 'Tablas/Mesero.csv'
REPLACE INTO TABLE Mesero
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 LINES
(Nombre_Mesero);


LOAD DATA INFILE 'Tablas/Tipo_Cliente.csv'
REPLACE INTO TABLE Tipo_Cliente
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 LINES
(Tipo_Cliente_Tipo);

LOAD DATA INFILE 'Tablas/Tipo_Producto.csv'
REPLACE INTO TABLE Tipo_Producto
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 LINES
(Tipo_Producto_Nombre);

LOAD DATA INFILE 'Tablas/Categoria_Producto.csv'
REPLACE INTO TABLE Categoria_Producto
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 LINES
(Nombre_Categoria);

LOAD DATA INFILE 'Tablas/Producto.csv'
REPLACE INTO TABLE Producto
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 LINES
(Nombre_Producto, Costo_Producto, Precio_Producto, Categoria_Producto_ID, Tipo_Producto_ID);

LOAD DATA INFILE 'Tablas/Orden.csv'
REPLACE INTO TABLE Orden
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 LINES
(Orden_Fecha, Orden_Mesa, Orden_Propina, Mesero_ID, Tipo_Cliente_ID);

LOAD DATA INFILE 'Tablas/producto_Orden.csv'
REPLACE INTO TABLE Pedido
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 LINES
(Orden_ID, Producto_ID);

