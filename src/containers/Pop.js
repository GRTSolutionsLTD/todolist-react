

import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { savePopUp, UpdatePopUp, Todo } from './../actions/popupActions'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';

class Pop extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      id: '',
      task: '',
      datef: '',
      datel: '',
      note: '',
      done: ''
    }

    this.toggle = this.toggle.bind(this);
    this.ChangeValueT = this.ChangeValueT.bind(this)
    this.ChangeValueDS = this.ChangeValueDS.bind(this)
    this.ChangeValueDF = this.ChangeValueDF.bind(this)
    this.ChangeValueN = this.ChangeValueN.bind(this)
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.popupState.id != nextState.id) {
      this.setState({
        id: this.props.popupState.id,
        task: this.props.popupState.task,
        datef: this.props.popupState.datef,
        datel: this.props.popupState.datel,
        note: this.props.popupState.notes,
        done: this.props.popupState.done,
      });
    }


    return true
  }
  callApi() {
    // Github fetch library : https://github.com/github/fetch
    // Call the API page
    fetch('https://www.reddit.com/r/reactjs.json')
      .then((result) => {
        // Get the result
        // If we want text, call result.text()
        return result.json();
      }).then((jsonResult) => {
        // Do something with the result
        console.log(jsonResult);
      })
  }

  toggle() {
    this.props.dispatch(savePopUp(false));
    this.props.dispatch(UpdatePopUp(this.state));
    this.props.dispatch(Todo);
  }

  onTodoChange(value) {
    this.setState({
      name: value
    });
  }
  ChangeValueT(e) {
    this.setState({
      task: e.target.value
    });

  }
  ChangeValueDS(e) {
    this.setState({
      datef: e.target.value
    });
  }
  ChangeValueDF(e) {
    this.setState({
      datel: e.target.value
    });
  }
  ChangeValueN(e) {
    this.setState({
      note: e.target.value
    });
  }
  render() {
    return (
      <div >
        {/* <button onClick={() => this.callApi()}>
          Click here to call API
      </button> */}
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
              <center><Button outline color="primary" onClick={this.toggle}>Update</Button>
              <Button outline color="primary" onClick={() => this.callApi()}>Get Api</Button></center>
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





// render() {
//   return <div>
//     <button onClick={() => this.callApi()}>
//       Click here to call API
//     </button>
//   </div>;
// }
// }

// React.render(<Application />, document.getElementById('app'));