const pgp = require('pg-promise')();
const user = 'postgres';
const pass = 'Conexion2023#$';
const host = 'localhost';
const dbName = 'postgres'
//const cmdCnx = `postgres://${user}:${pass}@${host}:5432/${dbName}`;
const cmdCnx = `postgres://${user}:${pass}@${host}:5432/${dbName}`;

const db  = pgp(cmdCnx);

db.connect()
  .then( ()=>{
    console.log('Conexión Exitosa!');
  })
  .catch ( (err)=>{
    console.log(`Error de Conexión ${err}`);
  });

module.exports = db;
