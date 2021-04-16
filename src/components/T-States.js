import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';

import Navbar from '../Navbar';
import { baseURL as URL } from './constants';

export const Tennessee = () => {
    let [stateName, setStateName] = useState();
    let [stateFlag, setStateFlag] = useState();
    let [stateCapital, setStateCapital] = useState();
    let [stateCity, setStateCity] = useState();
    let [statePopulation, setStatePopulation] = useState();

    useEffect(() => {
        fetch(URL)
            .then((response) => response.json())
            .then((data) => {
                stateName = data[41].name;
                stateFlag = data[41].flag;
                stateCapital = data[41].capital;
                stateCity = data[41].largest_city;
                statePopulation = data[41].population;

                setStateName(stateName);
                setStateFlag(stateFlag);
                setStateCapital(stateCapital);
                setStateCity(stateCity);
                setStatePopulation(statePopulation);
            });
    });
    return (
        <>
            <Navbar />
            <h1>The 50 States of USA</h1>
            <table>
                <caption>US State Vital Facts</caption>
                <tr>
                    <th>US State: </th>
                    <th>Capital: </th>
                    <th>Largest City: </th>
                    <th>Population: </th>
                </tr>
                <tr>
                    <td>{stateName}</td>
                    <td>{stateCapital}</td>
                    <td>{stateCity}</td>
                    <td>{statePopulation}</td>
                </tr>
            </table>
            <img alt={stateName} src={stateFlag} className="flag" />
            <div className="home-link">
                <NavLink to="/Facts_n_Flags" activeClassName="is-selected" exact={true}>Go back home page!</NavLink>
            </div>
        </>
    )
};

export const Texas = () => {
    let [stateName, setStateName] = useState();
    let [stateFlag, setStateFlag] = useState();
    let [stateCapital, setStateCapital] = useState();
    let [stateCity, setStateCity] = useState();
    let [statePopulation, setStatePopulation] = useState();

    useEffect(() => {
        fetch(URL)
            .then((response) => response.json())
            .then((data) => {
                stateName = data[42].name;
                stateFlag = data[42].flag;
                stateCapital = data[42].capital;
                stateCity = data[42].largest_city;
                statePopulation = data[42].population;

                setStateName(stateName);
                setStateFlag(stateFlag);
                setStateCapital(stateCapital);
                setStateCity(stateCity);
                setStatePopulation(statePopulation);
            });
    });
    return (
        <>
            <Navbar />
            <h1>The 50 States of USA</h1>
            <table>
                <caption>US State Vital Facts</caption>
                <tr>
                    <th>US State: </th>
                    <th>Capital: </th>
                    <th>Largest City: </th>
                    <th>Population: </th>
                </tr>
                <tr>
                    <td>{stateName}</td>
                    <td>{stateCapital}</td>
                    <td>{stateCity}</td>
                    <td>{statePopulation}</td>
                </tr>
            </table>
            <img alt={stateName} src={stateFlag} className="flag" />
            <div className="home-link">
                <NavLink to="/Facts_n_Flags" activeClassName="is-selected" exact={true}>Go back home page!</NavLink>
            </div>
        </>
    )
};