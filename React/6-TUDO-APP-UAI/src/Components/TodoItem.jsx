
const TodoItem =({id,TodoItemName,TodoDate})=>{
    return (
 <div class="container text-center">
  <div class="row">
    <div class="col-5 text-truncate">
 {TodoItemName}
    </div>
    <div class="col-3">
     {TodoDate}
    </div>
    <div class="col-1">
     <button type="button" class="btn btn-danger button">Delete</button>
    </div>
  </div>
  
  </div>

    )
}
export default TodoItem