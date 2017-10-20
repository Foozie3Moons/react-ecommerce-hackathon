import React, { Component } from 'react';
// import RejectedItem from './RejectedItem';

class RejectedList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
    }
  }

  componentWillReceiveProps = (nextProps) => {
    // this.setState({items: nextProps.items});
  }

  render() {
    return(
      <div>
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
