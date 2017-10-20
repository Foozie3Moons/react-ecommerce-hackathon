import React, { Component } from 'react';
// import ComparisonItem from './ComparisonItem';

class ComparisonList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: ['comparison', 'list']
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

export default ComparisonList;
