# 💻remoteVotingBlockchainWebsite

A login and registration portal created for Remote-Voting-Blockchain Project using express.

## ✨Getting Started

Create a virtual environment and then clone this repositary. Open terminal in the cloned project location.

## 🔗Dependencies

Run the following commands to set-up this portal on your PC.

For installing all dependancies at once: 
```
npm install
```
Or you can install them individually:

```
sudo npm install express express-session mysql pug-cli bcrypt util.promisify
```

## 😀Start Application

After all dependencies are successfully installed, run the followind command:
```
node app
```

## 📄Database

This application has MySQL database integrated in the backend, so inorder to configure database correctly go to core/pool.js and make changes in the following:
```
    host: ' ',//enterhost, if running on your PC, enter localhost in the hostname
    user: ' ', //enteruser
    password: ' ',//enterpassword 
    database: ' '//enterschema/databasename
  ```
 After creating your database, create a table named 'users'.
 
 ## 📑Setting up the Database
 
Enter the following queries in MySQL command prompt:
 ```
CREATE DATABASE nameofyourdatabase;
```
```
USE nameofyourdatabase;
```
```
CREATE TABLE users (id int AUTO_INCREMENT, username varchar(50) NOT NULL UNIQUE, fullname varchar(50) NOT NULL, email varchar(50) NOT NULL UNIQUE, password varchar(128) NOT NULL, modified_on TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, PRIMARY KEY (id));
```
Here 'modified_on' column tells about the time when a particular user registers. If you are running it on localhost, the timestamp would be according the time shown on your local machine.
If everything is correctly configured i.e. you don't get any errors, then you are good to go :)
