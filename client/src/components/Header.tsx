import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="w-full py-4 px-4 border-b">
        <div className="container">
            <Link to="/">
                {/* <img src="" alt="logo" className=""/> */}
                imagifyAI
            </Link>
        </div>
    </header>
  )
}

export default Header