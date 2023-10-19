const db = require('../database/cnn');

const getCar = async (req, res)=>{
  let cmdSQL = 'select *from tbl_cars';
  const result = await db.query(cmdSQL);
  res.json(result);
}
module.exports = {
  getCar
}