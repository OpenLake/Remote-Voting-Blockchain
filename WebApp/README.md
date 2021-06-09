# Email-verification

## Introduction
This is a user authentication page made using MERN Stack & Redux.

-You can login with either email or directly with Google account

-In case User comes to the site for the very first time, the he/she should first register and then verify his/her email or directly login with google account.

-You can upadate your Profile, channge your password at your own convenience.


## Installing dependencies
-To install dependencies for **server**, run the following command:
```
npm install
```
OR you can install them individually by using command:
```
npm i express mongoose dotenv cors cookie-parser bcrypt jsonwebtoken cloudinary express-fileupload googleapis node-fetch nodemailer nodemon
```
-To install dependencies for **client**, first change your directory to client `cd client`,then run the following command:
```
npm install
```
OR you can install them individually by using command:
```
npm i axios react-router-dom redux react-redux react-google-login
```

## Setting-up
-Create a Google account

-Connect to your MongoDB

-Get your API keys from Google Cloud services.

-Create a cloudinary account to get your other API keys.

-Now add this information to **.env** file.

-Now go to `client/src/components/body/auth/login.js` file and add your Google client ID over there too.


## Running this App
-To run the client and server concurrently, run the following command:
```
npm run dev
```
-To run express server only, run the following command:
```
npm run server
```
-To run the React client only, run the following command:
```
npm run client
```
The server runs on [http://localhost:5000](http://localhost:5000) & the client runs on [http://localhost:3000](http://localhost:3000)