const {createPool} = require('mysql');

const pool=createPool({
    // host:"localhost",
    // user:"root",
    // password:"root",
    // database:"mydb",
   // connectionLimit:10
    host: "star-project.csrooz3gtrl7.ap-south-1.rds.amazonaws.com",
    user:"star_project",
    password:"7Iy1wf6AyBh5SrXHDsXC",
    database:"timesheet",
})
pool.query(`select * from users where role="Admin"`,(err,result,fields)=>{
    if(err){
        return console.log(err);
    }
    return console.log(result);
})

// const express = require("express");
// const app = express();
// const mysql = require('mysql');

// const connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : 'root',
//   database : 'mydb'
// });

// connection.connect((err) => {
//     if(err) throw err;
//     console.log('Connected to MySQL Server!');
// });

// app.get("/",(req,res) => {
//     connection.query('SELECT * from user LIMIT 1', (err, rows) => {
//         if(err) throw err;
//         console.log('The data from user table are: \n', rows);
//         connection.end();
//     });
// });

// app.listen(3000, () => {
//     console.log('Server is running at port 3000');
// });