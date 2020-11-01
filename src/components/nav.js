import React from 'react';
import './css/nav.css';
import {Link} from 'react-router-dom';

const nav = () => {

    return (
        <nav className="nav-head"> 
             <Link to={"/Expense"}><li className="nav-list expense">Expense 
             </li>
             </Link>
             <Link to={"/Fastag"}><li className="nav-list expense">Fastag                 
             </li></Link>

             <Link to={"/Diesel"}><li className="nav-list expense">Diesel
             </li></Link>

             <Link to={"/Load"}><li className="nav-list expense">Load
             </li></Link>
             <li className="nav-list">Home</li>
             <h3 className="company">CHITRA COLD TRANSPORTS</h3>
        </nav>
    );
}

export default nav;
