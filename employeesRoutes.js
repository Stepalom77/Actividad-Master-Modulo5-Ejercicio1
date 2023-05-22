const express = require('express');
const router = express.Router();
const employees = require("./employeesController");

router.get("/employees", employees.getAllEmployees);
router.get("/employees/page-one", employees.getEmployeesPageOne);
router.get("/employees/page-two", employees.getEmployeesPageTwo);
router.get("/employees/page", employees.getEmployeesByPage);

module.exports = router;