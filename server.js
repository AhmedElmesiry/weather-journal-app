const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');

const port = 8000;

// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes

// Start up an instance of app
const app = express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
app.listen(port, function(){
    console.log(`Server running on: http://localhost:${port}`)
});


//get data
app.get('/getAll', function(req,res){
    res.status(200).send(projectData);
})

//post data
app.post('/dataAdd', function(req,res){
    projectData=req.body;
    res.status(200).send(projectData);
    console.log(projectData);

})
