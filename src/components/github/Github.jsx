import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {
    const data=useLoaderData();
    // const [data, setData] = useState()
    // useEffect(() => {
    //     fetch("https://api.github.com/users/akanxikushwaha")
    //     .then(res => res.json())
    //     .then(res => setData(res.followers));
    // })
    
  return (
    <div>
      followers: {data.followers} 
    </div>
  )
}

export const fetchCall= async()=>{
    const res = await fetch("https://api.github.com/users/akanxikushwaha")
    return res.json();
};
    
export default Github
