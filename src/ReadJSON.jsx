import React,{useEffect,useState} from 'react'
import axios from 'axios'


function ReadJSON() {
    const[data,setdata]= useState([]);
    const[error,seterror] = useState("");

    useEffect(()=>{
        axios.get("/blogs.json")
        .then((res)=>{setdata(res.data)})
        .catch((err) =>{seterror(err.message)})
    },[])
  return (
    
    <div>

        {data.map((blog)=>{
            const{id,title,content} = blog;
            return(
                <div key={id}className="hhe">
                    <h2>{title}</h2>
                    <p>{content}</p>
                    <br />
                </div>
            );
            
        })}
    </div>
  )
}

export default ReadJSON