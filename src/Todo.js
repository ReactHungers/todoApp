import React, { Component } from 'react'

class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: [],
            name: '',
            desc: ''
        }
        this.onNameChange = this.onNameChange.bind(this)
        this.onDescChange = this.onDescChange.bind(this)
    }

    onNameChange(event) {
        this.setState({ name: event.target.value })
    }

    onDescChange(event) {
        this.setState({ name: event.target.value })
    }

    onAdd() {
        let arr = this.state.todos
        arr.push({ name: this.state.name, desc: this.state.desc })
        this.setState({
            todos: arr
        })
    }

    render() {
        return (
            <div>
                <div id="form">
                    <input name="name" type="text" onChange={this.onNameChange} /><br/>
                    <input name="desc" type="text" onChange={this.onDescChange} /><br/>
                    <input name="add" type="button" onChange={(e) => this.onAdd(e)} value="Add"/>
                </div>
                <div id="todolist">
                    <ul>
                    {
                        this.state.todos.map((item) => {
                            return (
                                <li>
                                    <h2>{item.name}</h2>
                                    <h4>{item.desc}</h4>
                                </li>
                            )
                        })
                    }
                    </ul>
                </div>
            </div>
        )
    }
}

export default Todo