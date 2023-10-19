-- Active: 1697072623159@@localhost@5432@postgres

CREATE Table
    tbl_cars (
        id SERIAL PRIMARY KEY,
        marca VARCHAR(100),
        modelo VARCHAR(100),
        color VARCHAR(50),
        anio INTEGER
    );

INSERT INTO
    tbl_cars (marca, modelo, color, anio)
VALUES ('Mazda', '626', 'Rojo', 1981);

INSERT INTO
    tbl_cars (marca, modelo, color, anio)
VALUES (
        'Nissan',
        'Sentra',
        'Blanco',
        1986
    );

INSERT INTO
    tbl_cars (marca, modelo, color, anio)
VALUES ('Kia', 'Sephia', 'Azul', 2001);

SELECT *from tbl_cars;