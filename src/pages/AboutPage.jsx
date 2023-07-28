import {Link} from "../Link.jsx"

export default function AboutPage(){
    return(
      <>
      <h1>AboutPage</h1>
      <div>
        <img src="https://avatars.githubusercontent.com/u/241138?v=4" alt="foto contacto" />
        <p>Hola me llamo React Router</p>
        <a href='/'>Ir a la Home</a>
      </div>
      <Link to='/'> GO TO THE Page ABOUT </Link>
      </>
    )  
  }
  