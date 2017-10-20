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
    (() => {
      var cx = '000308025382460033617:c9agyvqp_o4';
      var gcse = document.createElement('script');
      gcse.type = 'text/javascript';
      gcse.async = true;
      gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(gcse, s);
    })
  }

  handleSearch = (e) => {
    e.preventDefault();
  }

  render() {
    return(
      <div>
        <div className="gcse-searchbox" data-resultsUrl="http://www.google.com" data-newWindow="true" data-queryParameterName="search" >
        </div>
        <Selection handleSearch={'farge'}/>
        <ComparisonList />
      </div>
    )
  }
}

export default Main;
