import React, { Component } from 'react';
// import ComparisonItem from './ComparisonItem';

class ComparisonList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({items: nextProps.comparisonList});
  }

  render() {
    return(
      <div>
        <ul>
          {this.state.items.map((item, index) => (
            <li key={index}>
              <div className='card card-item'>
                <ul className='list-inline'>
                  <li><a href={item.webUrl}><img className='thumb-list' src={item.imgUrl} /></a></li>
                  <li>
                    <ul className='float-right'>
                      <li>{item.name}</li>
                      <li><a href={item.webUrl}>Website</a></li>
                      <li>{item.cost}</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default ComparisonList;
