import {Link} from '../Link.jsx'

export default function Page404(){
    return( <>
        <div>
            <h1>This in not Fine</h1>
            <img src="https://midu.dev/images/this-is-fine-404.gif" alt="page error" />
        </div>
        <Link to='/'>Volver a la Home</Link>
        </>)
    }
   