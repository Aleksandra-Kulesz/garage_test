import React, {Component} from "react";
import {Link} from "react-router-dom";

const Nav = (props) => {
    return (
        <nav>
               <ul className="nav__container">
                   <li className='btn'><Link to='./example'>Edytuj</Link></li>
                   <li className='btn'><Link to='./example'>Powrót</Link></li>
                   <li className='btn'><Link to='./example'>Usuń</Link></li>
               </ul>
        </nav>
    )
};

export {Nav};