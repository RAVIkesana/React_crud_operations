import React from 'react'
import style from "./nav.module.css"
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      
        <section className={style.maincon}> 
            <article className={style.subcon}>
                <aside className={style.logo}>
                    <h3 id={style.logoo}>Jspiders</h3>
                </aside>
                <aside className={style.menu}>
                    <NavLink to="/" className={style.link}> Create</NavLink>
                    <NavLink to="/allpost" className={style.link}>Allpost</NavLink>
                    <NavLink to="/updatepost" className={style.link}>Update</NavLink>
                    <NavLink to="/indivudalpost" className={style.link}>individual</NavLink>
                </aside>
            </article>
        </section>
      
    </div>
  )
}

export default Nav
