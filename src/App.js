import React, { Component } from 'react';
import {Link} from 'react-router';
class App extends Component {

  render() {
    return (
      <div>
        <ul>
          <li><Link to="/demo01">demo01</Link></li>
        </ul>
      </div>
    );
  }
}

export default App;