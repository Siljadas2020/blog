import React, { useEffect,useState } from "react";
import axios from "axios";

function FetchData() {
    const [data, setData] = useState([])
    useEffect(() =>  {
        axios.get("https://jsonplaceholder.typicode.com/posts")
       .then(res => setData(res.data))
       .catch(err => console.log(err))
    },[])

    return(
        <div  className="table">
            <table >
              <thead>
        
              <th>userId</th>
              <th>id</th>
              <th>TITLE</th>
              <th>BODY</th>
    
              </thead>
            <tbody >
        {
            data.map((user,index) => {
                return(
                    <tr key={index}>
                        <td>{user.userId}</td>
                        <td>{user.id}</td>
                        <td>{user.title}</td>
                        <td>{user.body}</td>
                    </tr>
                )
            })
        }
             </tbody >
              </table>
        
              </div>
    )
}

export default FetchData;