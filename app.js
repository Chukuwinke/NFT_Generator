const express = require("express")
const uploadRoute = require("./src/api/routes/upload")
const app = express();

app.use(uploadRoute);

app.listen(3000, ()=> console.log("listening on port 3000"));