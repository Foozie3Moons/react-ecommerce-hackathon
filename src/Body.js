import React, { Component } from 'react';
import Main from './Main';
import ApprovedList from './ApprovedList';
import RejectedList from './RejectedList';
import { Row } from 'react-materialize';

class Body extends Component {
  constructor(props) {
    super(props)
    this.state = {
      approvedItems: [],
      comparisonList: [],
      rejectedItems: [],
    }
  }

  // Body will be sending data around to the various components.
  // When a selection is made, state is lifted all the way up to here.
  // The props are then sent to Approved/Rejected lists, rerendering if needed
  // For that reason, state-lifting functions should live here, and be passed through Main to the Selection itself

  handleApproval = (item) => {
    let items = this.state.approvedItems;
    items.push(item);
    let list = this.getComparisonList(items)

    this.setState({approvedItems: items, comparisonList: list});
  }

  handleRejection = (item) => {
    let items = this.state.rejectedItems;
    items.push(item);
    this.setState({rejectedItems: items});
  }

  getComparisonList = (items) => {
    var list = [];
    if (items.length === 0) {
      return list;
    }
    else if (items.length > 4) {
      let i = 1;
      while (list.length < 4) {
        list.push(items[items.length - i])
        i++;
      }
    } else {
      for (let i = 1; i < items.length + 1; i++) {
        console.log(list);
        list.push(items[items.length - i]);
      }
    }
    return list
  }

  render() {
    return(
      <div className='Body'>
        <Row></Row>
        <Main
          handleApproval={this.handleApproval}
          handleRejection={this.handleRejection}
          comparisonList={this.state.comparisonList}
          />
        <ApprovedList items={this.state.approvedItems} />
        <RejectedList items={this.state.rejectedItems} />
      </div>
    )
  }
}

export default Body;