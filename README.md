# Weather-Journal App Project

## Description
This project consists of asynchronous web app that uses Web API and user data to dynamically update the UI.

## Author : 
Sayed Mohamed.
 
 ## Requirements:
 1. Create a local server that runs the project using Node.js.
 2. Add a GET route that returns the projectData object in the server code Then, add a POST route that adds incoming data to projectData.
 3. Acquire API credentials from OpenWeatherMap website.
 4. Chain another Promise that makes a POST request to add the API data, as well as data entered by the user, to the app.
 5. Finally, chain another Promise that updates the UI dynamically

## Instructions
This will require modifying the `server.js` file and the `website/app.js` file. You can see `index.html` for element references, and once you are finished with the project steps, you can use `style.css` to style your application to customized perfection.

## Thcnology was used:

### HTML5
### CSS3
### ES6/JS 2015
### Node.js
### Web APIs and Asynchronous Applications

## Setup
To get the project up and running follow the steps below:

1. To set up project environment, make sure that the Node and packages (express, cors and body-parser) installed, and which are used to create the server.

2. After that to start your server, run the command `node server.js` in your terminal

## Development Strategy

* Setting up project environment, making sure Node and packages installed, and included in server.js file.
* Added POST and GET routes to ensure correct retrieval of data from the server.
* Acquired API credentials from OpenWeatherMap website.
* Created async functions to fetch weather data and store it on my local server. 
* Set up a function that updated UI dynamically.

## Some external sources were used, such as:

"https://stackoverflow.com/questions/1643320/get-month-name-from-date"

This article helps me to form month names with a string.