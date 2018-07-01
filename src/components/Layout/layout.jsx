import React from "react";
import { BrowserRouter as Router, Route, Link, Prompt } from "react-router-dom";
import './Layout.css'
import Health from '../health/health'
const PreventingTransitionsExample = () => (
    <Router>
      <div>
        <ul className="Navbar">
            <li><i ></i> <Link   to="/page-one">PERSONAL INFO</Link></li>
            <li> <Link   to="/page-two">ELIGIBILITY</Link></li>
            <li> <Link  to="/">YOUR HEALTH</Link></li>
            <li> <Link  to="/">COMMITEMENT</Link></li>

        </ul>
        <Route path="/" exact default={true} component={Health} />
        <Route path="/page-one" strict component={componentOne} />
        <Route path="/page-two" component={componentTwo}/>
      </div>
  </Router>

);


const componentOne = ()=>{
    return(
        <div>
            one
        </div>
    )
}
const componentTwo = ()=>{
    return(
        <div>
            Two
        </div>
    )
}

export default PreventingTransitionsExample;