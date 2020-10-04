// using hooks to make fetch work

import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';

import Navbar from '../Navbar';

export const Alabama = props => {
  let [stateName, setStateName] = useState();
  let [stateFlag, setStateFlag] = useState();
  let [stateCapital, setStateCapital] = useState();
  let [stateCity, setStateCity] = useState();
  let [statePopulation, setStatePopulation] = useState();

  useEffect(() => {
    fetch("https://sampleapis.com/the-states/api/the-states")
      .then((response) => response.json())
      .then((data) => {
        stateName = data[0].name;
        stateFlag = data[0].flag;
        stateCapital = data[0].capital;
        stateCity = data[0].largest_city;
        statePopulation = data[0].population;

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

export const Alaska = () => {
  let [stateName, setStateName] = useState();
  let [stateFlag, setStateFlag] = useState();
  let [stateCapital, setStateCapital] = useState();
  let [stateCity, setStateCity] = useState();
  let [statePopulation, setStatePopulation] = useState();

  useEffect(() => {
    fetch("https://sampleapis.com/the-states/api/the-states")
      .then((response) => response.json())
      .then((data) => {
        stateName = data[1].name;
        stateFlag = data[1].flag;
        stateCapital = data[1].capital;
        stateCity = data[1].largest_city;
        statePopulation = data[1].population;

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

export const Arizona = () => {
  let [stateName, setStateName] = useState();
  let [stateFlag, setStateFlag] = useState();
  let [stateCapital, setStateCapital] = useState();
  let [stateCity, setStateCity] = useState();
  let [statePopulation, setStatePopulation] = useState();

  useEffect(() => {
    fetch("https://sampleapis.com/the-states/api/the-states")
      .then((response) => response.json())
      .then((data) => {
        stateName = data[2].name;
        stateFlag = data[2].flag;
        stateCapital = data[2].capital;
        stateCity = data[2].largest_city;
        statePopulation = data[2].population;

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

export const Arkansas = () => {
  let [stateName, setStateName] = useState();
  let [stateFlag, setStateFlag] = useState();
  let [stateCapital, setStateCapital] = useState();
  let [stateCity, setStateCity] = useState();
  let [statePopulation, setStatePopulation] = useState();

  useEffect(() => {
    fetch("https://sampleapis.com/the-states/api/the-states")
      .then((response) => response.json())
      .then((data) => {
        stateName = data[3].name;
        stateFlag = data[3].flag;
        stateCapital = data[3].capital;
        stateCity = data[3].largest_city;
        statePopulation = data[3].population;

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

