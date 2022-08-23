import React, { useEffect } from "react";

function Home() {
  useEffect(() => {
    if(!localStorage.getItem("loggedIn")){
      localStorage.setItem("loggedIn", false)
    }
  }, [])
  
}

export default Home;