import React, { Component } from "react";
import './todo-button.css';

export default class TodoButton extends Component {

    state = {
        label: ''
    }

    onChange = (e) => {
        this.setState({
            label: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onItemAdded(this.state.label);
        this.setState({
          label: ''
        })
    };

    render() {
        return(
            <form className="btnTodo" onSubmit={this.onSubmit}>
                <input
                className="input_add"
                onChange = {this.onChange}
                placeholder="New task..."
                value = {this.state.label}/>
                <button
                    className="btn_add">
                    Add Item
                </button>
            </form>
        )
    }
}
