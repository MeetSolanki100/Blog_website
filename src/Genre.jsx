import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Genre() {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [uniqueTypes, setUniqueTypes] = useState([]);

  useEffect(() => {
    axios.get("/blogs.json")
      .then((res) => {
        setData(res.data);
        // Extract unique types using a Set
        const types = new Set(res.data.map(item => item.type));
        setUniqueTypes([...types]);
      })
      .catch((error) => setError(error.message));
  }, []);

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <div className='genre'>
      {uniqueTypes.map(type => (
        <a href={`#${type}` } className='gena'> 
        <div key={type} className='gen'>
           {type}
        </div></a>
       
      ))}
    </div>
  );
}

export default Genre;
