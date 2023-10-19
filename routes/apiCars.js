const express = require (`express`);
const apiCars = express();
const db = require('../database/cnn');

apiCars.get( '', async (req, res)=>{
  let cmdSQL = 'select *from tbl_cars';
  const result = await db.query(cmdSQL);
  res.json(result);
});

module.exports = apiCars;