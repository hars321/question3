import React, { Component } from 'react';
import './Web.css'

class App extends Component{
    submit=()=>{
        var name=document.getElementById('name');
        var password=document.getElementById('password');
        content=JSON.stringify({
            "name":name,
            "password": password
        })
        fetch('https://localhost:8080/login',{
            method:'POST',
            body:content,
            mode: "cors",
            
            headers:{'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':"*"},
            
            }).then((response=>response.json())).then(data=>{

                console.log(data);
                
            })
    }
    
    render(){
        return(
<div class="login-parent ">
    <h1 class="display-4">Login</h1>
        <form >
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="name" aria-describedby="emailHelp"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="password"/>
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button onClick="submit" class="btn btn-primary">Submit</button>
</form>
</div>
)
    }
}
export default App;
