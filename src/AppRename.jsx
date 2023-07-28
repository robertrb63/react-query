import { useEffect, useState } from 'react'
import './App.css'
import { EVENTS } from './consts'

function Navigate(href){
  window.history.pushState({},'',href)
  const navigateEvent = new Event(EVENTS.PUSHSTATE)
  window.dispatchEvent(navigateEvent)
}
function HomePage(){
  return(
    <>
    <h1>Home</h1>
    <p>Esta Pagina de ejemplo</p>
    <a> </a>
    <button onClick={()=> Navigate('/about')}>Ir a Sobre nosotros</button>
    </>
  )
}


function AboutPage(){
  return(
    <>
    <h1>AboutPage</h1>
    <div>
      <img src="https://avatars.githubusercontent.com/u/241138?v=4" alt="" />
      <p>Hola me llamo React Router</p>
      <button onClick={()=> Navigate('/')}>Ir a la Home</button>
      
      <a href='/'>Ir a la Home</a>

    </div>
    </>
  )  
}

function Router ({routes=[], defaultComponent: DefaultComponent = ()=> null}){
  
}


function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)
  
  useEffect(()=>{
    const onLocationChange = ()=>{
      setCurrentPath(window.location.pathname)
    }
    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
    window.addEventListener('popstate', onLocationChange)
    
    return ()=>{
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
    }
  },[])

  return (
    <main>
      {currentPath === '/' && <HomePage/>}
      {currentPath === '/about' && <AboutPage/>}
    </main>
  )
}


export default App




import { useEffect, useState } from 'react'
import './App.css'
import { EVENTS } from './consts'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'


function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)
  
  useEffect(()=>{
    const onLocationChange = ()=>{
      setCurrentPath(window.location.pathname)
    }
    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
    window.addEventListener('popstate', onLocationChange)
    
    return ()=>{
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
    }
  },[])

  return (
    <main>
      {currentPath === '/' && <HomePage/>}
      {currentPath === '/about' && <AboutPage/>}
    </main>
  )
}
export default App