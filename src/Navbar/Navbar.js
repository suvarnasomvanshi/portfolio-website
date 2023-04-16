import React from "react"
import {NavLink} from "react-router-dom"
import "./Navbar.css"

function NavBar(){
    return(
        <>
        <div className="navbar">
              <div className="navbox">
                <NavLink to="/"><span style={{color:"whiteSmoky"}}>Home</span></NavLink>
                <NavLink to="/aboutus">About Me</NavLink>
                <NavLink to="/skills">Skills</NavLink>
                <NavLink to="/projects">Education</NavLink>
                <NavLink to="/resume">Projects</NavLink>
              </div>
            
        </div>
        </>
    )
}
export default NavBar;