import React, { Component } from 'react';
import './index.css'

export default class Item extends Component {
//初始化鼠标state
  state = {mouse:false}

//鼠标移入移出(高阶函数)
  handleMouse = (flag) => {
    return () => {
      this.setState({mouse:flag})
    }
  }
  //是否勾选，更新done值(高阶函数)
    handleCheck = (id) => {
      return (event) => {
        this.props.updateTodo(id,event.target.checked)
      }
    }
    //删除键的实现
    handleDelete = (id) => {
      if(window.confirm('确定删除此事项吗？'))
        this.props.deleteTodo(id)
    }

  render() {

    //eslint-disable-next-line
    const {id,name,done} = this.props;
    const {mouse} = this.state;
    return (
    <li style={{backgroundColor:mouse? '#ddd' : 'white'}}
      onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
        <label >
          <input type="checkbox" defaultChecked={done} onChange={this.handleCheck(id)}/>
          <span>{name}</span>
        </label>
        <button onClick={() => {this.handleDelete(id)}}
          className="btn btn-else" style={{display:mouse? 'block' :'none'}}>删除</button>
    </li>
    )
  }
}
