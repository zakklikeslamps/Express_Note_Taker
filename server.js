//Dependencies 
const express = require('express');
const path = require('path');
const morgan = require("morgan");
const app = express();

//Access PORT
const PORT = process.env.PORT || 3000;

//Sets Express to manage data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static("public"));

//Router
require('./routes/api')(app);
require('./routes/html')(app);

//Listener
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`)
});