import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';

import Navbar from '../Navbar';

export const SouthCarolina = () => {
    let [stateName, setStateName] = useState();
    let [stateFlag, setStateFlag] = useState();
    let [stateCapital, setStateCapital] = useState();
    let [stateCity, setStateCity] = useState();
    let [statePopulation, setStatePopulation] = useState();

    useEffect(() => {
        fetch("https://sampleapis.com/the-states/api/the-states")
            .then((response) => response.json())
            .then((data) => {
                stateName = data[39].name;
                stateFlag = data[39].flag;
                stateCapital = data[39].capital;
                stateCity = data[39].largest_city;
                statePopulation = data[39].population;

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
                <NavLink to="/" activeClassName="is-selected" exact={true}>Go back home page!</NavLink>
            </div>
        </>
    )
};

export const SouthDakota = () => {
    let [stateName, setStateName] = useState();
    let [stateFlag, setStateFlag] = useState();
    let [stateCapital, setStateCapital] = useState();
    let [stateCity, setStateCity] = useState();
    let [statePopulation, setStatePopulation] = useState();

    useEffect(() => {
        fetch("https://sampleapis.com/the-states/api/the-states")
            .then((response) => response.json())
            .then((data) => {
                stateName = data[40].name;
                stateFlag = data[40].flag;
                stateCapital = data[40].capital;
                stateCity = data[40].largest_city;
                statePopulation = data[40].population;

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
                <NavLink to="/" activeClassName="is-selected" exact={true}>Go back home page!</NavLink>
            </div>
        </>
    )
};
