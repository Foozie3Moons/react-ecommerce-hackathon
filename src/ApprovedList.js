import React, { Component } from 'react';
// import ApprovedItem from './ApprovedItem';

class ApprovedList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({items: nextProps.items});
  }

  render() {
    return(
      <div className='card'>
        <h3 id='approved-list'>ApprovedList</h3>
        <ul className='list-inline'>
          {this.state.items.map((item, index) => (
            <li key={index}>
              <div className='card card-item'>
                <ul className='list-inline'>
                  <li><a href={item.webUrl}><img className='thumb-list' src={item.imgUrl} /></a></li>
                  <li>
                    <ul>
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

export default ApprovedList;
