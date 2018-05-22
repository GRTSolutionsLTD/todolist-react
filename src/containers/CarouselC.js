import React, { Component } from 'react';
import { connect } from 'react-redux'
import Dialog from 'react-dialog'
import {Closecarousel} from '../actions/CarouselActions'
import { UncontrolledAlert } from 'reactstrap';
class CarouselC extends React.Component {
    constructor() {
        super();
        
    }
    handleClose = () => this.props.dispatch(Closecarousel());
    render() {
        return (
            <div className="container">
                {
                    this.props.CarouselState.isDialogOpen &&
                  //   <UncontrolledAlert color="info">
                  //   I am an alert!
                  // </UncontrolledAlert>
                    <Dialog
                        title="Dialog Title"
                        modal={true}
                        onClose={this.handleClose}
                        buttons={
                            [{
                                text: "Close",
                                onClick: () => this.handleClose()
                            }]
                        }>
                        <h1>Dialog Content</h1>
                        <p>More Content. Anything goes here</p>
                    </Dialog>
                }
            </div>
        );
    }
}


CarouselC = connect(state => ({
  CarouselState: state.CarouselReducer
})
)(CarouselC)
export default (CarouselC)

