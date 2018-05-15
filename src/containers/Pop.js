import React from 'react'
import { connect } from 'react-redux'
// import { AvForm, AvField } from 'availity-reactstrap-validation';
//import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { bindActionCreators } from 'redux';
import * as popupActions from './../actions/popupActions'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'

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
      text: "",
      modal: false
    }
    this.toggle = this.toggle.bind(this);
  }

  handleClick() {
    // this.props.actions.showPopUp();
  }
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  onTodoChange(value) {
    this.setState({
      name: value
    });
  }
  render() {

    return (
      <div style={this.props.popupState.show ? { display: 'block' } : { display: 'none' }}  >
        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
Pop = connect(state => ({
  popupState: state.popupReducer
}),
  dispatch => ({
    actions: bindActionCreators(popupActions, dispatch)
  })
)(Pop)
export default (Pop)