import React, { Component } from 'react';
import { SketchPicker } from 'react-color';
import { SwatchesPicker } from 'react-color';
import 'semantic-ui-css/semantic.min.css';
import bgenerator from '../containers/BackgroundGenerator.css'

export default class BackgroundGenerator extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      background: 'purple',
    }
  }
  handleChangeComplete = (color) => {
    this.setState({ background: color.hex });
  };
   
  render() {
    const styleObj = {background: this.state.background}
    return (
      <div style={styleObj} className="box">
      <div className="ui card">
        <div className="content">
          <div className="header">
          Color: {this.state.color}

       </div>
       <div className="ui search">
       <SketchPicker
          onChangeComplete={ this.handleChangeComplete }
          color={ this.state.background }
          />
       </div>
        </div>
          </div>
       
         
       </div>
      
    );
  }
  }