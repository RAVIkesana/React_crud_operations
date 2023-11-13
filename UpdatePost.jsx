import React, { useState,useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import sty from "./nav.module.css"




const UpdatePost = () => {

  const {id}=useParams();
  console.log(id)

  let [values,setValues]=useState({
    name:"",
    email:"",
    password:"",

  })

  let navigate=useNavigate();

  useEffect(()=>{
    axios.get("http://localhost:3000/user/"+id).then(res =>setValues(res.data)).catch(err =>console.log(err))
  },[])
  
 


  let handleUpdate=e=>{
    e.preventDefault();
    console.log(values)
    axios.put("http://localhost:3000/user/"+id,values).then(res=>{
      console.log(res)
      navigate("/allpost")
    },[]
    )
  }



  return (
    <div >
     <h3>updatepost</h3>
      <form onSubmit={handleUpdate}>
       <div className={sty.upcontmain}>
        <div className={sty.upcontsub}>
        <label className={sty.lab} htmlFor="name" id="name">Name :</label>
        <input className={sty.inp} type="text" id="name" name="name" value={values.name} required onChange={e=>setValues({...values,name:e.target.value})}/>
        <label className={sty.lab} htmlFor="email">Email :</label>
        <input className={sty.inp} type="email"  id="email" name="email"  value={values.email} required onChange={e=>setValues({...values,email:e.target.value})}/>
        <label className={sty.lab} htmlFor="pw" >Password :</label>
        <input className={sty.inp} type="password"   id="pw" name="password"  value={values.password} required onChange={e=>setValues({...values,password:e.target.value})}/>
        <button id={sty.bu}>Update</button>
        </div>
      </div>
      </form>
    </div>
  )
}

export default UpdatePost
