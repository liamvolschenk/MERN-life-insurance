# Life-insurance MERN fullstack application

 ## Table of Contents
  <ul>
    <li><a href="#about">About</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#env-variables">Env variables</a></li>
    <li><a href="#seed-database">Seed Database</a></li>
    <li><a href="#sample-user-logins">Sample User Logins</a></li>
    <li><a href="#technologies">Technologies</a></li>
    <li><a href="#software-requirements">Software Requirements</a></li>
    <li><a href="#stack-choice">Stack Choice</a></li>
    <li><a href="#deployment">Deployment</a></li>
    <li><a href="#styling">Styling</a></li>
    <li><a href="#how-the-app-will-work">How will the app work?</a></li>
    <li><a href="#functional-requirements">Functional Requirements</a></li>
    <li><a href="#non-functional-requirements">Non-functional requirements</a></li>
    <li><a href="#security">Security</a></li>
    <li><a href="#who-will-use-the-application">Who will use the application?</a></li>
    <li><a href="#user-stories">User Stories</a></li>
    <li><a href="#competition">Competition</a></li>
  </ul>


## About

This a full-stack web application that makes use of the MERN stack and JWT for user authorization. This is a mock application for a life-insurance company. Users are able to create their own profile and login. They can then view the contents of the application. An admin is able to login and update, create new and delete life-insurance plans.

## Usage

If you are an end user and would like to view and use the application, please check out the following link:
<a target="_blank" href="#"></a>

If you would like to view and play with the source code please follow the instillation proccess below:

## Installation
To run this code:
* Make sure you are in the root directory

  ```cd simple-life```

* Then run the following to install dependencies and connect to the server:

   ```npm install```

   ```npm start```

* Open a new terminal window and make sure you are in the frontend directory:

   ```cd frontend```

* Then run the following to install dependencies and start the frontend:

   ```npm install```

   ```npm start```

<a name="env-variables"></a>
## Env Variables

In order to safeguard sensitive information and secrets, they have been stored in a .env file which is not a part of this repository

You will then need to create a .env file in the root directory and add the following:

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'yourSecret'
```

If you are the reviewer viewing this project, you can skip creating the .env file if viewing from the original source code.

<a name="seed-database"></a>
## Seed Database

The project makes use of a seeder file to seed some data to the DB if you are playing around with the code. You will need to do this if you want to see some products on the products page when you start the application. You will also need to do this to see the Admin functionality on the application.

Run the following to seed the data to your DB

```
# Import data
npm run data:import
```

Run the following if you would like to remove the seed data from your DB

```
npm run data:destroy
```
<a name="sample-user-logins"></a>
## Sample User Logins

These are the login details from the seeded data from the previous step. The admin has authorization that normal users dont have, so be sure to check out the application logged in as the admin. 

You are also welcome to create your own user profiles and login using them.

```
admin@example.com (Admin)
123456

helen@example.com (Customer)
123456

tom@example.com (Customer)
123456
```


## Technologies

This web app was built using the following technologies:

* MongoDB
* Express
* React.js
* Redux
* Node.js
* JWT 
* React Bootstrap

<a name="software-requirements"></a>
# Software Requirements
<a name="stack-choice"></a>
## Stack Choice
I have chosen to build the application using the **MERN** stack.

I am using this architecture because it will allow for faster and easier development of my full stack application. Using the MERN stack will allow for a smooth development process when building a scalable and dynamic web application. For this project I will be using React.js to build the frontend of my web application. I am using React because it is what I am most comfortable with and I enjoy working the component based nature of the framework. I also know that with React, I am guaranteed high performance for my application. I will be using Node.js and Express.js to build my backend server and I will be connecting it to a MongoDB database. I am confident that using these technologies to create my application will aid in creating a high performing, dynamic web application with the option to scale up in the future.

## Deployment
I will be using **Heroku** to deploy my web application. Heroku handles all of the server side logic, this makes deploying and delivering apps simple and fast, and gives me more time to focus my efforts on the actual application.

## Styling
For this project I will be using **Bootstrap** as well as **CSS** to style my web application. I am using bootstrap because of its “pre-built” components, these make building the frontend so much easier and faster, and they also look great. 

# System Requirements
<a name="how-the-app-will-work"></a>
## How the app will work?
This is a basic app for a life-insurance company. Users will be able to browse the website and see the different life-insurance plans as well as some other basic information. They can also sign up and login to the site to add plans to their cart and purchase them.  An admin will have access to be able to add new plans to the plans page, there will be some CRUD functionality here, as the admin will be able to create, read, update and delete plans as they wish.

<a name="functional-requirements"></a>
## Functional Requirements
* The application should allow users to view and purchase products.
* Users should be able to sign up and login to view their cart and other information specific to them.
* the application should create and store these users in a database.
* An admin should be able to create and add new plans as well edit or delete them.
* The application will create and store these plans/products in a database

<a name="non-functional-requirements"></a>
## Non-Functional Requirements
  ### Usability
* The application must be usable across all operating systems without any bugs or limitations.
* Users must be able to navigate the site easily with little effort. They should not have to spend ages learning how to use the app. It should be straight forward and self explanatory.
* The application must have sufficient documentation.
 ### Reliability
* There should be appropriate responses to errors in the app, this must put users at ease and direct them to where they need to be.
* Errors and processing issues must be logged and recorded and operations put in place as to avoid them in the future.
* The application will be tested by multiple parties to ensure proper functionality.
 ### Performance
* Response times to user operations need to be seamless.
* Users should be informed about performance issues, ie. loading signals when data is loading.
*  The application should be able to handle a large amount of users at any given time.
 ### Security
* The web application will make use of security modules such as ‘Helmet’ to provide a level of security.
* User information and data needs to be kept private and secure.

<a name="who-will-use-the-app"></a>
## Who will use the application?
This application will be used by individuals looking to purchase life-insurance online. They will benefit from using an easy-to-use application to make a sometimes stressful process relatively easy and stress free. 

The application will also be used by an admin who will update and add new plans when necessary, this process should be easy and straightforward for them too.

<a name="user-stories"></a>
## User Stories

* As a user I can create and login to my user account and see the information attached to my account.
* As an admin I can log into my admin account and maintain the products that we have available.
* As a user I want to have a smooth and enjoyable time using the application. I don’t want to be confused when using the application.
* As a user I want to be able to make contact with someone who can assist me with any questions. 
* As an admin I want to have access to analytical data to keep track of which products are selling best.

## Competition

There are many alternatives to my application out there. There are obviously many online life-insurance companies, but my application will take the stress and difficulty out of purchasing life-insurance. For many people, purchasing life-insurance online can be challenging and confusing, even when using the best insurance providers. My application seeks to make the process of purchasing life-insurance an easy and stress-free one. The application will do this by providing a simple and effective user experience. Many online life-insurance web applications are complicated to navigate and you often don’t get the information you are looking for. My application will allow users to navigate the application easily and will allow them to easily see all the necessary information they would need to make an informed decision. In addition, the application will be much more cost-effective to get started with the option to increase the scale when necessary.