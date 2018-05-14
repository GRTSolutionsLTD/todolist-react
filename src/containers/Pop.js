import React from 'react'
import { connect } from 'react-redux'
// import { AvForm, AvField } from 'availity-reactstrap-validation';
 //import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
 import { bindActionCreators } from 'redux';
 import * as popupActions from './../actions/popupActions'
 import{ Button,Modal} from 'react-bootstrap/lib/Button';

class Pop extends React.Component {
    constructor(props) {
        super(props);

        console.log("show", props.show);
        console.log("show 1", props.popupState.show);
       this.state = {
            show: props.show,
            updatable: false,
            name: props.name,
            status: props.status,
            text: ""
        }
    }

    handleClick() {
     // this.props.actions.showPopUp();
    }

    onTodoChange(value) {
        this.setState({
            name: value
        });
    }
    render() {
     
        return (
            <div style={ this.props.popupState.show ? { display:'block'} : {display : 'none'} }  >
             
               <p>Click to get the full Modal experience! </p>
             
        
        <button onClick={this.handleClick.bind(this)}></button>

        {/* <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
          Launch demo modal
        </Button> */}

        {/* <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Text in a modal</h4>
            <p>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal> */}
      </div>
        );
    }
}
Pop = connect(state => ({
  popupState: state.popupReducer
}),
dispatch => ({
  actions: bindActionCreators( popupActions, dispatch)
})
)(Pop)
export default (Pop)