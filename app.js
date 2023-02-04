require("dotenv").config();
const cookieParser = require('cookie-parser')
const cors = require('cors')
const express = require("express")
const uploadRoute = require("./src/api/routes/upload");
const signupRoutes = require("./src/api/routes/signupRoutes");
const loginRoutes = require("./src/api/routes/loginRoutes");
const createRoutes = require("./src/api/routes/createRoute")
//const { urlencoded } = require("express");
const app = express();
//const format = require('./src/api/services/processImage')

// middleware to handle permisions
app.use(cors());

// Regular middleware to handle json 
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Cookie middleware
app.use(cookieParser())

//Custom middlewares
app.use('/api', signupRoutes);
app.use('/api', loginRoutes);
app.use('/api', createRoutes);
app.use(uploadRoute);

app.listen(3000, ()=> console.log("listening on port 3000"));