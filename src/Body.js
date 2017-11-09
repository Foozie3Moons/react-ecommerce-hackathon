import React, { Component } from 'react';
import Main from './Main';
import ApprovedList from './ApprovedList';
import RejectedList from './RejectedList';
import { Row, Col } from 'react-materialize';

class Body extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [{
        name: 'Batman Costume', // some sort of name we can display as a title
        imgUrl: 'https://target.scene7.com/is/image/Target/51208174?wid=520&hei=520&fmt=pjpeg', // link to the image so we can display it
        webUrl: 'https://www.target.com/p/batman-the-dark-knight-rises-men-s-muscle-chest-deluxe-adult-costume-x-large/-/A-51208174?ref=tgt_adv_XS000000&AFID=google_pla_df&CPNG=PLA_Seasonal+Shopping&adgroup=SC_Seasonal&LID=700000001170770pgs&network=g&device=c&location=9033309&gclid=Cj0KCQjwvabPBRD5ARIsAIwFXBlZEGZPtGy26Ak5Ssp41sDXAfn1HEt8W5W0aNf0xUUR-lA_eXK4nccaAtHHEALw_wcB&gclsrc=aw.ds', // link to the place where we can see the posting
        cost: '$29.99' // Some sort of dollar information to display
      },{
        name: 'Fidget Spinner Costume', // some sort of name we can display as a title
        imgUrl: 'https://target.scene7.com/is/image/Target/52691656?wid=1560&hei=1560&fmt=pjpeg', // link to the image so we can display it
        webUrl: 'https://www.target.com/p/fidget-spinner-halloween-costume-one-size-fits-most-hyde-and-eek-boutique-153/-/A-52691656?ref=tgt_adv_XS000000&AFID=google_pla_df&CPNG=PLA_Seasonal+Shopping&adgroup=SC_Seasonal&LID=700000001170770pgs&network=g&device=c&location=9060413&gclid=Cj0KCQjwvabPBRD5ARIsAIwFXBntVJ4iz3UE_DsLPlpNRGjdbjILM2HEfxOlbFTCAqr3Eq-V0oJr4WQaAicmEALw_wcB&gclsrc=aw.ds', // link to the place where we can see the posting
        cost: '$25.00' // Some sort of dollar information to display
      },{
        name: 'Lost Dog Costume', // some sort of name we can display as a title
        imgUrl: 'https://images.halloweencostumes.com/products/4419/1-2/lost-dog-costume.jpg', // link to the image so we can display it
        webUrl: 'https://www.halloweencostumes.com/lost-dog-costume.html?utm_source=google&utm_medium=ppc&network=search&pcid=21&gclid=Cj0KCQjwvabPBRD5ARIsAIwFXBkPLcEi2DjjF4xo1-St-Oxikqmv8WzkTZ0ZVK8WnggC901SqEBvmbMaAvbCEALw_wcB', // link to the place where we can see the posting
        cost: '$64.99' // Some sort of dollar information to display
      },{
        name: 'Adult Ride In Camel Costume', // some sort of name we can display as a title
        imgUrl: 'https://images.halloweencostumes.com/products/30220/1-2/adult-ride-in-camel-costume.jpg', // link to the image so we can display it
        webUrl: 'https://www.halloweencostumes.com/adult-ride-in-camel-costume.html?utm_source=google&utm_medium=ppc&network=search&pcid=21&gclid=Cj0KCQjwvabPBRD5ARIsAIwFXBnaEdeeDyuHJSN6SC_zthRvFQsCNIMsOREnpEfMtZpLLjHI0FPbAj4aAlBkEALw_wcB',
        cost: '$79.99' // Some sort of dollar information to display
      },{
        name: 'Pineapple Dress Costume', // some sort of name we can display as a title
        imgUrl: 'https://www.tipsyelves.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/p/i/pineapple-halloween-costume_1_1.jpg', // link to the image so we can display it
        webUrl: 'https://www.tipsyelves.com/pineapple-dress-costume?utm_source=google_shopping&utm_medium=cpc&utm_campaign=google_pla&gdffi=7a965f7b613e49428a65dafc2384e284&gdfms=260EC7BF96654FF19C2A9307A93E678E&utm_source=google&utm_medium=cpc&adpos=1o21&scid=scplpTE-HWJMP87M&sc_intid=TE-HWJMP87M&gclid=Cj0KCQjwvabPBRD5ARIsAIwFXBlw1nDkyhEfpRwzBbJevIKSkvvDhQh2mVSOZvVkp-BIBUDuzjrHqr4aAlthEALw_wcB&gclsrc=aw.ds',
        cost: '$58.99' // Some sort of dollar information to display
      },{
        name: 'Eye Costume', // some sort of name we can display as a title
        imgUrl: 'https://ii.chadwicks.com/fcgi-bin/iipsrv.fcgi?FIF=/images/chadwicks/source/products/849495_mlt_1.tif&wid=8000=&cvt=jpeg',
        webUrl: 'https://www.chasing-fireflies.com/product/bloody-eyeball-costume-for-kids.do?clickid=9374e89a-587e-4c39-8bc6-218976e36ead&gclid=Cj0KCQjwvabPBRD5ARIsAIwFXBmULg4FdwAbSuL-gQv60vjuyn5OSewy6WaPvcvTtsYyHJwqY0Mr3wEaAgJaEALw_wcB', // link to the image so we can display it
        cost: '$89.99' // Some sort of dollar information to display
      },{
        name: 'Headless Man Costume', // some sort of name we can display as a title
        imgUrl: 'https://target.scene7.com/is/image/Target/51212708?wid=520&hei=520&fmt=pjpeg', // link to the image so we can display it
        webUrl: 'https://www.target.com/p/men-s-headless-man-adult-costume/-/A-51212708?lnk=rec|adaptpdpexsrch|related_prods_vv|adaptpdpexsrch|51212708|4',
        cost: '$31.99' // Some sort of dollar information to display
      },{
        name: 'Tootsie Roll Costume', // some sort of name we can display as a title
        imgUrl: 'http://images.buycostumes.com/mgen/merchandiser/tootsie-roll-baby-bunting-infant-costume-bc-19136.jpg?zm=800,800,1,0,0', // link to the image so we can display it
        webUrl: 'http://www.buycostumes.com/p/19136/tootsie-roll-baby-bunting-infant-costume',
        cost: '$26.99' // Some sort of dollar information to display
      },{
        name: 'Air Freshener Costume', // some sort of name we can display as a title
        imgUrl: 'https://images.contentful.com/6m9bd13t776q/7hf1mChcd2iSocaIckWO2A/cb765de9d18cea8bd7dc6b1ad178b14e/3._Car_Freshener_Baby?fl=progressive&fm=jpg&q=75&w=660&fm=jpg&fl=progressive', // link to the image so we can display it
        webUrl: 'http://www.buycostumes.com/c/themes/funny-costumes/kids',
        cost: '$24.99' // Some sort of dollar information to display
      },{
        name: 'Dead Deer Costume', // some sort of name we can display as a title
        imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/91ZR1-6iXgL._UY879_.jpg', // link to the image so we can display it
        webUrl: 'https://www.amazon.com/Rasta-Imposta-Trophy-Brown-Standard/dp/B00BLOF798/ref=as_li_ss_tl?s=apparel&ie=UTF8&qid=1473906371&sr=1-147&nodeID=12036273011&linkCode=sl1&tag=randallheavy-20&linkId=19c3efebdb86ed3ec505b49bf8461aaf',
        cost: '$29.99' // Some sort of dollar information to display
      }], // items received from the API fetch
      selectedItem: {}, // the current item being displayed, shifted from the front of the items array
      approvedItems: [],
      comparisonList: [],
      rejectedItems: [],
    }
  }

  // Body will be sending data around to the various components.
  // When a selection is made, state is lifted all the way up to here.
  // The props are then sent to Approved/Rejected lists, rerendering if needed
  // For that reason, state-lifting functions should live here, and be passed through Main to the Selection itself

  handleSubmit = () => {
    let items = this.state.items;
    let selectedItem = this.state.items[0];
    items.push(items.shift());
    this.setState({selectedItem: selectedItem})
  }

  handleApproval = (item) => {
    let items = this.state.approvedItems;
    items.push(item);
    let list = this.getComparisonList(items)
    this.setState({approvedItems: items, comparisonList: list});
    this.updateItemList();
  }

  handleRejection = (item) => {
    let items = this.state.rejectedItems;
    items.push(item);
    this.setState({rejectedItems: items});
    this.updateItemList()
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

  updateItemList = () => {
    if (this.state.items.length === 1) {
      this.setState({items: this.state.initItems})
    }
    let items = this.state.items;
    let selectedItem = this.state.items[0];
    items.push(items.shift());
    console.log(items);
    this.setState({items: items, selectedItem: selectedItem});
  }

  render() {
    return(
      <div className='Body'>
        <Row></Row>
        <Main
          handleApproval={this.handleApproval}
          handleRejection={this.handleRejection}
          itemList={this.state.itemList}
          selectedItem={this.state.selectedItem}
          comparisonList={this.state.comparisonList}
          handleSubmit={this.handleSubmit}
          />
        <Row>
          <Col s={1}></Col>
          <Col s={10}>
            <ApprovedList items={this.state.approvedItems} />
          </Col>
          <Col s={1}></Col>
        </Row>
        <Row>
          <Col s={1}></Col>
          <Col s={10}>
            <RejectedList items={this.state.rejectedItems} />
          </Col>
          <Col s={1}></Col>
        </Row>
      </div>
    )
  }
}

export default Body;
