import React, { Component } from 'react';
// import RejectedItem from './RejectedItem';
import { Table } from 'react-materialize';

class RejectedList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: ['rejection', 'list'],
    }
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({items: nextProps.items});
  }

  render() {
    return(
      <div>
        <h3>RejectedList</h3>
        <ul>
          {this.state.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default RejectedList;
