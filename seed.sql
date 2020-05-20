USE employees;

INSERT INTO department (name)
VALUES ("Sales", "Engineering", "Finance", "Legal");

INSERT INTO role ("title", "salary", "departament_id")
VALUES ("Engineering", 1000,1)
INSERT INTO role ("title", "salary", "departament_id") 
VALUES ("Legal", 1000,1);  




INSERT INTO employees ("first_name", "last_name,role_id","role_id", "manager_id")
VALUES ("Leo", "Messi", "Engineering", 1, null);
INSERT INTO employees ("first_name", "last_name,role_id","role_id", "manager_id")  
VALUES ("Diego", "Maradona", "Legal", 1, null);
      
      