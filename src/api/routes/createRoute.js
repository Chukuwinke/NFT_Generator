const express = require("express");
const { createProject } = require("../controllers/upload");
const { isLoggedIn } = require("../middlewares/isLoggedin");
const router = express.Router();

router.post('/create', isLoggedIn, createProject)
module.exports = router;