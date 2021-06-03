const util = require('util');
const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    host: ' ',//enterhost
    user: ' ', //enteruser
    password: ' ',//enterpassword 
    database: ' '//enterschema/databasename
});

pool.getConnection((err, connection) => {
    if(err) 
        console.error("Something went wrong while connecting to the database ... Debug error");
    
    if(connection)
        connection.release();
    return;
});

pool.query = util.promisify(pool.query);

module.exports = pool;
