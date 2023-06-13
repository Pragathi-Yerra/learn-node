var mysql=require('mysql');
var express=require('express');
const app=express();
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
app.get('/all',(req,res)=>{
    //res.send('Hello World');
    var sql='SELECT username from user';
    con.query(sql,function(err,result){  
        if(err) throw err;
        return res.send(result);
      //  console.log(result);
       // console.log(typeof(result));
    })
})
app.post('/newuser',(req,res)=>{
    var sql='INSERT into user values("mony","mony@incedoinc.com","mony")';
    con.query(sql,function(err,result){
        if(err) throw err;
        res.send("inserted successfully");
      //  console.log(result);
    })
})
app.delete('/deluser',(req,res)=>{
    var sql='delete from user where password="ny"';
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
    var sql='UPDATE user set password= "sony" where username="sony"';
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
app.listen(3000,()=>console.log('Listening on port 300'));
