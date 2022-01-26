import React, { Component } from 'react';
import './index.css'

export default class Footer extends Component {
  
  handleclearAllDone = () => {
    this.props.clearAllDone();
  }
  render() {
    const {todos} = this.props;
    const doneCount = todos.reduce((pre,todo) =>  pre + (todo.done ? 1 : 0),0);
    const total = todos.length;

    

    return (
        <div className="footer">
            <span className='fontStyle'>
                <span>已完成 : {doneCount}</span> &nbsp;  全部 : {total}
            </span>
            <button onClick={this.handleclearAllDone}
              className="btn btn-else">清除已完成的事项</button>
        </div>
    )
  }
}
