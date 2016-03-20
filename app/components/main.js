import React from 'react';
import ReactDOM from 'react-dom';
import RaisedButton from 'material-ui/lib/raised-button';

import Tabs from './tabs'
import Controls from './controls'
import Stage from './stage'

class Main extends React.Component{
render(){
    return (
      <div className="main">
        <Tabs />
        <Controls />
        <Stage />
      </div>
    )
  }
}

ReactDOM.render(<Main />, document.getElementById('app'));
