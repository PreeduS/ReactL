import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom';

//Routes
import Home from '../../routes/Home';
import Page1 from '../../routes/Page1';
import Basics from '../../routes/Basics';
import StateEx from '../../routes/StateEx';
import PropsEx from '../../routes/PropsEx';
import outerChildParent from '../../routes/ChildParent';
import FormRef from '../../routes/FormRef';


//Styles
require('./RouterNav.scss');


const RouterNav = () =>(
  <Router>
        <div >
       
          <div id = "RouterNav">
            <NavLink exact activeClassName = "routeActive" to="/Home" >Home</NavLink>
            <NavLink activeClassName = "routeActive" to="/Page1" >Page1</NavLink>    
            <NavLink activeClassName = "routeActive" to="/Basics" >Basics</NavLink>    
            <NavLink activeClassName = "routeActive" to="/StateEx" >StateEx</NavLink>    
            <NavLink activeClassName = "routeActive" to="/PropsEx" >PropsEx</NavLink>    
            <NavLink activeClassName = "routeActive" to="/outerChildParent" >outerChildParent</NavLink>  
            <NavLink activeClassName = "routeActive" to="/FormRef" >FormRef</NavLink>  
          </div>

          <div id = "MainView">
            <Switch>   
              <Route path="/home" component = {Home} />
              <Route path="/Page1" component = {Page1} />
              <Route path="/Basics" component = {Basics} />
              <Route path="/StateEx" component = {StateEx} />
              <Route path="/PropsEx" component = {PropsEx} />
              <Route path="/outerChildParent" component = {outerChildParent} />
              <Route path="/FormRef" component = {FormRef} />
              <Route render = { () => <b>404 Not found.</b> }  />

            </Switch>   

          </div>
          
        </div>

      </Router>
);

export default RouterNav;