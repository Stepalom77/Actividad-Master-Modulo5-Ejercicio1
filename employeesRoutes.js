const express = require('express');
const router = express.Router();
const employees = require("./employeesController");

router.get("/employees", employees.getAllEmployees);

module.exports = router;