import React, { Component } from 'react';
// import SelectionItem from './Selection';
import { Button, Row, Col } from 'react-materialize';

class Selection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      approve: '',
    }
  }

  handleApproveClick = (e) => {
    e.preventDefault();
    this.props.handleApproval(this.props.selectedItem);
  }

  handleRejectClick = (e) => {
    e.preventDefault();
    this.props.handleRejection(this.props.selectedItem);
  }

  render() {
    return(
      <Row className='card'>{/* Materialize Card Component? */}
        <Col s={2}>
          <Button floating large className='red' waves='light' icon='clear' onClick={this.handleRejectClick} />
        </Col>
        <Col s={8}>
          <h3>{this.props.selectedItem.name}</h3>
          <img className='thumb-main' src={this.props.selectedItem.imgUrl} />
          <a href={this.props.selectedItem.webUrl}><h4>Website</h4></a>
        </Col>
        <Col s={2}>
          <Button floating large className='green' waves='light' icon='check' onClick={this.handleApproveClick} />
        </Col>
      </Row>
    )
  }
}


export default Selection;