import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/todoActions'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
class AddTodo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputTask: '',
      inputDatef: '',
      inputDatel: '',
      inputNotes: '',
    }
    this.handleChangeTask = this.handleChangeTask.bind(this)
    this.handleChangeDatef = this.handleChangeDatef.bind(this)
    this.handleChangeDatel = this.handleChangeDatel.bind(this)
    this.handleChangeNotes = this.handleChangeNotes.bind(this)
    
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChangeTask(e) {
    this.setState({ inputTask: e.target.value})
  }
  handleChangeDatef(e) {
    this.setState({ inputDatef: e.target.value})
  }
  handleChangeDatel(e) {
    this.setState({ inputDatel:e.target.value})
  }
  handleChangeNotes(e) {
    this.setState({ inputNotes: e.target.value})
  }



  handleSubmit(e) {
    const { props: { dispatch }, state: { inputTask,inputDatef,inputDatel,inputNotes } } = this
    e.preventDefault()
    if (!inputTask.trim()&&!inputDatef.trim()&&!inputDatel.trim()&&!inputNotes.trim()) {
      return
    }
    dispatch(addTodo(this.state))
    this.setState({ inputTask: '',inputDatef:'',inputDatel:'',inputNotes:'' })
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="Task">Task</Label>
          <Input type="text" name="Task" id="Task" placeholder="Task" onChange={this.handleChangeTask} value={this.state.inputTask}/>
        </FormGroup>
        <FormGroup>
          <Label for="FromDate">FromDate</Label>
          <Input type="text" name="FromDate" id="FromDate" placeholder="FromDate" onChange={this.handleChangeDatef} value={this.state.inputDatef}/>
        </FormGroup>
        <FormGroup>
          <Label for="ToDate">ToDate</Label>
          <Input type="text" name="ToDate" id="ToDate" placeholder="ToDate" onChange={this.handleChangeDatel} value={this.state.inputDatel}/>
        </FormGroup>
        <FormGroup>
          <Label for="Notes">Notes</Label>
          <Input type="text" name="Notes" id="Notes" placeholder="Notes" onChange={this.handleChangeNotes} value={this.state.inputNotes}/>
        </FormGroup>
        <center><Button outline color="success" type="submit" >Add</Button></center>
      </Form>
    )
  }
}

AddTodo = connect()(AddTodo)
export default AddTodo
