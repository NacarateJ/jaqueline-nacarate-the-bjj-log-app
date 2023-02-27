# The BJJ LogApp

Is an app designed for Jiu-Jitsers to keep track of the techniques learned in training classes. The old school way to do it is to have a paper notebook and keep a Jiu-Jitsu journal. But who has time for that? Having an app on the phone to fill up with all the information on the go will not only save time but also allow the user to write more precise notes since they can fill it up straight away after finishing the training session. The app also offers the option to upload a short video of the technique learned so the user can always come back and review it.  

- To handle the videos upload I'm using Multer - a node.js middleware for handling multipart/form-data. Once a video is uploaded, the file is saved in a Firebase Store and all the information about the video is saved in MySQL database.

- To stream the videos in the browser I'm using ImageKit - an image management service that provides image optimization and fast CDN (content delivery network) delivery. I configured it to fetch the videos straight from my Firebase Storage.



## Tech Stack and Tools
* HTML, SASS, JavaScript, React, React Router, Node.js, Express, API's , MySQL, Knex.js, Multer, ImageKit, Firebase, Postman, Axios.

## Installation:
1. To install and run the project you will need to clone or dowload the Front-end file - [jaqueline-nacarate-the-bjj-log-app](https://github.com/NacarateJ/jaqueline-nacarate-the-bjj-log-app), and the Back-end file - [jaqueline-nacarate-the-bjj-log-app-api](https://github.com/NacarateJ/jaqueline-nacarate-the-bjj-log-app-api);
2. Run ```nmp i``` to install all the required packages for the app;
3. To start the Front-end run the command ```npm start```;
4. To start the Back-end run the command ```npm run server```;
5. It might ask about the Firebase-Key but just ignore it. Since the Firebase Storage is connected to ImageKit you should be able to have access to the videos I already have on the app.


## Environment Variables
1. Front-end: <br>
Add the following variables in .env file:

```REACT_APP_API_URL=https://localhost:8080```
  
2. Back-end: <br>
Add the following variables in .env file:

```DB_LOCAL_DBNAME="the-bjj-log-app"```<br>
```DB_LOCAL_USER="YOUR DB USER NAME"```<br>
```DB_LOCAL_PASSWORD="YOUR DB PASSWORD"```<br>
```PORT = 8080```

## To connect to DB and data seeding

To connect the server with the databse we used a SQL query builder, `knex.js`. 

Install knex and Knex Command Line Tool.

To install knex globally on your local computer. Run the command:

```npm install knex -g```

This will allow you to use `knex` as a command line tool that helps you create and manage knex files.

In addition, you will need to also install the knex module locally to use it in this project. Run the command:

```npm install knex --save```

Create a new database named "the-bjj-log-app" on your local machine using the [mysql client tool](https://www.mysqltutorial.org/mysql-create-database/).

Once the database has been created, run the latest migration file to build the database table. Run the command:

```knex migrate:latest```

Once the tables have been created we can seed them to populate the tables with data. Run the command:

```knex seed:run```



PS: The BJJ LogApp is still a work in progress. On the profile page we have full CRUD operations for the videos and the next step is to implemet the same for the users.

## Demo

<div align="center">

https://user-images.githubusercontent.com/114256348/212002779-1df40fb0-a013-402b-ab25-233ebe77ff1e.mp4

  </div>
