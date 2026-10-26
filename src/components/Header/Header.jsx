import logo from '../../assets/logo.jpg'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header__content">
        <img
          className="header__logo"
          src={logo}
          alt="NFT Collection"
        />

        <h1>NFT Collection</h1>

        <nav className="header__nav">
          <a href="#collection">Collection</a>
          <a href="#about">About</a>
        </nav>
      </div>
    </header>
  )
}

export default Header