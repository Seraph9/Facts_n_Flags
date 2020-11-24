import React from 'react';
import { NavLink } from 'react-router-dom';

function Contact() {
    const contactStyles = {
        container: {
            marginTop: 200,
            textAlign: 'center',
            marginLeft: 'auto',
            marginRight: 'auto'
        },
        icons: {
            fontSize: 100,
            margin: 70,
            padding: 15,
            border: '1px solid black',
            borderRadius: '.3em'
        }
    }
    return (
        <>
            <div style={contactStyles.container}>
                <a href='https://www.linkedin.com/in/abdullah-wafy/' target='__blank'><i style={contactStyles.icons} className="devicon-linkedin-plain-wordmark colored" /></a>
                <a href='https://github.com/Seraph9' target='__blank'><i style={contactStyles.icons} className="devicon-github-plain-wordmark colored" /></a>
            </div>
            <div className="contact-home">
                <NavLink to="/Facts_n_Flags" activeClassName="is-selected" exact={true}>Go back home page!</NavLink>
            </div>
        </>
    )
};

export default Contact;