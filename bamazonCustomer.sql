DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;
							/* all 3 of these, fixezes 
				            */
USE bamazon;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT, /* auto-increment */
  product_name VARCHAR(45) NULL,
  department_name VARCHAR(100) NULL,
  price DECIMAL (10) NULL,      				/* change to decimal */
  stock_quantity INT (4) NULL,
  PRIMARY KEY (item_id)  /* fixz. */
);

/* items # 1 */
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (01, "MacBook", "Computers", 1000, 4);

/* items # 2 */
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (02, "Running Shoes, Nike", "Mens Shoes", 80, 8);

/* items # 3 */
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (03, "Red Lipstick", "Women's Cosmetics", 7, 13);

/* items # 4 */
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (04, "Frying Pan", "Household and Kitchen", 20, 18);

/* items # 5 */
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (05, "Stone Waterfall", "Household and Home Decor", 20, 6);

/* items # 6 */
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (06, "Air Humidifier", "Household and Bedroom", 30, 10);

/* items # 7 */
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (07, "iPad", "Mobile Devices and Electronics", 200, 3);

/* items # 8 */
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (08, "Smart Trash Can", "Household and Kitchen", 10, 99);

/* items # 9 */
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (09, "Modern Chair", "Household and Home Decor", 100, 6);

/* items # 10 */
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (10, "Bluetooth Speaker", "Electronics", 300, 30);








