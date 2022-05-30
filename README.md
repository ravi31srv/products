NestJs application with product details which allows to add new product and get list of product.

db setup : 
   ==> create postgress database named 'product.
   ==> create new table named 'product' using this query :
    
       CREATE TABLE products (
	         id serial PRIMARY KEY,
	         name VARCHAR ( 50 ) NOT NULL,
	         description VARCHAR ( 50 ) NOT NULL,
	         brand VARCHAR ( 50 ) NOT NULL,
	         tags TEXT[] NOT NULL,
	         category VARCHAR ( 50) NOT NULL,
	         created_at TIMESTAMP NOT NULL);
           
           
   after clone:
   1. npm install
   2. npm start
   3. open postman  => 
      - go to 'localhost:3000/v1/products/add-product' with method type POST
      - use this body to add product in database
      - {
    	 "name": "A-one shirt",
    	"description": "A-one high quality shirt",
    	"brand": "xyz",
    	"tags": ["pink", "red", "blue"],
    	"category": "formal"
	}
 4. in postman go to 'localhost:3000/v1/products/items-by-category?category=formal&pageNo=1&pageSize=1'	with method type GET
    here 3 query params are following
       1. category
       2. pageNo
       3. pageSize

	
       
       
      
           
