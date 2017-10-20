import React, { Component } from 'react';
import Main from './Main';
import ApprovedList from './ApprovedList';
import RejectedList from './RejectedList';

class Body extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // Default State
    }
  }

  // Body will be sending data around to the various components.
  // When a selection is made, state is lifted all the way up to here.
  // The props are then sent to Approved/Rejected lists, rerendering if needed
  // For that reason, state-lifting functions should live here, and be passed through Main to the Selection itself

  render() {
    return(
      <div className='Body'>
        <Main />
        <ApprovedList />
        <RejectedList />
      </div>
    )
  }
}

export default Body;
