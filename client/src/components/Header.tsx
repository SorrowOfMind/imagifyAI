import { Link } from 'react-router-dom'
import Logo from './Logo'

const Header = () => {

  
  return (
    <header className="w-full py-4 px-4">
        <div className="container">
            <Link to="/">
                <Logo/>
            </Link>
        </div>
    </header>
  )
}

export default Header