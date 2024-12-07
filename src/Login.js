import { useState } from "react"

function Login(){

 const[name, setName]= useState("")
 const[pwd,setPwd]=useState("")

function handleLogin(e){
   
 console.log(e)

}

 return(
   
    <div className="row">
     <div className="column1">
            <div className="img">
            <img src="bird.png"/>
            <h2>Hash Tech</h2>
            <p>Powered by C# accedamy</p>
            </div>
        
     </div>

     <div className="column2">
        
        <div className="form-container">
            <h3>Login Form</h3> 
           <div className="input-box">
            <input type="text" name="username" placeholder="User Name" value={name} onChange={e=>setName(e.target.value)}/>
           </div>

           <div className="input-box">
            <input type="password" name="password" placeholder="Password" value={pwd} onChange={e=>setPwd(e.target.value)}/>
           </div>
           <p>Forget password?</p>
           
           <button type="button" className="login-button" onClick={e=>handleLogin(e)}>Login</button>
           <button type="button" className="signup-button">SIgnup</button>
           <div>
           <h2>{name}</h2>
            <h2>{pwd}</h2> 
            
                      
         </div>            
        </div>

     </div>
 
    </div>
   

 )


}
export default Login