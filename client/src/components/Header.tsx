import { Link } from 'react-router-dom'
import Logo from './Logo'

const Header = () => {

  
  return (
    <header className="w-full py-4 px-4">
        <div className="container flex justify-between">
            <Link to="/">
                <Logo/>
            </Link>
            <div>
              <Link to="/signup">Sign up</Link>
              <Link to="/login">Log in</Link>
            </div>
        </div>
    </header>
  )
}

export default Header