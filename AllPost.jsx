import React, { useEffect, useState } from 'react'
import axios from 'axios'
import sty from "./nav.module.css"
import { Link } from 'react-router-dom'

const AllPost = () => {

  let [data,setData]=useState([])
  useEffect(()=>{
    

    axios.get("http://localhost:3000/user").then(res=> setData(res.data)).catch(err=> console.log(err))
  },[])

const deletePost=id=>{
  axios.delete("http://localhost:3000/user/"+id);
  window.location.assign("http://localhost:3001/allpost")
}
  return (
  <div>Allpsot
    <div className={sty.allpostcont}>
      <h3>List of users</h3>
      <div >
      <Link to="/">Add</Link>
      </div>
      <div className={sty.allpostsubcon}>
    <table>
      <thead >
        <tr >
          <th className={sty.hadding}>Id</th>
          <th className={sty.hadding}>Name</th>
          <th className={sty.hadding}>Email</th>
          <th className={sty.hadding}>Password</th>
          <th className={sty.hadding}>Action</th>
        </tr>
        </thead>
        <tbody>
        {data.map((da,index)=>(
          <tr key={index}>
          <th>{da.id}</th>
          <th>{da.name}</th>
          <th>{da.email}</th>
          <th>{da.password}</th>
          <th>
           <Link  to={`/indivudalpost/${da.id}`} className={sty.but} >view</Link>
            <Link to={`/updatepost/${da.id}`} className={sty.but}>edit</Link>
            <button className={sty.but} onClick={()=>deletePost(da.id)}>delete</button>
          </th>
        </tr>

        ))}
       
        </tbody>
      
    </table>
      </div>
    </div>
    </div>
  )
}

export default AllPost
