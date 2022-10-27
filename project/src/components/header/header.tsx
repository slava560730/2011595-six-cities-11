import HeaderLeft from '../header-left/header-left';
import HeaderNav from '../header-nav/header-nav';

function Header(): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <HeaderLeft />
          <HeaderNav />
        </div>
      </div>
    </header>
  );
}

export default Header;
