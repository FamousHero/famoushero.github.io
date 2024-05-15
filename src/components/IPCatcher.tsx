'use client';
import React, { useEffect, useState } from 'react'

function IPCatcher() {
  const [IP, setIP] = useState<string>("");

  useEffect(() =>{
    const fetchData = async () =>{
      //Get client ip from ipify.org
      try{  
        const res = await fetch("https://api.ipify.org?format=json");
        const data = await res.json();
        //extract ip from returned json
        console.log(data);
        setIP(oldIP => {return data["ip"]});    
      }
      catch{
        console.log('Promise failed: ip not received')
      }
    }
    fetchData().catch(console.error);
  },[]);
  return (
    <span>{IP}</span>
  )
}

export default IPCatcher