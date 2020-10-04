import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Contact from './Contact';
import { Delaware, Florida, Georgia, Hawaii, Louisiana, Pennsylvania, RhodeIsland, Utah } from './components/Others';
import { Alabama, Alaska, Arizona, Arkansas } from './components/A-States';
import { California, Colorado, Connecticut } from './components/C-States';
import { Idaho, Illinois, Indiana, Iowa } from './components/I-States';
import { Kansas, Kentucky } from './components/K-States';
import { Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana } from './components/M-States';
import { Nebraska, Nevada, NewHampshire, NewJersey, NewMexico, NewYork, NorthCarolina, NorthDakota } from './components/N-States';
import { Ohio, Oklahoma, Oregon } from './components/O-States';
import { SouthCarolina, SouthDakota } from './components/S-States';
import { Tennessee, Texas } from './components/T-States';
import { Vermont, Virginia } from './components/V-States';
import { Washington, WestVirginia, Wisconsin, Wyoming } from './components/W-States';



function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/Alabama" component={Alabama} />
          <Route path="/Alaska" component={Alaska} />
          <Route path="/Arizona" component={Arizona} />
          <Route path="/Arkansas" component={Arkansas} />
          <Route path="/California" component={California} />
          <Route path="/Colorado" component={Colorado} />
          <Route path="/Connecticut" component={Connecticut} />
          <Route path="/Delaware" component={Delaware} />
          <Route path="/Florida" component={Florida} />
          <Route path="/Georgia" component={Georgia} />
          <Route path="/Hawaii" component={Hawaii} />
          <Route path="/Idaho" component={Idaho} />
          <Route path="/Illinois" component={Illinois} />
          <Route path="/Indiana" component={Indiana} />
          <Route path="/Iowa" component={Iowa} />
          <Route path="/Kansas" component={Kansas} />
          <Route path="/Kentucky" component={Kentucky} />
          <Route path="/Louisiana" component={Louisiana} />
          <Route path="/Maine" component={Maine} />
          <Route path="/Maryland" component={Maryland} />
          <Route path="/Massachusetts" component={Massachusetts} />
          <Route path="/Michigan" component={Michigan} />
          <Route path="/Minnesota" component={Minnesota} />
          <Route path="/Mississippi" component={Mississippi} />
          <Route path="/Missouri" component={Missouri} />
          <Route path="/Montana" component={Montana} />
          <Route path="/Nebraska" component={Nebraska} />
          <Route path="/Nevada" component={Nevada} />
          <Route path="/New_Hampshire" component={NewHampshire} />
          <Route path="/New_Jersey" component={NewJersey} />
          <Route path="/New_Mexico" component={NewMexico} />
          <Route path="/New_York" component={NewYork} />
          <Route path="/North_Carolina" component={NorthCarolina} />
          <Route path="/North_Dakota" component={NorthDakota} />
          <Route path="/Ohio" component={Ohio} />
          <Route path="/Oklahoma" component={Oklahoma} />
          <Route path="/Oregon" component={Oregon} />
          <Route path="/Pennsylvania" component={Pennsylvania} />
          <Route path="/Rhode_Island" component={RhodeIsland} />
          <Route path="/South_Carolina" component={SouthCarolina} />
          <Route path="/South_Dakota" component={SouthDakota} />
          <Route path="/Tennessee" component={Tennessee} />
          <Route path="/Texas" component={Texas} />
          <Route path="/Utah" component={Utah} />
          <Route path="/Vermont" component={Vermont} />
          <Route path="/Virginia" component={Virginia} />
          <Route path="/Washington" component={Washington} />
          <Route path="/West_Virginia" component={WestVirginia} />
          <Route path="/Wisconsin" component={Wisconsin} />
          <Route path="/Wyoming" component={Wyoming} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </>
  )
};

export default App;
