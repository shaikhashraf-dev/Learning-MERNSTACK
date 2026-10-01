const TodoApp =()=>{
 return ( 
 <div class="container text-center">
  <div class="row">
    <div class="col-5">
     <input type="text" class="form-control" placeholder="Enter TODO Here" aria-label="Username" ></input>
    </div>
    <div class="col-3">
      <input type="date" class="form-control"  aria-label="Username" ></input>
    </div>
    <div class="col-1">
     <button type="button" class="btn btn-success button">Add</button>
    </div>
  </div>
  
  </div>
 )
}

export default TodoApp