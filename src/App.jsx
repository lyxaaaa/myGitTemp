import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'


export class App extends Component {
    //初始化state
    state={todos:[
        
    ]}
    //添加一个todo
    addTodo = (todoObj) =>{
        //获取原来的todos
        const {todos} = this.state;
        //添加一个todo在原todos的前面，即创建一个新的todos
        const newTodos = [todoObj,...todos]
        //更新state
        this.setState({todos:newTodos})
    }

    //更新一个todo
    updateTodo = (id,done) => {
        //获取原来的todos
        const {todos} = this.state;
        //匹配处理数据
        const newTodos = todos.map((todoObj) => {
            if(todoObj.id === id) return{...todoObj,done}
            else return todoObj;
        }
        )
        this.setState({todos:newTodos});
    }
    //删除一个todo
    deleteTodo = (id) => {
        //获取原todos
        const {todos} = this.state;
        //匹配处理数据
        const newTodos = todos.filter((todoObj) => {
            return todoObj.id !== id;
        }
        )
        this.setState({todos:newTodos});
    }
    //删除做完的todo
    clearAllDone = () => {
        //获取原todos
        const {todos} = this.state;
        //匹配处理数据
        const newTodos = todos.filter((todoObj) => {
            return !todoObj.done;
        }
        )
        this.setState({todos:newTodos});
    }
 
  render(){
    const {todos} = this.state;
    return (
        <div className="container">
            <div className='todolist'>todolist</div>
            <div className="wrap">
               <Header addTodo={this.addTodo}/>
               <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
               <Footer todos={todos}  clearAllDone={this.clearAllDone}/>
            </div>
    </div>
    )
  }
}

