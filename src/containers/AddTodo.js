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
    this.handleChange = this.handleChange.bind(this)
    this.handleChange2 = this.handleChange2.bind(this)
    this.handleChange3 = this.handleChange3.bind(this)
    this.handleChange4 = this.handleChange4.bind(this)
    
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({ inputTask: e.target.value})
  }
  handleChange2(e) {
    this.setState({ inputDatef: e.target.value})
  }
  handleChange3(e) {
    this.setState({ inputDatel:e.target.value})
  }
  handleChange4(e) {
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
          <Input type="text" name="Task" id="Task" placeholder="Task" onChange={this.handleChange} value={this.state.inputTask}/>
        </FormGroup>
        <FormGroup>
          <Label for="FromDate">FromDate</Label>
          <Input type="text" name="FromDate" id="FromDate" placeholder="FromDate" onChange={this.handleChange2} value={this.state.inputDatef}/>
        </FormGroup>
        <FormGroup>
          <Label for="ToDate">ToDate</Label>
          <Input type="text" name="ToDate" id="ToDate" placeholder="ToDate" onChange={this.handleChange3} value={this.state.inputDatel}/>
        </FormGroup>
        <FormGroup>
          <Label for="Notes">Notes</Label>
          <Input type="text" name="Notes" id="Notes" placeholder="Notes" onChange={this.handleChange4} value={this.state.inputNotes}/>
        </FormGroup>
       
        <Button type="submit" >Add
        </Button>
      </Form>
    )
  }
}

AddTodo = connect()(AddTodo)

export default AddTodo
