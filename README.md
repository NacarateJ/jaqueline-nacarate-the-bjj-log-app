# The BJJ LogApp

Is an app designed for Jiu-Jitsers to keep track of the techniques learned in training classes. The old school way to do it is to have a paper notebook and keep a Jiu-Jitsu journal. But who has time for that? Having an app on the phone to fill up with all the information on the go will not only save time but also allow the user to write more precise notes since they can fill it up straight away after finishing the training session. The app also offers the option to upload a short video of the technique learned so the user can always come back and review it.  

- To handle the videos upload I'm using Multer - a node.js middleware for handling multipart/form-data. Once a video is uploaded, the file is saved in a Firebase Store and all the information about the video is saved in MySQL database.

- To stream the videos in the browser I'm using ImageKit - an image management service that provides image optimization and fast CDN (content delivery network )delivery. I configured it to fetch the videos straight from my Firebase Storage.

* To install and run the project you will need to clone or dowload the Front-end file - jaqueline-nacarate-the-bjj-log-app, and the Back-end file - jaqueline-nacarate-the-bjj-log-app-api.
* Run nmp i to download modules needed
* To start the Front-end run npm start
* To start the Back-end run npm run server
* It might ask about the Firebase-Key but just ignore it. Since the Firebase Storage is connected to ImageKit you should be able to have access to the videos I already have on the app.