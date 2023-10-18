-- Active: 1697072623159@@localhost@5432@postgres

CREATE Table
    tbl_cars (
        id SERIAL PRIMARY KEY,
        marca VARCHAR(100),
        modelo VARCHAR(100),
        color VARCHAR(50),
        anio INTEGER
    );

SELECT *from tbl_cars;