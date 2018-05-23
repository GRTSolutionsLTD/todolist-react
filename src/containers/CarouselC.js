import React, { Component } from 'react';
import { connect } from 'react-redux'
import Dialog from 'react-dialog'
import {Closecarousel} from '../actions/CarouselActions'
import { UncontrolledAlert,Card,CardBody,CardImg,CardTitle,CardSubtitle,CardText,Button } from 'reactstrap';
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
                //     <UncontrolledAlert color="info">
                //     I am an alert!
                //   </UncontrolledAlert>
                <Card>
                <CardImg top width="100%" src="https://mail.google.com/mail/u/0/?ui=2&ik=0289a2ca69&view=fimg&th=160cd5955ab610d9&attid=0.1&disp=emb&realattid=ii_16084775b5f2b203&attbid=ANGjdJ9bhcn_pN9M0Zrz6pNG_Ny1Cb7JrVnlPG0OrxsnYzeEYj-WbcSPWGYAmagae8gV0LeZ4_4rhjeta-hcPF9vOJlIdom3TUDWtiWUkoeWALGCwMpQqRn0WMbR3jc&sz=w836-h496&ats=1527053543595&rm=160cd5955ab610d9&zw&atsh=1" alt="Card image cap" />
                <CardBody>
                  {/* <CardTitle>Welcome</CardTitle>
                  <CardSubtitle>hellow</CardSubtitle>
                  <CardText>grth</CardText> */}
                  <center><Button outline onClick={this.handleClose}>סגור</Button></center>
                </CardBody>
              </Card>
                 
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

