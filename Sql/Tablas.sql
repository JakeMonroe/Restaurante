

DROP DATABASE Restaurante

CREATE DATABASE Restaurante
    DEFAULT CHARACTER SET = 'utf8mb4';

USE Restaurante;


CREATE TABLE Mesero (
    Mesero_ID INT(10) PRIMARY KEY AUTO_INCREMENT,
    Nombre_Mesero VARCHAR(20)
);

CREATE TABLE Tipo_Cliente (
    Tipo_Cliente_ID INT(10) PRIMARY KEY AUTO_INCREMENT,
    Tipo_Cliente_Tipo VARCHAR(20)
);

CREATE TABLE Tipo_Producto (
    Tipo_Producto_ID INT(10) PRIMARY KEY AUTO_INCREMENT,
    Tipo_Producto_Nombre VARCHAR(20)
);

CREATE TABLE Categoria_Producto (
    Categoria_Producto_ID INT(10) PRIMARY KEY AUTO_INCREMENT,
    Nombre_Categoria VARCHAR(20)
);

CREATE TABLE Producto (
    Producto_ID INT(10) PRIMARY KEY AUTO_INCREMENT,
    Nombre_Producto VARCHAR(20),
    Costo_Producto DECIMAL(5, 2),
    Precio_Producto DECIMAL(5, 2),
    Categoria_Producto_ID INT(10),
    Tipo_Producto_ID INT(10),
    FOREIGN KEY (Categoria_Producto_ID) REFERENCES Categoria_Producto (Categoria_Producto_ID),
    FOREIGN KEY (Tipo_Producto_ID) REFERENCES Tipo_Producto (Tipo_Producto_ID)
);

CREATE TABLE Orden (
    Orden_ID INT(10) PRIMARY KEY AUTO_INCREMENT,
    Orden_Fecha DATETIME,
    Orden_Mesa VARCHAR(20),
    Orden_Propina DECIMAL(5, 2),
    Mesero_ID INT(10),
    Tipo_Cliente_ID INT(10),
    FOREIGN KEY (Mesero_ID) REFERENCES Mesero (Mesero_ID),
    FOREIGN KEY (Tipo_Cliente_ID) REFERENCES Tipo_Cliente (Tipo_Cliente_ID)
);

CREATE TABLE Pedido (
    Pedido_ID INT(10) PRIMARY KEY AUTO_INCREMENT,
    Orden_ID INT(10),
    Producto_ID INT(10),
    FOREIGN KEY (Orden_ID) REFERENCES Orden (Orden_ID),
    FOREIGN KEY (Producto_ID) REFERENCES Producto (Producto_ID)
);

SELECT * FROM Mesero;
SELECT * from Tipo_Cliente;