import './Navbar.css'

export function Navbar() {
  return (
    <header className='navbarMain'>
      <div>
        Logo
      </div>

      <nav>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}