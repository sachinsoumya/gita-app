import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'


export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-warning-subtle fixed-top">
                <div className="container-fluid">
                    <div className="navbar-brand" ><NavLink className="nav-link" to='/'> <i className="fas fa-om fs-3"></i></NavLink></div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">

                            <li className="nav-item">
                                <NavLink className="nav-link" to='/'> Home</NavLink>
                            </li>


                            <li className="nav-item">
                                <NavLink className="nav-link" to='/about'> About </NavLink>
                            </li>

                            <li className='nav-item'>
                                <NavLink className="nav-link" to='/quote'> Quotes </NavLink>

                            </li>

                            <li className='nav-item'>
                                <NavLink className="nav-link" to='/special'> Slok of the day </NavLink>

                            </li>




                        </ul>
                    </div>
                </div>
            </nav>


        </div>
    )
}
