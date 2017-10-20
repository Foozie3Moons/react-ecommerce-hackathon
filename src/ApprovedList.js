import React, { Component } from 'react';
// import ApprovedItem from './ApprovedItem';

class ApprovedList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: ['approved', 'list']
    }
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({items: nextProps.items});
  }

  render() {
    return(
      <div>
        <h3>ApprovedList</h3>
        <ul>
          {this.state.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default ApprovedList;
