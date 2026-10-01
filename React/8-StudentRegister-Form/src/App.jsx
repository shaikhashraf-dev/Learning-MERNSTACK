import './App.css'
import Age from './Components/age'
import Button from './Components/button'
import Declare from './Components/declare'
import Email from './Components/email'
import Gender from './Components/gender'
import Grade from './Components/grade'
import Header from './Components/header'
import Name from './Components/name'

function App() {
 
  return (
    <>
 
    <div className='container mt-5'>
  <Header/>
     <div className="mb-3">
      <form>
<Name/>
<Email />
<Age />
<Grade />
<Gender />
<Declare />
<Button />
</form>
</div>
    </div>
   
    </>
  )
}

export default App
