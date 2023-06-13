var mysql = require ('mysql');
var con = mysql.createConnection({
    // host: "star-project.csrooz3gtrl7.ap-south-1.rds.amazonaws.com",
    // user:"star_project",
    // password:"7Iy1wf6AyBh5SrXHDsXC",
    // database:"timesheet",
    host: "localhost",
    user:"root",
    password:"root",
   database:"mydb" , 
});
con.connect(function(err) {
   if(err) throw err;
  console.log("Connected!");
  con.query("SELECT * FROM user ",function(err,result,fields){
    console.log(result);
  })
  });