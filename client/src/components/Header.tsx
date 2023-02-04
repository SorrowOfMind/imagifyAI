import { Link } from 'react-router-dom'

const Header = () => {

  
  return (
    <header className="w-full py-4 px-4 shadow-2xl shadow-grey bg-blue">
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