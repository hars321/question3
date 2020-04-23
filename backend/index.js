const express =require('express');
const app =express();


var name=['hello', 'hi', 'yash', 'rishabh'];
var pass=[123,343,422,4234];



app.get('/',(req,res)=>{
    res.send("hello");
 })
app.post('/login',(req,res)=>{
    var username=req.body.name;
    var userpass=req.body.password;
    for(var i=0;i<name.length;i++){
        if(name[i]==username){
            if(userpass==pass[i]){
                res.status(200).json("success");
            }
        }
        
    }
    res.status(404).json("error");

})
 app.listen(8080,()=>{
    console.log("listening");

 }
     
 )