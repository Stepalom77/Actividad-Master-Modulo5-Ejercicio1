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

module.exports = {
    getAllEmployees,
  };

  
  
