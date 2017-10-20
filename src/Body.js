import React, { Component } from 'react';
import Main from './Main';
import ApprovedList from './ApprovedList';
import RejectedList from './RejectedList';

class Body extends Component {
  constructor(props) {
    super(props)
    this.state = {
      approvedItems: [1,2,3,4],
      rejectedItems: [],
    }
  }

  // Body will be sending data around to the various components.
  // When a selection is made, state is lifted all the way up to here.
  // The props are then sent to Approved/Rejected lists, rerendering if needed
  // For that reason, state-lifting functions should live here, and be passed through Main to the Selection itself

  handleApproval = (item) => {
    this.setState({approvedItems: item})
  }

  handleRejection = (item) => {
    this.setState({rejectedItems: item})
  }

  getComparisonList = () => {

    return list;
  }

  render() {
    return(
      <div className='Body'>
        <Main
          handleApproval={this.handleApproval}
          handleRejection={this.handleRejection}
          comparisonList={this.getComparisonList}
          />
        <ApprovedList items={this.state.approvedItems} />
        <RejectedList items={this.state.rejectedItems} />
      </div>
    )
  }
}

export default Body;
