### SCHEMA


-- drop any database with the same name 
DROP DATABASE IF EXISTS burgers_db;

-- create a new DB named burgers_db
CREATE DATABASE burgers_db;

-- use the burgers_db DB
USE burgers_db;


-- create a table in burgers_db named burgers 
-- AND holds burger ID, burger name and if it has been eaten or not

CREATE TABLE burgers (
id INT AUTO_INCREMENT NOT NULL,
burger_name VARCHAR(100),
devoured BOOLEAN,
PRIMARY KEY(id)
);