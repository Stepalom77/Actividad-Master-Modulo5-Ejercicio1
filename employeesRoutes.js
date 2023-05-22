const express = require('express');
const router = express.Router();
const employees = require("./employeesController");

router.get("/employees", employees.getAllEmployees);
router.get("/employees/page-one", employees.getEmployeesPageOne);
router.get("/employees/page-two", employees.getEmployeesPageTwo);
router.get("/employees/page", employees.getEmployeesByPage);
router.get("/employees/oldest", employees.getOldestEmployee);
router.get("/employees/privileges", employees.getEmployeeWithPrivileges);
router.get("/employees/badges", employees.getEmployeeWithBlackBadge);
router.get("/employees/name", employees.getEmployeeWithName);
router.post("/employees", employees.createEmployee);

module.exports = router;