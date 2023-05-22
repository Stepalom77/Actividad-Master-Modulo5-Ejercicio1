require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8000;

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