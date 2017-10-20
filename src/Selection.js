import React, { Component } from 'react';
// import SelectionItem from './Selection';

class Selection extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [], // items received from the API fetch
      selectedItem: {}, // the current item being displayed, shifted from the front of the items array
    }
  }

  handleSearch = () => {
    // API fetch goes here
    // Once JSON is received, we need the following pieces of data (if possible):
    // item: {
    //   name: 'Batman Costume', // some sort of name we can display as a title
    //   imgUrl: 'https://google.com/img.png', // link to the image so we can display it
    //   webUrl: 'https://google.com', // link to the place where we can see the posting
    //   cost: '$29.99' // Some sort of
    // }
    // Afterwards, we need to shuffle the item array. Unshift the first item into a variable.
    // Save the unshifted item in selectedItem. Save the rest of the item array in items
  }

  render() {
    return(
      <div>{/* Materialize Card Component? */}
        {/* Materialize X Button Icon */}
        <div>
          <h2>{this.state.selectedItem.name}</h2>
          <img src={this.state.selectedItem.imgUrl} />
          <h4>{this.state.selectedItem.webUrl}</h4>
        </div>
        {/* Materialize ✓ Button Icon */}
      </div>
    )
  }
}

export default Selection;
