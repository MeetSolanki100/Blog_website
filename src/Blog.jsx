import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

function Blog() {
    const[data, setdata]=useState([]);
    const[error,seterror] = useState("");
    
    useEffect(()=>{
      axios.get("/blogs.json")
      .then((res)=>setdata(res.data))
      .catch((error)=>seterror(error.message))
    },[])
  const idno = useParams();
  console.log({idno})
  return(
  <div>
  {error!==""&&<h2>{error}</h2>}
  {data.map(blog=>{
    if(blog.title==idno.id){
      return(
        <>
        <div className="blog">
          <div className="img-blog">
            <img src={blog.url} alt={`Blog post about ${blog.title}`} />
          </div>
          <h2>{blog.title}</h2><br />
          <p>{blog.content}</p>
          
        </div>
        <NavLink to='/' className="linked-return">Return</NavLink>
        </>
      )
    }
  })}
  </div>
  )
}

export default Blog