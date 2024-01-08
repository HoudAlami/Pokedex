import './Header.scss';

function Header() {
  return (
    <div className="header">
      <img
        src="public/logo/pokemon-logo.png"
        alt="logo-pokemon"
        className="header_image"
      />
      <div className="header_title">
        <h1 className="header_title-text">Welcome to the Devodex</h1>
        <img
          src="public/logo/pokedex.png"
          alt="logo-pokedex"
          className="header_title-image"
        />
      </div>
    </div>
  );
}

export default Header;
