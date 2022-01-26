import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import propTypes from 'prop-types';
import './index.css'

export default class Header extends Component {
static propTypes = {
  addTodo:propTypes.func.isRequired
}

  handleKeyUp = (event) => {
    //解构赋值获取keyCode ，target
    const {keyCode, target} = event;
    //是否按回车键（13）
    if(keyCode !==13) return;
    //输入的值是否为空
    if(target.value.trim() ===' '){
      alert('输入不能为空');
      return
    }
    //准备输入的todo对象
    const todoObj = {id:nanoid(),name:target.value,done:false};
    //todoObj作为参数，传给父App
    this.props.addTodo(todoObj);
    //清空输入
    target.value = ' ';

  }
  render() {
    return (
        <div className="header">
          <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入代办事项，按返回键确认"/>
        </div>
    )
  }
}
