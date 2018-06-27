import mysql from 'mysql';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.DB_PORT || 3306;

const conn = mysql.createConnection({
    connectionLimit : 100,
    host            : process.env.DB_HOST,
    user            : process.env.DB_USER,
    password        : process.env.DB_PASS,
    port            : port,
    database        : process.env.DB_NAME,
});

conn.connect((err)=>{
    if(err) throw err
    console.log("Success Connect DB");
})

export default conn;