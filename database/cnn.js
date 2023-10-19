const pgp = require('pg-promise')();
const user = 'postgres';
const pass = 'Conexion2023#$';
const host = 'localhost';
const port = 5432;
const dbName = 'postgres'
// Codificar la contraseña
const encodedPassword = encodeURIComponent(pass);
const cmdCnx = `postgres://${user}:${encodedPassword}@${host}:${port}/${dbName}`;
const db  = pgp(cmdCnx);

db.connect()
  .then( ()=>{
    console.log('Conexión Exitosa!');
  })
  .catch ( (err)=>{
    console.log(`Error de Conexión ${err}`);
  });
module.exports = db;