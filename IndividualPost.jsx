import React, { useEffect, useState } from 'react'
import sty from "./nav.module.css"
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const IndivudalPost = () => {
  const [data,setData]=useState([])
  const {id}=useParams();
  console.log(id);

  useEffect(()=>{
    axios.get("http://localhost:3000/user/"+id).then(res =>setData(res.data)).catch(err =>console.log(err))
  },[])



  return (
    <div>IndividualPost
      <div className={sty.maincontain}> 
      <div className={sty.card}>
      <div className={sty.data}>Name :{data.name}</div>
      <div className={sty.data}>Emailid :{data.email}</div>
      <div className={sty.data}>Password :{data.password}</div>
<div className={sty.mainbut}>
      <Link className={sty.but2} to={`/updatepost/${id}`}>Update</Link>
      <Link className={sty.but2} to="/">Back</Link>
      </div>
    </div>
    </div>
    </div>
  )
}

export default IndivudalPost
