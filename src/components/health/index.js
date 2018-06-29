import React, { Component } from 'react'
import styled from 'styled-components';

const Title = styled.h2`
    font-size: 1.5em;
    text-align: center;
    color: dark;
`;

const Category = styled.h3`
    font-size: 1.1em;
    text-align: center;
    color: dark;
`;
const Desc = styled.p`
    font-size: 1.5em;
    text-align: center;
    color: grey;
`;
export default class Health extends Component {

  render() {
    return (
        <div className="health">
            <div className="health-up">
                <Title>So far so good. Let's talk about your health</Title>
                <Desc>We use this info to put you in a group with people close to your attributes (weird choice of word).</Desc>
            </div>
            <div className="box clearfix">
                <Category className="pull-left">YOUR GENDER</Category>
                <div className="pull-left content">
                    <span className="FemaleImage"><input type="radio" id="Female"  name="gender" checked/></span>Female
                    <span className="maleImage"></span><input type="radio" id="male" name="gender" /> Male
                </div>
            </div>
            <div className="box clearfix">
                <Category className="pull-left">HEIGHT & WEIGHT</Category>
                <div className="pull-left content">
                    test test
                </div>
            </div>
            <div className="box clearfix">
                <Category className="pull-left">FAMILY HISTORY</Category>
                <div className="pull-left content">
                    test test
                </div>
            </div>
            <div className="box clearfix">
                <Category className="pull-left">ACTIVITY LEVEL</Category>
                <div className="pull-left content">
                    test test
                </div>
            </div>
            <div className="box clearfix">
                <Category className="pull-left">DIABETES</Category>
                <div className="pull-left content">
                    test test
                </div>
            </div>
        </div>
    )
  }
}
