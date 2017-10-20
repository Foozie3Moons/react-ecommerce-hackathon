import React, { Component } from 'react';
// import SelectionItem from './Selection';
import { Button, Row, Col } from 'react-materialize';

const Selection = (props) => {
    return(
      <Row className='card'>{/* Materialize Card Component? */}
        <Col s={2}>
          <Button floating large className='red' waves='light' icon='clear' onClick={this.handleRejection(this.props.selectedItem)} />
        </Col>
        <Col s={8}>
          <h2>{this.props.selectedItem.name}</h2>
          <img className='thumb' src={this.props.selectedItem.imgUrl} />
          <a href={this.props.selectedItem.webUrl}><h4>Website</h4></a>
        </Col>
        <Col s={2}>
          <Button floating large className='green' waves='light' icon='check' onClick={this.handleApproval(this.props.selectedItem)} />
        </Col>
      </Row>
    )
  }
}

export default Selection;
