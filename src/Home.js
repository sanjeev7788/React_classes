import React, { useEffect, useState } from "react";
import "./home.css";

function Home() {

    const[data,setData]=useState([])

    useEffect(() => {

    async function fetchApidata() {
     
    try{
        const response =await fetch("https://jsonplaceholder.typicode.com/todos/");
        const apidata = await response.json();
        setData(apidata)

    }catch(err){

        console.log(err)
    }
   }
    fetchApidata()

  },[]);

  return (
    <div>
      <center>
        <h2>Home</h2>
       
            
          <table>    
          <tr>
            <th>Userid</th>
            <th>title</th>
           </tr>
          {
          data.map(data=>(
            
                <tr>
                  <td>{data.id}</td>
                  <td>{data.title}</td>
                </tr>
               ))
              }
            </table>
            </center>
       
    </div>
  );
}
export default Home;
