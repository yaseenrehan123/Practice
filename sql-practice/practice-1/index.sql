CREATE TABLE IF NOT EXISTS product (
    id SERIAL PRIMARY KEY,
    product_name VARCHAR(200),
    price INT,
    supplier_id INT REFERENCES supplier(id)
);

INSERT INTO product(product_name, price, supplier_id)
VALUES ('Jeans',100,1),
('Shirts',50,2);

SELECT * FROM product ORDER BY id DESC; 

SELECT * FROM product
JOIN supplier ON supplier_id = supplier.id;

INSERT INTO product(product,price,supplier_id)
VALUES ('Shoes',75,3);