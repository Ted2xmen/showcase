import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className="container-md space-x-6 px-10 pt-12">
      <Link to="/">Home </Link>
      <Link to="/about"> About</Link>
      <Link to="/contact"> Contact</Link>
    </div>
  )
}

export default Nav
