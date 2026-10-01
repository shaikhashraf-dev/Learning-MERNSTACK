const StudentList=(props)=>{
  if(!props.Student){
    return <p>No Student List</p>;
  }
  
    return <ol>
        {
            props.Student.map((student,index)=><li key={student}>{student}</li>)
        }
    </ol>

}
export default StudentList