# Object Relational Mapping (ORM)

It is a technique used in creating a "bridge" between object-oriented programs and, in most cases, relational databases. ORM as the layer that connects object-oriented programming (OOP) to relational databases. When interacting with a database using OOP languages, you'll have to perform different operations like creating, reading, updating, and deleting (CRUD) data from a database. By design, you use SQL for performing these operations in relational databases. While using SQL for this purpose isn't necessarily a bad idea, the ORM and ORM tools help simplify the interaction between relational databases and different OOP languages. An example of ORM is Sequelize.

# Object Document Mapping (ODM)

ODM, on the other hand, is an Object Document Mapper, which maps objects with a Document Database like MongoDB. The main difference is that ORM is for MySQL databases, while ODM does the mapping for the document representation of data. An example of ODM is Mongoose.

# Installing Sequelize [ORM] & Sequelize-CLI

```bash
$ npm install sequelize
$ npm install sequelize-cli
```

You'll also have to manually install the driver for your database of choice:

```
# One of the following:
$ npm install pg pg-hstore # Postgres
$ npm install mysql2
$ npm install mariadb
$ npm install sqlite3
$ npm install tedious # Microsoft SQL Server
$ npm install oracledb # Oracle Database
```

In order to initialize Sequelize, we need to run the command npx sequelize init in the directory where we want to initialize the models and in the directory where we want to write the code. Go inside the src folder and execute the command npx sequelize init.

```
$ cd src/
$ npx sequelize init
```

> NPM is a package manager used to install, delete, and update Javascript packages on your machine. NPX is a package executer, and it is used to execute javascript packages directly, without installing them

It will create the following files/folders:

- config.json: This file contains configurations for different environments such as development, test, and production.

- models folder: This folder is used for the structure and the property of DB tables/ collections. It also has a logic to connect to DB. We can also define our triggers and stored procedures in this folder.

- migrations folder: This folder is used to store migration files for managing database schema changes.

- seeders folder: This folder is used to store seed files for populating the database with initial data.

## config.json

The config.json file provides configurations for three environments: development, test, and production. It includes properties such as dialect (the type of database being used), host (the URL of the database server), and database (set the Database name).

- Example

```
{
  "development": {
    "dialect": "mysql",
    "host": "localhost",
    "database": "development_db"
  },
  "test": {
    "dialect": "mysql",
    "host": "localhost",
    "database": "test_db"
  },
  "production": {
    "dialect": "mysql",
    "host": "localhost",
    "database": "production_db"
  }
}

```

**It is recommended to include the config.json file in your .gitignore file to avoid exposing sensitive information.**
