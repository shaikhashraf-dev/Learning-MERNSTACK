 import './button.css'
 const Button=({type,btntxt,handler})=>{
  if(type==='Save'){
 return   <button className="save-btn" onClick={handler}>{btntxt}</button>
}else if(type==='Delete'){
    return   <button className="Delete-btn" onClick={handler}>{btntxt}</button>
}else{
    return   <button className="success-btn" onClick={handler}>{btntxt}</button>
}
  }



   

export default Button
