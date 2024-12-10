import React, { useEffect } from "react";
import "./home.css";

function Home() {
  useEffect(() => {

    async function fetchApidata() {
      const response =await fetch("https://jsonplaceholder.typicode.com/todos");
      const apidata = response.json();
      console.log(apidata);
    }
    fetchApidata()

  },[]);

  return (
    <div>
      <center>
        <h2>Home</h2>
      </center>
    </div>
  );
}
export default Home;
