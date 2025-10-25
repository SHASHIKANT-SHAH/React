import Axios from 'axios'
import { useEffect, useState } from 'react';

const baseurl = "https://jsonplaceholder.typicode.com/posts/1"
const baseurl1 = "https://jsonplaceholder.typicode.com/posts"
function Axiosget() {
    const [my_data,setData] = useState([])
    const [posts,setPosts] = useState([])
    useEffect(()=>{
        Axios.get(baseurl).then((response)=>{
            setData(response.data);
        })
        Axios.get(baseurl1).then((response)=>{
            setPosts(response.data);
        })
    })
    return (
        <div>
            <h5>{my_data.id}</h5>
            <h5>{my_data.title}</h5>
            <h5>{my_data.body}</h5>

            {
                posts.map((item) => {
                const {id,title,body} = item
                return (
                    <div key={id}>
                    <h5>{id}</h5>
                    <h5>{title}</h5>
                    <h5>{body}</h5>
                    </div>
                )
            })
            }
            
        </div>
    )
}

export default Axiosget;