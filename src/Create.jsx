import React from 'react'

function Create() {
  return (
   <div className="create-cont">
    <div>
    <h2>Blog Title:</h2>
    <input type="text" />
    </div>
    <div>
    <h2>insert image url:
    </h2>
    <input type="text" name="" id="" />
    </div>
    <div>
    <h2>Enter Blog:</h2>
    <textarea name="" id="" cols="30" rows="10"></textarea>
    </div>
    <div>
    <h2>Enter type:</h2>
    <input type="url" name="" id="" />
    </div>
    <div>
    <button >Reset</button>
    <button>Post</button>
    </div>
   </div>
  )
}

export default Create