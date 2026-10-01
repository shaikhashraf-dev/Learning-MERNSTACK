import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Title from './Components/Title'
import TodoApp from './Components/TodoApp'
import TodoItem from './Components/TodoItem'
import TodoItems from './Components/TodoItems'



function App() {
 
   return (
    <>
      <center>
        <Title/>
      <br />
        <TodoApp/>
      <TodoItems />
         <br />  
  </center>
    </>
  )
}

export default App
