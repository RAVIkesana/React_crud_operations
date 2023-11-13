import React, { useState } from 'react'
import style from "./nav.module.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom' 


const CreatePost = () => {
  let[user,setUser]=useState({
    name:"",
    email:"",
    password:""
  })
  const navigate=useNavigate();
  let handleSubmit=(e)=>{
    e.preventDefault();
    console.log(user)
    axios.post(" http://localhost:3000/user" ,user).then(res=>{

    console.log(res)
    navigate("/allpost")

      
    })
  
  }
  


  return (
    <div>CreatePost
      
      <section className={style.mainconcreatepost}>
        <article className={style.subconcreatepost}>
      <form className={style.con} action="" onSubmit={handleSubmit}>
    <lable className={style.lab} htmlFor="name">Name :</lable><br />
    <input className={style.inp} type="text" id="name"  onChange={e=>setUser({...user,name: e.target.value})}/><br />
    <lable className={style.lab} htmlFor="email">Email :</lable><br />
    <input className={style.inp} type="email" id="email" onChange={e=>setUser({...user,email: e.target.value})}/><br />
    <lable className={style.lab} htmlFor="pw">Password :</lable><br />
    <input className={style.inp} type="password" id="pw" onChange={e=>setUser({...user,password: e.target.value})}/><br />
    <button id={style.submit}>Submit</button>
    </form>
    </article>
    </section>

          </div>
  )
}

export default CreatePost
