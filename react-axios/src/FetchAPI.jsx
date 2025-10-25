import { useEffect, useState } from "react";

function FetchAPI(){
    const [posts,setPost] = useState([])
    useEffect( () => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
                response.json().then((result)=>{
                    setPost(result)
            })
        })
    })
    return (
        <div>
            {posts.map(pst => {
                return (
                    <>
                    <li>{pst.id}</li>
                    <li>{pst.title}</li>
                    </>
                )
            })}
        </div>
    );
}

export default FetchAPI