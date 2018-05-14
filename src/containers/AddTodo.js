import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/todoActions'

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
      <form className="c-todo__section" onSubmit={this.handleSubmit}>
        <label>Task:</label>
        <input placeholder="task" className="c-todo__input" type="text" onChange={this.handleChange} value={this.state.inputTask} />
        <label>FromDate:</label>
        <input placeholder="FromDate" className="c-todo__input" type="text" onChange={this.handleChange2} value={this.state.inputDatef} />
        <label>ToDate:</label>
        <input placeholder="ToDate" className="c-todo__input" type="text" onChange={this.handleChange3} value={this.state.inputDatel} />
        <label>Notes:</label>
        <input placeholder="Notes" className="c-todo__input" type="text" onChange={this.handleChange4} value={this.state.inputNotes} />
        <button type="submit" >Add
        </button>
      </form>
    )
  }
}

AddTodo = connect()(AddTodo)

export default AddTodo
