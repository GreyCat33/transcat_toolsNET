
--Create the TestDB2 database
CREATE DATABASE TestDB;

--Switch to the new DB
USE TestDB2;

--Create the Users Table
CREATE TABLE dbo.Users (
	Id	INT		IDENTITY(1,1) PRIMARY KEY,
	firstname TEXT NOT NULL,
	lastname TEXT NOT NULL,
	phonenumber TEXT NOT NULL,
	email TEXT NOT NULL,
	role TEXT NOT NULL
);

--Insert some Data into 
INSERT INTO dbo.Users (firstname,lastname,phonenumber,email, role)
VALUES
('Diana','DelaRosa','1234567890','diana.delarosa@transcat.com', 'user'),
('Matthew','DeClairemont','1234567890','matthew.declairemont@transcat.com', 'user'),
('admin','Null','1234567890','admin@transcat.com', 'user'),
('benjamin','cotas','1234567890','benjamin.cotas@transcat.com', 'user');

--Create the ApplicationUsers table for auth0
CREATE TABLE dbo.ApplicationUsers (
	Id	INT		IDENTITY(1,1) PRIMARY KEY,
	OktaUserId NVARCHAR(200)  NULL,
	Email NVARCHAR(256) NULL,
	Name NVARCHAR(256) NULL,
	Roles NVARCHAR(MAX) NULL,
	UpdatedAt DATETIME2(7) NOT NULL
);

--Let's create the placeholder DBs, this is for later 

--Create the Pricing DB that will be migrated later
CREATE DATABASE Pricing2;

USE Pricing2;

--Create the category option translation table
--Created a placeholder
--#1
CREATE TABLE dbo.category_option_translation (
	Id	INT		IDENTITY(1,1) PRIMARY KEY,
	Holder1 TEXT NULL,
	
);

--Creating a placeholder value
INSERT INTO dbo.category_option_translation (Holder1)
VALUES
('Placeholder for category option translation');


--Create the category service category translation
--Created a placeholder
--#2
CREATE TABLE dbo.service_category_translation (
	Id	INT		IDENTITY(1,1) PRIMARY KEY,
	Holder1 TEXT NULL,
	
);

--Creating a placeholder value
INSERT INTO dbo.service_category_translation (Holder1)
VALUES
('Placeholder for service category translation');



--Create the category service item disabled service level
--Created a placeholder
--#3
CREATE TABLE dbo.service_item_disabled_service_level (
	Id	INT		IDENTITY(1,1) PRIMARY KEY,
	Holder1 TEXT NULL,
	
);

--Creating a placeholder value
INSERT INTO dbo.service_item_disabled_service_level(Holder1)
VALUES
('Placeholder for service item disabled service level');


--Create the category service item option translation
--Created a placeholder
--#4
CREATE TABLE dbo.service_item_option_translation (
	Id	INT		IDENTITY(1,1) PRIMARY KEY,
	Holder1 TEXT NULL,
	
);

--Creating a placeholder value
INSERT INTO dbo.service_item_option_translation (Holder1)
VALUES
('Placeholder for service item option translation');


--Create the category service items translation
--Created a placeholder
--#5
CREATE TABLE dbo.service_items_translation (
	Id	INT		IDENTITY(1,1) PRIMARY KEY,
	Holder1 TEXT NULL,
	
);

--Creating a placeholder value
INSERT INTO dbo.service_items_translation (Holder1)
VALUES
('Placeholder for service items translation');