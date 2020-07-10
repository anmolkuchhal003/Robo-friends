import React, { Component } from 'react';
import './App.css';
import BackgroundGenerator from './BackgroundGenerator'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home'
import 'semantic-ui-css/semantic.min.css';
class App extends Component {
 


  render() {
    return(
        
          <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/generator" component={BackgroundGenerator} exact/>
            </Switch>
     
      );
  }
}

export default App;