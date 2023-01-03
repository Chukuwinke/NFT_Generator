require("dotenv").config();
const cors = require('cors')
const express = require("express")
const uploadRoute = require("./src/api/routes/upload")
const app = express();
//const format = require('./src/api/services/processImage')

app.use(cors())
app.use(uploadRoute);

app.listen(3000, ()=> console.log("listening on port 3000"));