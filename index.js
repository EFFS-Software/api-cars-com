const express = require ('express');
const app = express();

//middleware
app.use(express.json());

//nuestras rutas o endpoint
const apiCars = require(`./routes/apiCars`);
app.use('/api/cars', apiCars);
app.listen(3000);