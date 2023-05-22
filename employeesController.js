const fs = require('fs');
const path = require('path');

const employeesFilePath = path.join(__dirname, 'employees.json');

const getAllEmployees = async (req, res) => {
    let employees = [];
    try {
        const data = await fs.promises.readFile(employeesFilePath, 'utf8');
        employees = JSON.parse(data);
    } catch(error) {
        console.error(error);
        if (employees.length === 0) {
            return res.status(404).json({ message: 'No se encontró ningún empleado' });
          } else {
            res.status(400).json({message: 'Huvo un error al tratar de obtener los empleador'})
          }
    }
    return res.status(200).json(employees)
  };

const getEmployeesPageOne = async (req, res) => {
    let employees = [];
    const page = parseInt(req.query.page);
    try {
        const data = await fs.promises.readFile(employeesFilePath, 'utf8');
        const jsonData = JSON.parse(data);
        for(let i = 0; i <= page ; i++) {
            employees.push(jsonData[i])
        }
    } catch(error) {
        console.error(error);
        if (employees.length === 0) {
            return res.status(404).json({ message: 'No se encontró ningún empleado' });
          } else {
            res.status(400).json({message: 'Huvo un error al tratar de obtener los empleador'})
          }
    }
    return res.status(200).json(employees)
}

const getEmployeesPageTwo = async (req, res) => {
  let employees = [];
  const page = parseInt(req.query.page);
  try {
      const data = await fs.promises.readFile(employeesFilePath, 'utf8');
      const jsonData = JSON.parse(data);
      for(let i = 0; i <= page ; i++) {
          employees.push(jsonData[i])
      }
  } catch(error) {
      console.error(error);
      if (employees.length === 0) {
          return res.status(404).json({ message: 'No se encontró ningún empleado' });
        } else {
          res.status(400).json({message: 'Huvo un error al tratar de obtener los empleador'})
        }
  }
  return res.status(200).json(employees)
}

const getEmployeesByPage = async (req, res) => {
  let employees = [];
  const firstPage =  (2 * (parseInt(req.query.page) - 1));
  const lastPage = (2 * (parseInt(req.query.page) - 1)) + 1;
  try {
    console.log(firstPage);
    console.log(lastPage);
      const data = await fs.promises.readFile(employeesFilePath, 'utf8');
      const jsonData = JSON.parse(data);
      for(let i = firstPage -1; i <= lastPage ; i++) {
          employees.push(jsonData[i])
      }
  } catch(error) {
      console.error(error);
      if (employees.length === 0) {
          return res.status(404).json({ message: 'No se encontró ningún empleado' });
        } else {
          res.status(400).json({message: 'Huvo un error al tratar de obtener los empleador'})
        }
  }
  return res.status(200).json(employees)
}

module.exports = {
    getAllEmployees,
    getEmployeesPageOne,
    getEmployeesPageTwo,
    getEmployeesByPage
  };

  
  
