const Grade = ()=>{
    return <>
    <div className="mb-3">
<label htmlFor="grade" className='form-label'>Grade:</label>
<select className="form-select" aria-label="Default select example" id='grade'>
  <option selected>Select Your Grade:</option>
  <option value="1">9th Grade</option>
  <option value="2">10th Grade</option>
  <option value="3">11th Grade</option>
   <option value="4">12th Grade</option>
</select>
</div>
    
    
    </> 
}

export default Grade