import Axios from 'axios'
import { useState } from 'react'

function PostAxios() {
   const [my_title,setTitle] = useState()
   const [my_body,setBody] = useState()
   const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("https://68fcdcec96f6ff19b9f68617.mockapi.io/crud", {title:my_title,body:my_body})
    .then((response)=> {
        console.log(response)
    }).catch((error)=>{
        console.log(error)
    })
   }
    return (
        <>
        <form onSubmit={handleSubmit}>
            <label>Enter title:</label>
            <input type="text" name="title" value={my_title} onChange={(e) => setTitle(e.target.value)} />
            <br/>
            <label>Enter body:</label>
            <input type="text" name="body" value={my_body} onChange={(e) => setBody(e.target.value)} />
            <br/>
            <button>Submit</button>
        </form>
        </>
    )
}

export default PostAxios