import React, { Component } from 'react';
import {Link} from 'react-router';

class ToHome extends Component {
  render() {
    return (
      <Link to="/">查看更多示例</Link>
    );
  }
}

export default ToHome;