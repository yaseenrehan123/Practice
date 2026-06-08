CREATE TABLE IF NOT EXISTS supplier(
    id SERIAL PRIMARY KEY,
    name VARCHAR(200)
);

INSERT INTO supplier(name)
VALUES ('Nike'),('James');
 
SELECT * FROM supplier;