CREATE DATABASE Electiva2DB;

USE Electiva2DB;

CREATE TABLE Estudiantes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50),
    carrera VARCHAR(50),
    edad INT
);

INSERT INTO Estudiantes (nombre, carrera, edad)
VALUES 
('Ana Pérez', 'Software', 21),
('Carlos Ramírez', 'Multimedia', 23),
('Laura Gómez', 'Redes', 22);
