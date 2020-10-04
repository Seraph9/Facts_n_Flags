import React from 'react';

import Navbar from './Navbar';

function About() {
    return (
        <div>
            <Navbar />
            <div style={{ margin: 15 }}>
                <h1>Welcome to Facts 'n Flags!</h1>
                <p><em>Facts 'n Flags</em> is a small simple informative and fun application powered by React.js, React Router, React Hooks, CSS Bootstrap 4 and CSS Flexbox. It a website where you decide which of the fifty <em>United States of America</em> you want to learn a little more about. The facts for each state are being fetched by an external API which include: Name of US State, its capital city, its largest city, its population, and its flag displayed in color! Enjoy!</p>
                <footer>Made by Abdullah Ahmad Wafy 2020 CE.</footer>
            </div>
        </div>
    )
};

export default About;