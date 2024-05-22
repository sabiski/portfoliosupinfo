
import './App.css'
import NavBar from './components/NavBar'
import Welcom from './components/Welcom'


function App(){
  return(
    <div className=' bg-zinc-50'>
      {/* menu */}
     <NavBar></NavBar>
     {/* section presentation  */}
 
    <Welcom></Welcom>
   
    </div>
  )
}

export default App