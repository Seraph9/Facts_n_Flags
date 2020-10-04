import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';

import Navbar from '../Navbar';

export const Maine = () => {
    let [stateName, setStateName] = useState();
    let [stateFlag, setStateFlag] = useState();
    let [stateCapital, setStateCapital] = useState();
    let [stateCity, setStateCity] = useState();
    let [statePopulation, setStatePopulation] = useState();

    useEffect(() => {
        fetch("https://sampleapis.com/the-states/api/the-states")
            .then((response) => response.json())
            .then((data) => {
                stateName = data[18].name;
                stateFlag = data[18].flag;
                stateCapital = data[18].capital;
                stateCity = data[18].largest_city;
                statePopulation = data[18].population;

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

export const Maryland = () => {
    let [stateName, setStateName] = useState();
    let [stateFlag, setStateFlag] = useState();
    let [stateCapital, setStateCapital] = useState();
    let [stateCity, setStateCity] = useState();
    let [statePopulation, setStatePopulation] = useState();

    useEffect(() => {
        fetch("https://sampleapis.com/the-states/api/the-states")
            .then((response) => response.json())
            .then((data) => {
                stateName = data[19].name;
                stateFlag = data[19].flag;
                stateCapital = data[19].capital;
                stateCity = data[19].largest_city;
                statePopulation = data[19].population;

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

export const Massachusetts = () => {
    let [stateName, setStateName] = useState();
    let [stateFlag, setStateFlag] = useState();
    let [stateCapital, setStateCapital] = useState();
    let [stateCity, setStateCity] = useState();
    let [statePopulation, setStatePopulation] = useState();

    useEffect(() => {
        fetch("https://sampleapis.com/the-states/api/the-states")
            .then((response) => response.json())
            .then((data) => {
                stateName = data[20].name;
                stateFlag = data[20].flag;
                stateCapital = data[20].capital;
                stateCity = data[20].largest_city;
                statePopulation = data[20].population;

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

export const Michigan = () => {
    let [stateName, setStateName] = useState();
    let [stateFlag, setStateFlag] = useState();
    let [stateCapital, setStateCapital] = useState();
    let [stateCity, setStateCity] = useState();
    let [statePopulation, setStatePopulation] = useState();

    useEffect(() => {
        fetch("https://sampleapis.com/the-states/api/the-states")
            .then((response) => response.json())
            .then((data) => {
                stateName = data[21].name;
                stateFlag = data[21].flag;
                stateCapital = data[21].capital;
                stateCity = data[21].largest_city;
                statePopulation = data[21].population;

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

export const Minnesota = () => {
    let [stateName, setStateName] = useState();
    let [stateFlag, setStateFlag] = useState();
    let [stateCapital, setStateCapital] = useState();
    let [stateCity, setStateCity] = useState();
    let [statePopulation, setStatePopulation] = useState();

    useEffect(() => {
        fetch("https://sampleapis.com/the-states/api/the-states")
            .then((response) => response.json())
            .then((data) => {
                stateName = data[22].name;
                stateFlag = data[22].flag;
                stateCapital = data[22].capital;
                stateCity = data[22].largest_city;
                statePopulation = data[22].population;

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

export const Mississippi = () => {
    let [stateName, setStateName] = useState();
    let [stateFlag, setStateFlag] = useState();
    let [stateCapital, setStateCapital] = useState();
    let [stateCity, setStateCity] = useState();
    let [statePopulation, setStatePopulation] = useState();

    useEffect(() => {
        fetch("https://sampleapis.com/the-states/api/the-states")
            .then((response) => response.json())
            .then((data) => {
                stateName = data[23].name;
                stateFlag = data[23].flag;
                stateCapital = data[23].capital;
                stateCity = data[23].largest_city;
                statePopulation = data[23].population;

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

export const Missouri = () => {
    let [stateName, setStateName] = useState();
    let [stateFlag, setStateFlag] = useState();
    let [stateCapital, setStateCapital] = useState();
    let [stateCity, setStateCity] = useState();
    let [statePopulation, setStatePopulation] = useState();

    useEffect(() => {
        fetch("https://sampleapis.com/the-states/api/the-states")
            .then((response) => response.json())
            .then((data) => {
                stateName = data[24].name;
                stateFlag = data[24].flag;
                stateCapital = data[24].capital;
                stateCity = data[24].largest_city;
                statePopulation = data[24].population;

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

export const Montana = () => {
    let [stateName, setStateName] = useState();
    let [stateFlag, setStateFlag] = useState();
    let [stateCapital, setStateCapital] = useState();
    let [stateCity, setStateCity] = useState();
    let [statePopulation, setStatePopulation] = useState();

    useEffect(() => {
        fetch("https://sampleapis.com/the-states/api/the-states")
            .then((response) => response.json())
            .then((data) => {
                stateName = data[25].name;
                stateFlag = data[25].flag;
                stateCapital = data[25].capital;
                stateCity = data[25].largest_city;
                statePopulation = data[25].population;

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