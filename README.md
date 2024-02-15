
# NODE Mail Server


#### NOTE: Make sure to have postgreSQL installed adn running before running this app.

This is a simple mail server REST API.


## Installing and running

In order to install this first clone it, then go to the project file and run:

```bash
  npm install 
```


After you can run the following commands to run it

```bash
  npm run build
  npm run start 
```
    
    
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`
On what port the server is running (At the moment it is localhost with the defined port

`DB_HOST`
Hostname of the database

`DB_PORT`
Port of the database 

`DB_USERNAME`
Username to access the database

`DB_PASSWORD`
Password to access the database

`DB_DATABASE`
Database name

`JWT_SECRET`
JWT Secret key

