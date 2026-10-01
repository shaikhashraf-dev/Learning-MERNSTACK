import {Phone , Icon} from 'lucide-react';
import { igloo } from '@lucide/lab';

function App() {
 

  return (
    <>
      <Phone color='red' size={45}/>
      <Icon iconNode={igloo} size={44} strokeWidth={2}/>
    </>
  )
}

export default App
