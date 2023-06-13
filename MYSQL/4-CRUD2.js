const express = require('express');
const app=express();
var mysql=require('mysql');
var con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'mydb',
})
con.connect(function(err){
    if(err) throw err;
    console.log("connected");
})
const bodyparser=require('body-parser');
const { cookie } = require('express/lib/response');
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

app.get("/all",function(req,res){
    var sql='SELECT * from user';
    con.query(sql,function(err,result){
        res.json(result);
        console.log(result);
    })
})
app.post("/newuser",function(req,res){
    var sql=`INSERT into user values('${req.body.username}','${req.body.email}','${req.body.password}')`;
    con.query(sql,function(err,result){
        if(err) throw err;
        res.send("inserted successfully");
      //  console.log(result);
    })
})
app.delete('/deluser',(req,res)=>{
    var sql=`delete from user where password='${req.body.password}'`;
    con.query(sql,function(err,result){
        if(err) throw err;
        if(result.affectedRows===0){
        res.send("id not found");
        console.log(result);
        }
        else
        {
        res.send("deleted successfully");
        console.log(res)
        }
    })
})
app.put('/updateuser',(req,res)=>{
    var sql=`UPDATE user set password= '${req.body.password}' where username='${req.body.username}'`;
    con.query(sql,function(err,result){
        if(err) throw err;
        if(result.affectedRows===0){
            res.send("id not found");
            console.log(result);
            }
            else
            {
            res.send("updated successfully");
            console.log(res)
            }
    })
})
app.listen(3000,()=>console.log('Listening on port 3000'));
