import React from 'react';
import { NavLink } from 'react-router-dom';

import Header from './Header';
import Navbar from './Navbar';

const Home = () =>
    <>
        <Header />
        <Navbar />
        <ol>
            <li>
                <NavLink to="/Alabama" className="links" activeClassName="is-selected" exact={true}>Alabama</NavLink>
            </li>
            <li>
                <NavLink to="/Alaska" className="links" activeClassName="is-selected" exact={true}>Alaska</NavLink>
            </li>
            <li>
                <NavLink to="/Arizona" className="links" activeClassName="is-selected" exact={true}>Arizona</NavLink>
            </li>
            <li>
                <NavLink to="/Arkansas" className="links" activeClassName="is-selected" exact={true}>Arkansas</NavLink>
            </li>
            <li>
                <NavLink to="/California" className="links" activeClassName="is-selected" exact={true}>California</NavLink>
            </li>
            <li>
                <NavLink to="/Colorado" className="links" activeClassName="is-selected" exact={true}>Colorado</NavLink>
            </li>
            <li>
                <NavLink to="/Connecticut" className="links" activeClassName="is-selected" exact={true}>Connecticut</NavLink>
            </li>
            <li>
                <NavLink to="/Delaware" className="links" activeClassName="is-selected" exact={true}>Delaware</NavLink>
            </li>
            <li>
                <NavLink to="/Florida" className="links" activeClassName="is-selected" exact={true}>Florida</NavLink>
            </li>
            <li>
                <NavLink to="/Georgia" className="links" activeClassName="is-selected" exact={true}>Georgia</NavLink>
            </li>
            <li>
                <NavLink to="/Hawaii" className="links" activeClassName="is-selected" exact={true}>Hawaii</NavLink>
            </li>
            <li>
                <NavLink to="/Idaho" className="links" activeClassName="is-selected" exact={true}>Idaho</NavLink>
            </li>
            <li>
                <NavLink to="/Illinois" className="links" activeClassName="is-selected" exact={true}>Illinois</NavLink>
            </li>
            <li>
                <NavLink to="/Indiana" className="links" activeClassName="is-selected" exact={true}>Indiana</NavLink>
            </li>
            <li>
                <NavLink to="/Iowa" className="links" activeClassName="is-selected" exact={true}>Iowa</NavLink>
            </li>
            <li>
                <NavLink to="/Kansas" className="links" activeClassName="is-selected" exact={true}>Kansas</NavLink>
            </li>
            <li>
                <NavLink to="/Kentucky" className="links" activeClassName="is-selected" exact={true}>Kentucky</NavLink>
            </li>
            <li>
                <NavLink to="/Louisiana" className="links" activeClassName="is-selected" exact={true}>Louisiana</NavLink>
            </li>
            <li>
                <NavLink to="/Maine" className="links" activeClassName="is-selected" exact={true}>Maine</NavLink>
            </li>
            <li>
                <NavLink to="/Maryland" className="links" activeClassName="is-selected" exact={true}>Maryland</NavLink>
            </li>
            <li>
                <NavLink to="/Massachusetts" className="links" activeClassName="is-selected" exact={true}>Massachusetts</NavLink>
            </li>
            <li>
                <NavLink to="/Michigan" className="links" activeClassName="is-selected" exact={true}>Michigan</NavLink>
            </li>
            <li>
                <NavLink to="/Minnesota" className="links" activeClassName="is-selected" exact={true}>Minnesota</NavLink>
            </li>
            <li>
                <NavLink to="/Mississippi" className="links" activeClassName="is-selected" exact={true}>Mississippi</NavLink>
            </li>
            <li>
                <NavLink to="/Missouri" className="links" activeClassName="is-selected" exact={true}>Missouri</NavLink>
            </li>
            <li>
                <NavLink to="/Montana" className="links" activeClassName="is-selected" exact={true}>Montana</NavLink>
            </li>
            <li>
                <NavLink to="/Nebraska" className="links" activeClassName="is-selected" exact={true}>Nebraska</NavLink>
            </li>
            <li>
                <NavLink to="/Nevada" className="links" activeClassName="is-selected" exact={true}>Nevada</NavLink>
            </li>
            <li>
                <NavLink to="/New_Hampshire" className="links" activeClassName="is-selected" exact={true}>New Hampshire</NavLink>
            </li>
            <li>
                <NavLink to="/New_Jersey" className="links" activeClassName="is-selected" exact={true}>New Jersey</NavLink>
            </li>
            <li>
                <NavLink to="/New_Mexico" className="links" activeClassName="is-selected" exact={true}>New Mexico</NavLink>
            </li>
            <li>
                <NavLink to="/New_York" className="links" activeClassName="is-selected" exact={true}>New York</NavLink>
            </li>
            <li>
                <NavLink to="/North_Carolina" className="links" activeClassName="is-selected" exact={true}>North Carolina</NavLink>
            </li>
            <li>
                <NavLink to="/North_Dakota" className="links" activeClassName="is-selected" exact={true}>North Dakota</NavLink>
            </li>
            <li>
                <NavLink to="/Ohio" className="links" activeClassName="is-selected" exact={true}>Ohio</NavLink>
            </li>
            <li>
                <NavLink to="/Oklahoma" className="links" activeClassName="is-selected" exact={true}>Oklahoma</NavLink>
            </li>
            <li>
                <NavLink to="/Oregon" className="links" activeClassName="is-selected" exact={true}>Oregon</NavLink>
            </li>
            <li>
                <NavLink to="/Pennsylvania" className="links" activeClassName="is-selected" exact={true}>Pennsylvania</NavLink>
            </li>
            <li>
                <NavLink to="/Rhode_Island" className="links" activeClassName="is-selected" exact={true}>Rhode Island</NavLink>
            </li>
            <li>
                <NavLink to="/South_Carolina" className="links" activeClassName="is-selected" exact={true}>South Carolina</NavLink>
            </li>
            <li>
                <NavLink to="/South_Dakota" className="links" activeClassName="is-selected" exact={true}>South Dakota</NavLink>
            </li>
            <li>
                <NavLink to="/Tennessee" className="links" activeClassName="is-selected" exact={true}>Tennessee</NavLink>
            </li>
            <li>
                <NavLink to="/Texas" className="links" activeClassName="is-selected" exact={true}>Texas</NavLink>
            </li>
            <li>
                <NavLink to="/Utah" className="links" activeClassName="is-selected" exact={true}>Utah</NavLink>
            </li>
            <li>
                <NavLink to="/Vermont" className="links" activeClassName="is-selected" exact={true}>Vermont</NavLink>
            </li>
            <li>
                <NavLink to="/Virginia" className="links" activeClassName="is-selected" exact={true}>Virginia</NavLink>
            </li>
            <li>
                <NavLink to="/Washington" className="links" activeClassName="is-selected" exact={true}>Washington</NavLink>
            </li>
            <li>
                <NavLink to="/West_Virginia" className="links" activeClassName="is-selected" exact={true}>West Virginia</NavLink>
            </li>
            <li>
                <NavLink to="/Wisconsin" className="links" activeClassName="is-selected" exact={true}>Wisconsin</NavLink>
            </li>
            <li>
                <NavLink to="/Wyoming" className="links" activeClassName="is-selected" exact={true}>Wyoming</NavLink>
            </li>
        </ol>
    </>
    ;

export default Home;