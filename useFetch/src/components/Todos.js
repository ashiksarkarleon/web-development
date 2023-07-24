import {memo} from 'react'


const Todos = ({todos, addTodo}) => {
    console.log('Child render');
  return (
    <>
        <h1>My Todo</h1>
        {todos.map((todo, index) => {
            return <p key={index}>{todo}</p>
        })}
        <button type='button' onClick={addTodo}>Add Todo</button>
    </>
  )
}

export default memo(Todos)