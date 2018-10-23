const request = require('request');
const path = require('path');
const express = require ('express');
const app = express();
// Defines a PORT for the server to listen for requests
const PORT = 8080;


app.use(express.static("app/public"))








//require routes 

require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

// Starts our server on the predefined PORT
app.listen(PORT, function(){
  console.log(`App is now listening on PORT ${PORT}`)
})