import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

function ListItems(props) {
    const[data, setdata]=useState([]);
    const[error,seterror] = useState("");
    
    useEffect(()=>{
      axios.get("/blogs.json")
      .then((res)=>setdata(res.data))
      .catch((error)=>seterror(error.message))
    },[])

  return (
    <div className='cont'>
      {error!==""&&<h2>{error}</h2>}
      {data.map(blog => {
        if (blog.type === props.type) {
          return (
            <>
            
            <NavLink to={`/blog/${blog.title}`} className="linked">
            <div className="list-container" key={blog.id}>
            <div className='blog-content'>
                <h2>{blog.title}</h2><br />
                <p>{blog.content.slice(0, 200) + "..."}</p><br />
                <small>By <b>{blog.author}</b> in <b>{blog.type}</b></small>
              </div>
              <div className="img-title">
                <img src={blog.url} alt={`Blog post about ${blog.title}`} />
                <br />
                <br />
                
              </div>
              
            </div>
            </NavLink>
            </>
          );
        }
        return null; 
      })}
    </div>
  );
}

export default ListItems;
