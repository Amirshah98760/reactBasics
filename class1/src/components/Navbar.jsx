
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navBar'>
        <h1>Navbar</h1>
        <ul>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/login'>Login</  Link>
            <Link to='/signup'>SignUp</Link>   
        </ul>
    </nav>
  )
}

export default Navbar