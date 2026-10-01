import './App.css'

import Paragraph from './Component/paragraph'
import Button from './Component/button'
import Dynamic from './Component/Dynamic'
import StudentList from './Component/StudentList'
import Number from './Component/RandomNumber'
import Title from './Component/heading'
function App(){
const SuccessHandler=()=>{
       console.log("Successfully!");

}
const SavedHandler=()=>{
       console.log("Saved!");

}
const DeleteHandler=()=>{
       console.log("Deleted!");

}


  const Student=['Ashraf','Arshad','Rehan','Aatif','wasim'];
  const StudentOne=['Hadeen','Altamash','Israfil','Jibrael','Izrael'];
  const StudentTwo=['Khainoor','Shaikh','Malkani','Jagraliya','BadeKhatal'];
  return (
    <>
    <Title textTitle='Welcome To React'/>
    <Title textTitle='Lets Start Studying'/>
    <Title textTitle='Basic React'/>
    <Title textTitle='Functon Vs Class Component'/>
    <Paragraph/>
   <Button type="Success" btntxt="Succes" handler={SuccessHandler}/>
    <Button type="Save" btntxt="Save" handler={SavedHandler}/>
     <Button type="Delete" btntxt="Delete" handler={DeleteHandler}/>
   
   <Dynamic/>
   <Number/>
   <Number/>
   <Number/>
   <StudentList Student={Student}/>
    <StudentList Student={StudentOne}/>
     <StudentList Student={StudentTwo}/>
     <StudentList />
   
    </>
  )
}

export default App
