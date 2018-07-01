import React from "react";
import { BrowserRouter as Router, Route, Link, Prompt } from "react-router-dom";
import './Layout.css'
import Health from '../health/health'
const PreventingTransitionsExample = () => (
    <Router>
      <div>

        <div className="header">
            <div className="logo"><div className="preventimg"></div>Prevent</div>
            <div className="login">Have an account? <span>  LOG IN</span></div>
        </div>
        <ul className="Navbar">
            <li><i className="check"></i> <Link   to="/page-one">PERSONAL INFO</Link></li>
            <li><i className="check"></i> <Link   to="/page-two">ELIGIBILITY</Link></li>
            <li><i className="n-check"></i> <Link  to="/">YOUR HEALTH</Link></li>
            <li><i className="n-check"></i> <Link  to="/">COMMITEMENT</Link></li>

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