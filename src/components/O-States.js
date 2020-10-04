import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';

import Navbar from '../Navbar';

export const Ohio = props => {
    let [stateName, setStateName] = useState();
    let [stateFlag, setStateFlag] = useState();
    let [stateCapital, setStateCapital] = useState();
    let [stateCity, setStateCity] = useState();
    let [statePopulation, setStatePopulation] = useState();

    useEffect(() => {
        fetch("https://sampleapis.com/the-states/api/the-states")
            .then((response) => response.json())
            .then((data) => {
                stateName = data[34].name;
                stateFlag = data[34].flag;
                stateCapital = data[34].capital;
                stateCity = data[34].largest_city;
                statePopulation = data[34].population;

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

export const Oklahoma = () => {
    let [stateName, setStateName] = useState();
    let [stateFlag, setStateFlag] = useState();
    let [stateCapital, setStateCapital] = useState();
    let [stateCity, setStateCity] = useState();
    let [statePopulation, setStatePopulation] = useState();

    useEffect(() => {
        fetch("https://sampleapis.com/the-states/api/the-states")
            .then((response) => response.json())
            .then((data) => {
                stateName = data[35].name;
                stateFlag = data[35].flag;
                stateCapital = data[35].capital;
                stateCity = data[35].largest_city;
                statePopulation = data[35].population;

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

export const Oregon = () => {
    let [stateName, setStateName] = useState();
    let [stateFlag, setStateFlag] = useState();
    let [stateCapital, setStateCapital] = useState();
    let [stateCity, setStateCity] = useState();
    let [statePopulation, setStatePopulation] = useState();

    useEffect(() => {
        fetch("https://sampleapis.com/the-states/api/the-states")
            .then((response) => response.json())
            .then((data) => {
                stateName = data[36].name;
                stateFlag = data[36].flag;
                stateCapital = data[36].capital;
                stateCity = data[36].largest_city;
                statePopulation = data[36].population;

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
            <img alt={stateName} src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Flag_of_Oregon.svg" className="flag" />
            <div className="home-link">
                <NavLink to="/" activeClassName="is-selected" exact={true}>Go back home page!</NavLink>
            </div>
        </>
    )
};