// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require("express");
// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());

// Initialize the main project folder
app.use(express.static("website"));

/* Setup Server*/
//Here we set our variable to port 3030.
const port = 3030;

// Create a server with a callback function.
const server = app.listen(port, listening);

// We log the port number to see if it is working.
function listening() {
  console.log(`server is running on localhost: ${port}`);
}

/* HTTP Route*/
//Get request return the projectData object created
app.get("/all", (req, res) => {
  console.log(projectData);
  res.send(projectData);
});

//POST requst add an entry to the project endpoint and executed on the client side as an asynchronous function.
app.post("/", (req, res) => {
  projectData = {
    temperature: req.body.temp,
    date: req.body.date,
    userInput: req.body.feelings,
  };
});

/*** END OF CODE ***/
