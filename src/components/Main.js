import React from "react"
import TodoItem from './TodoItem'
import Placeholder from "../Data/Placeholder"

class Main extends React.Component {

  constructor(){
    super()
    this.state = {
      todos: Placeholder
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id){
    //this.props.item.completed = !this.props.item.completed
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo
      })

      return {
        todos: updatedTodos
      }
    })
  }

  render(){
    const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)

    return (
      <main className="main">
        <div>
          {todoItems}
        </div>
      </main>
    )
  }
  }

export default Main
