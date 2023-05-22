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

const getOldestEmployee = async (req, res) => {
  let employee = null;
  const findOldestEmployee = (employees) => {
    return employees.reduce((oldest, current) => {
      if (current.age > oldest.age) {
        return current;
      } else {
        return oldest;
      }
    });
  };
  try {
      const data = await fs.promises.readFile(employeesFilePath, 'utf8');
      const jsonData = JSON.parse(data);
      employee = findOldestEmployee(jsonData);
  } catch(error) {
      if (!employee) {
          return res.status(404).json({ message: 'No se encontró ningún empleado' });
        } else {
          res.status(400).json({message: 'Huvo un error al tratar de obtener los empleador'})
        }
  }
  console.log(employee)
  return res.status(200).json(employee)
}

const getEmployeeWithPrivileges = async (req, res) => {
  let employees = [];
  const privileges = req.query.user;
  try {
      const data = await fs.promises.readFile(employeesFilePath, 'utf8');
      const jsonData = JSON.parse(data);
      if(privileges === 'true') {
        for(let i in jsonData) {
          if(jsonData[i].privileges == "user") {
            employees.push(jsonData[i])
          }
        }
      }
  } catch(error) {
      if (employees.length === 0) {
          return res.status(404).json({ message: 'No se encontró ningún empleado' });
        } else {
          res.status(400).json({message: 'Huvo un error al tratar de obtener los empleador'})
        }
  }
  console.log(employees)
  return res.status(200).json(employees)
};

const createEmployee = async (req, res) => {
  let employees = [];
  let newEmployee = null;
  try {
      const data = await fs.promises.readFile(employeesFilePath, 'utf8');
      employees = employees = JSON.parse(data);
      newEmployee = req.body;
      employees.push(newEmployee)
  } catch(error) {
      console.error(error);
      if (employees.length === 0) {
          return res.status(404).json({ message: 'No se encontró ningún empleado' });
        } else if (!newEmployee) {
          res.status(400).json({"code": "bad_request"})
        } else {
          res.status(400).json({message: 'Huvo un error al tratar de crear el empleado'})
        }
  }
  return res.status(200).json(employees)
};

const getEmployeeWithBlackBadge = async (req, res) => {
  let employees = [];
  const badges = req.query.badges;
  try {
      const data = await fs.promises.readFile(employeesFilePath, 'utf8');
      const jsonData = JSON.parse(data);
        for(let i in jsonData) {
          if(jsonData[i].badges.includes(badges)) {
            employees.push(jsonData[i])
          }
        }
  } catch(error) {
      if (employees.length === 0) {
          return res.status(404).json({ message: 'No se encontró ningún empleado' });
        } else {
          res.status(400).json({message: 'Huvo un error al tratar de obtener los empleador'})
        }
  }
  console.log(employees)
  return res.status(200).json(employees)
};

const getEmployeeWithName = async (req, res) => {
  let employees = [];
  const name = req.query.name;
  try {
      const data = await fs.promises.readFile(employeesFilePath, 'utf8');
      const jsonData = JSON.parse(data);
        for(let i in jsonData) {
          if(jsonData[i].name === name) {
            employees.push(jsonData[i])
          }
        }
  } catch(error) {
      if (employees.length === 0) {
          return res.status(404).json({ message: 'No se encontró ningún empleado' });
        } else {
          res.status(400).json({message: 'Huvo un error al tratar de obtener los empleador'})
        }
  }
  console.log(employees)
  return res.status(200).json(employees)
};

module.exports = {
    getAllEmployees,
    getEmployeesPageOne,
    getEmployeesPageTwo,
    getEmployeesByPage,
    getOldestEmployee,
    getEmployeeWithPrivileges,
    createEmployee,
    getEmployeeWithBlackBadge,
    getEmployeeWithName
  };

  
  
