import React, { Component } from 'react';
import SelectionItem from './SelectionItem';

class Selection extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [], // items received from the API fetch
      selectedItem: {}, // the current item being displayed, shifted from the front of the items array
    }
  }

  handleSearch = () => {
    /* API fetch goes here
     * Once JSON is received, we need the following pieces of data (if possible):
     * item: {
     *   name: 'Batman Costume', // some sort of name we can display as a title
     *   imgUrl: 'https://google.com/img.png', // link to the image so we can display it
     *   webUrl: 'https://google.com', // link to the place where we can see the posting
     *   cost: '$29.99' // Some sort of
     * }
     * Afterwards, we need to shuffle the item array. Unshift the first item into a variable.
     */
  }




  render() {
    return(
      <div>
        {/* Materialize X Button Icon */}
        <SelectionItem
          name={this.state.selectedItem.name}
          imgUrl={this.state.selectedItem.imgUrl}
          handleSelection={this.props.handleSelection}
        />
        {/* Materialize ✓ Button Icon */}
      </div>
    )
  }
}

export default Selection;
