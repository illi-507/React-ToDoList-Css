import React, { Component } from 'react';
import Todos from './Todos'
import AddTodo from './AddForm'

class App extends Component {
  state = {
    todos:[
      {id:1,content:"buy milk"},
      {id:2,content:"rank up"},
    ]
  }

  deleteTodo = (id)=>{
    const todos = this.state.todos.filter((todo)=>{
      return todo.id !==id
    })
    this.setState({
         todos
    }); 
  }

  addTodo = (todo) =>{
      todo.id = Math.random();
      let todos = [...this.state.todos,todo];
       this.setState({
          todos
       });
  }
  render(){
    return (
     <div className="todo-app container">
     <h1 className = "center blue-text">Todo's</h1>
     <h6 className = "center blue-text">(Click the todo to delete)</h6>
      <Todos todos = {this.state.todos}
             deleteTodo ={this.deleteTodo} ></Todos>
      <AddTodo addTodo= {this.addTodo}></AddTodo>
     </div>
     );
  }
}

export default App;
