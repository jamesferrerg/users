import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
      <Link className="navbar-brand" to="/">
        Fake users
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            className="nav-link"
            to="/create"
          >
            Create an user
          </NavLink>

          <NavLink
            className="nav-link"
            to="/search"
          >
            Search
          </NavLink>
        </div>
      </div>
    </nav>
  )
}
