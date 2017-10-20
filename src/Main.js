import React, { Component } from 'react';
import Selection from './Selection';
import ComparisonList from './ComparisonList';
import { Col, Row } from 'react-materialize';

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: ['selection', 'list'], // items received from the API fetch
      selectedItem: {
          name: 'Batman Costume', // some sort of name we can display as a title
          imgUrl: 'https://target.scene7.com/is/image/Target/51208174?wid=520&hei=520&fmt=pjpeg', // link to the image so we can display it
          webUrl: 'https://www.target.com/p/batman-the-dark-knight-rises-men-s-muscle-chest-deluxe-adult-costume-x-large/-/A-51208174?ref=tgt_adv_XS000000&AFID=google_pla_df&CPNG=PLA_Seasonal+Shopping&adgroup=SC_Seasonal&LID=700000001170770pgs&network=g&device=c&location=9033309&gclid=Cj0KCQjwvabPBRD5ARIsAIwFXBlZEGZPtGy26Ak5Ssp41sDXAfn1HEt8W5W0aNf0xUUR-lA_eXK4nccaAtHHEALw_wcB&gclsrc=aw.ds', // link to the place where we can see the posting
          cost: '$29.99' // Some sort of dollar information to display
      }, // the current item being displayed, shifted from the front of the items array
    }
  }

  handleSearch = () => {
    // API fetch goes here
    // Once JSON is received, we need the following pieces of data (if possible):
    // item: {
    //   name: 'Batman Costume', // some sort of name we can display as a title
    //   imgUrl: 'https://google.com/img.png', // link to the image so we can display it
    //   webUrl: 'https://google.com', // link to the place where we can see the posting
    //   cost: '$29.99' // Some sort of dollar information to display
    // }
    // Afterwards, we need to shuffle the item array. Unshift the first item into a variable.
    // Save the unshifted item in selectedItem. Save the rest of the item array in items
  }

  render() {
    return(
      <div>
        <Selection selectedItem={this.state.selectedItem} handleRejection={this.props.handleRejection} handleApproval={this.props.handleApproval}/>
        <ComparisonList comparisonList={this.props.comparisonList}/>
      </div>
    )
  }
}

export default Main;
