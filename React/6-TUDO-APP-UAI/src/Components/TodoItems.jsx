import TodoItem from './TodoItem'


const TodoItems =()=>{
 const TodoItems =[{id:1,TodoItemName:"Buy Milk",TodoDate:"Every Morning"},
    {id:2,TodoItemName:"Go To College",TodoDate:"Every Day"},
    {id:3,TodoItemName:"Home Work",TodoDate:"Home Work"},
    {id:4,TodoItemName:"Coding",TodoDate:"Every Day 5 Hours"},
 ];

 return <>
      {TodoItems.map((item)=> <TodoItem TodoItemName={item.TodoItemName} TodoDate={item.TodoDate}/>)}
 
 </>

}

export default TodoItems