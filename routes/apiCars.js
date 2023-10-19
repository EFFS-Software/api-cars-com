const express = require (`express`);
const apiCars = express();
const { getCar } = require('../controllers/apiCarsController'); 

apiCars.get( '', getCar);
module.exports = apiCars;