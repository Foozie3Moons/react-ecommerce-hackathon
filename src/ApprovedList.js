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
      <div>
        <h3>ApprovedList</h3>
        <ul>
          {this.state.items.map((item, index) => (
            <li key={index}>
              <div className='card'>
                {item.name}
                <img className='thumb-list' src={item.imgUrl} />
                {item.url}
                {item.price}
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default ApprovedList;
