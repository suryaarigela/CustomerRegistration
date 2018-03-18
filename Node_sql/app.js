const express=require('express');
const mysql=require('mysql');
 const app=express();
const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Dharshik243',
    database:'nodesql'
});

app.get("/createDB",(req,res)=>{
    let sql="CREATE DATABASE nodesql";

    db.query(sql,(err,data)=>{
        if(err){
            throw err;
           
        }
        else{
            console.log(data);
            res.send('database created');
        }
    })
})

app.get('/createPostsTable',(req,res)=>{
    let sql='CREATE table posts(id int AUTO_INCREMENT, title varchar(255), body varchar(255), PRIMARY KEY(id))';
    db.query(sql,(err,result)=>{
        if(err){
            throw err;           
        }
        else{
            console.log(result);
            res.send('table created');
        }
    })
});

app.get('/addpost',(req,res)=>{
    let post = {
        title:'title',
        body:'body'
    }
    let sql='INSERT into posts set ?';
    let query=db.query(sql,post,(err,result)=>{
        if(err){
            throw err;
        }
        else{
            console.log(result);
            res.send('posts inserted');
        }
    })
})

app.get('/addpost2',(req,res)=>{
    let post = {
        title:'title2',
        body:'body2'
    }
    let sql='INSERT into posts set ?';
    let query=db.query(sql,post,(err,result)=>{
        if(err){
            throw err;
           
        }
        else{
            console.log(result);
            res.send('posts 2 inserted');
        }
    })
})

app.get('/posts',(req,res)=>{
    let sql="SELECT * FROM POSTS";
    let query=db.query(sql,(err,result)=>{
        if(err){
            throw err;
           
        }
        else{
            console.log(result);
            res.send(result);
        }
    })
})

db.connect((error)=>{
if(error){
   throw error;
}else{
   console.log('connected');
}
});





app.listen(3000,()=>{
console.log("Sever listening on port 3000");
});

