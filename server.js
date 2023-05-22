require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require("cors");
const sequelize = require('./models/database');

const app = express();
const PORT = process.env.PORT || 2500;

//Conexión a la base de datos SQLite
sequelize.authenticate().then(() => {
    console.log('Conexión a la base de datos establecido');
  }).catch(err => {
    console.error('Huvo un error al tratar de conectarse a la bae de datos:', err);
  });
  
  sequelize.sync({ alter: true }).then(() => {
    console.log('Base de datos y tablas creadas satisfactoriamente');
  }).catch(err => {
    console.error('No fue posible sincronizarse con la base de datos:', err);
  });

//Middlewares
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

//Rutas
app.get('/', (req, res) => {
    res.send('Servidor en linea');
})

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto: ${PORT}`))