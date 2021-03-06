import React, { Component } from 'react'
import styled from 'styled-components'

const Title = styled.h2`
    font-size: 1.5em;
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
    margin:8px 0;
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
                <div className="pull-left content gender">
                    <div class="cc-selector">

                        <div className="c-female">
                            <input id="Female" type="radio" name="Gender" value="Female"checked />
                            <span class="drinkcard-cc Female" for="Female"></span> 
                            <p>Female</p>
                        </div>

                        <div className="c-male">
                            <input id="Male" type="radio" name="Gender" value="Male" />
                            <span class="drinkcard-cc Male" for="Male"></span>
                            <p>Male</p>
                        </div>

                    </div>
                </div>
            </div>
            <div className="box clearfix">
                <Category className="pull-left">HEIGHT & WEIGHT</Category>
                <div className="pull-left content mesure">
                    <input className="metre" type="text" name="metre"/><p>ft.</p>
                    <input className="centimetre" type="text"  name="centimetre"/><p>in.</p>
                    <input className="weight" type="text" name="weight"/><p>lbs.</p>
                </div>
            </div>
            <div className="box clearfix">
                <Category className="pull-left">FAMILY HISTORY</Category>
                <div className="pull-left content">
                    <Title>Anyone in your family have prediabetes?</Title>
                    <Desc>check all that aply.and if you would rather not say,that's okay</Desc>

                <div className="f-h">
                    <label class="container">
                        <input type="checkbox" checked="checked"/>
                        <span class="checkmark"></span>
                        <p>Parent</p>
                    </label>
                    <label class="container">
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                        <p>Sibling</p>
                    </label>
                </div>

                </div>
            </div>
            <div className="box clearfix">
                <Category className="pull-left">ACTIVITY LEVEL</Category>
                <div className="pull-left content">
                   <Title>How active are you on a weekly basis?</Title>
                   <div className="activity-left">
                   <label class="c-couch diabetes">

                        <input type="radio" name="activity"  />
                        <span class="checkmark"></span>

                    <div class="cc-selector test">
                        <input id="else" type="radio" name="active" value="notVeryActive"  />
                        <label class="drinkcard-cc Couch" for="else"></label>
                        <h6>Not very active</h6>
                        <p>less than 60 minutes of physical activity per week</p>
                    </div>                    
                    </label>

                    <label class="c-byke diabetes">

                        <input type="radio" name="activity" checked />
                        <span class="checkmark"></span>

                    <div class="cc-selector test">
                        <input id="Byke" type="radio" name="active" value="active" checked />
                        <label class="drinkcard-cc Byke" for="Byke"></label>
                        
                        <h6>active</h6>
                        <p>60+ minutes of physical activity per week</p>
                    </div>
                    </label>
                   
                   </div>
                   
                </div>
            </div>
            <div className="box clearfix">
                <Category className="pull-left">DIABETES</Category>
                <div className="pull-left content">
                    <Title>Have you been diagnosed with diabetes before?</Title>
                    <label class="diabetes">
                        <input type="radio" name="diabetes" checked />
                        <span class="checkmark"></span>
                        Pre-diabetes
                    </label>
                    <label class="diabetes">
                        <input type="radio" name="diabetes" />
                        <span class="checkmark"></span>
                        Type-2
                    </label>
                    <label class="diabetes">
                        <input type="radio" name="diabetes" />
                        <span class="checkmark"></span>
                        Neither
                    </label>
                </div>
            </div>
        </div>
    )
  }
}
