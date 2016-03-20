import React from 'react';
import Spinner from './controls/spinner'

class Controls extends React.Component{
  render(){
    return (
      <div className="controls">
        <ul className="list-group">
          <li className="list-group-item c"><h4>controls</h4></li>
          <li className="list-group-item c">
            <p>base unit</p>
            <Spinner />
          </li>
          <li className="list-group-item c">
            <p>base fontsize</p>
            <Spinner />
          </li>
          <li className="list-group-item c">
            <p>modular scale</p>
            <Spinner />
          </li>
          <li className="list-group-item c">
            <p>base lineheight</p>
            <Spinner />
          </li>
        </ul>
      </div>
    )
  }
}

export default Controls
