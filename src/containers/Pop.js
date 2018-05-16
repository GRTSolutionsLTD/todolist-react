// import React from 'react'
// import { connect } from 'react-redux'
// // import { AvForm, AvField } from 'availity-reactstrap-validation';
// //import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
// import { bindActionCreators } from 'redux';
// import * as popupActions from './../actions/popupActions'
// import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'

// class Pop extends React.Component {
//   constructor(props) {
//     super(props);
//     console.log("show", props.show);
//     console.log("show 1", props.popupState.show);
//     this.state = {
//       show: props.show,
//       updatable: false,
//       name: props.name,
//       status: props.status,
//       text: "",
//       modal: false
//     }
//     this.toggle = this.toggle.bind(this);
//   }

//   handleClick() {
//     // this.props.actions.showPopUp();
//   }
//   toggle() {
//     this.setState({
//       modal: !this.state.modal
//     });
//   }

//   onTodoChange(value) {
//     this.setState({
//       name: value
//     });
//   }
//   render() {

//     return (
//       <div style={this.props.popupState.show ? { display: 'block' } : { display: 'none' }}  >
//         <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
//         <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
//           <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
//           <ModalBody>
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//           </ModalBody>
//           <ModalFooter>
//             <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
//             <Button color="secondary" onClick={this.toggle}>Cancel</Button>
//           </ModalFooter>
//         </Modal>
//       </div>
//     );
//   }
// }
// Pop = connect(state => ({
//   popupState: state.popupReducer
// }),
//   dispatch => ({
//     actions: bindActionCreators(popupActions, dispatch)
//   })
// )(Pop)
// export default (Pop)

import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import {savePopUp,UpdatePopUp} from './../actions/popupActions'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';

class Pop extends React.Component{

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
      taskU:"",
      datefU:"",
      datelU:"",
      noteU:"",
    }
    this.toggle = this.toggle.bind(this);
  }

  shouldComponentUpdate() {
    return true
  }
  toggle() {
    debugger
    this.props.dispatch(savePopUp(false));
<<<<<<< HEAD
    this.props.dispatch(UpdatePopUp(this.state));
=======
>>>>>>> b4f137c85b2c0f72c95048b9369aef4f80fd3ff4
  }
  onTodoChange(value) {
    this.setState({
      name: value
    });
  }
<<<<<<< HEAD
=======
  ChangeValueT(e)
  {
    this.setState({
      taskU: e.target.value
    });

  }
  ChangeValueDS(e)
  {
    this.setState({
      datefU: e.target.value
    });
  }
  ChangeValueDF(e)
  {
    this.setState({
      datelU: e.target.value
    });
  }
  ChangeValueN(e)
  {
    this.setState({
      noteU: e.target.value
    });
  }
>>>>>>> b4f137c85b2c0f72c95048b9369aef4f80fd3ff4
  render() {
    return (
      <div >
        {this.props.popupState.showModal && <Modal isOpen={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Update to do</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="exampleEmail">task</Label>
                <Input type="text" name="email" id="exampleEmail" onChange={this.ChangeValueT} defaultValue={this.props.popupState.task} />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">from date</Label>
                <Input type="text" name="text" id="examplePassword" onChange={this.ChangeValueDS} defaultValue={this.props.popupState.datef} />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">to date</Label>
                <Input type="text" name="text" id="examplePassword" onChange={this.ChangeValueDF} defaultValue={this.props.popupState.datel} />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">notes</Label>
                <Input type="text" name="text" id="examplePassword" onChange={this.ChangeValueN} defaultValue={this.props.popupState.notes} />
              </FormGroup>
              <center><Button  outline color="primary" onClick={this.toggle}>Update</Button></center>
            </Form>
          </ModalBody>
          <ModalFooter>
        
          </ModalFooter>
        </Modal>}
      </div>
    );
  }
}


Pop = connect(state => ({
  popupState: state.popupReducer
})
)(Pop)
export default (Pop)




