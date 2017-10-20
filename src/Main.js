import React, { Component } from 'react';
import Selection from './Selection';
import ComparisonList from './ComparisonList';

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount = () => {

  }

  handleSearch = (e) => {

  }

  render() {
    return(
      <div>
        <Selection />
        <ComparisonList />
      </div>
    )
  }
}

export default Main;
