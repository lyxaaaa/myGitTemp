import React, { Component } from 'react';
import propTypes from 'prop-types';
import Item from '../Item'
import './index.css'

export default class List extends Component {
  //对props进行类型 必要性的限制
  static propTypes = {
    todos:propTypes.array.isRequired,
    updateTodo:propTypes.func.isRequired,
    deleteTodo:propTypes.func.isRequired
  }
  render() {
    const {todos,updateTodo,deleteTodo} = this.props;
    return (
        <ul className="main">
          {
            todos.map(todo => {
              return <Item key={todo.id} {...todo}  updateTodo={updateTodo} deleteTodo={deleteTodo}/>
            }
            )
          }
        </ul>
    )
  }
}
