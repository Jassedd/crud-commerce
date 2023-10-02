CREATE database commerce;
use commerce;

CREATE TABLE users_commerces (
  id int AUTO_INCREMENT, PRIMARY KEY(id),
  first_name varchar(25),
  last_name varchar(55),
  user_role varchar(20),
  email varchar(50),
  user_password varchar(20),
  createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
  updateAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  );


CREATE TABLE products_commerces (
  id int AUTO_INCREMENT, PRIMARY KEY(id),
  product_image text,
  title varchar(50),
  product_description text,
  brand varchar(25),
  starts_product int,
  stock int,
  user_id int,
  category_id int,
  createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
  updateAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  );


CREATE TABLE category_commerces (
  id int AUTO_INCREMENT, PRIMARY KEY(id),
  title varchar(50)
  createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
  updateAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  );


CREATE TABLE comments_commerces (
  id int AUTO_INCREMENT, PRIMARY KEY(id),
  user_name varchar(55),
  comment_commerce text,
  products_id int
  createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
  updateAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  );


ALTER TABLE products_commerce ADD FOREIGN KEY (user_id) REFERENCES users_commerce (id);

ALTER TABLE products_commerce ADD FOREIGN KEY (category_id) REFERENCES category_commerce (id);

ALTER TABLE comments_commerce ADD FOREIGN KEY (products_id) REFERENCES products_commerce (id);