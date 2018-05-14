import React from 'react'
// import { AvForm, AvField } from 'availity-reactstrap-validation';
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

class Pop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true,
            updatable: false,
            name: props.name,
            status: props.status,
            text: ""
        }
    }
    onTodoChange(value) {
        this.setState({
            name: value
        });
    }
    render() {
        return (
            <div>
                <form className="c-todo__section" >
                    <input className="c-todo__input" type="text"  />
                    <button type="submit" className="">
                        <i className="material-icons">assignment_returned</i>
                    </button>
                </form>
                <h2></h2>
            </div>
        );
    }
}
export default (Pop)
/*value={this.props.myNumber[this.props.index].notes}*/