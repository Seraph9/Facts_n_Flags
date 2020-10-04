import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <a className='navbar-brand' href='/about'>FACTS 'N FLAGS</a>
            <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNavAltMarkup' aria-controls='navbarNavAltMarkup' aria-expanded='false' aria-label='Toggle navigation'>
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
                <div className='navbar-nav'>
                    <a className='nav-link active' href='/Facts_n_Flags'>Home <span className='sr-only'>(current)</span></a>
                    <NavLink to="/about" className="navlinks" activeClassName="is-selected" exact={true}>About</NavLink>
                    <NavLink to="/contact" className="navlinks" activeClassName="is-selected" exact={true}>Contact</NavLink>
                    {/* <a className='nav-link' href='/about'>About</a>
                    <a className='nav-link' href='/contact'>Contact</a> */}
                </div>
            </div>
        </nav>
    )
};

export default Navbar;