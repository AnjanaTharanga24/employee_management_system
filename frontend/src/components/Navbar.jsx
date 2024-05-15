import React from 'react'
import '../css/navbar.css'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <a className="navbar-brand text-white fs-3 mt-2 mb-2" href="#" style={{marginLeft:"20px"}}>
                    Employee Management
                </a>
               
                  
                    <div className="navbar-nav nv-field fs-3">
                        <a className=" nav-item nav-link active text-white signin" href="#">
                            Sign In
                        </a>
                        <a className="nav-item nav-link text-white" href="/register">
                            Register
                        </a>
                        
                    </div>
            </nav>

        </div>
    )
}
