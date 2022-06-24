function Header(){
    return(
    <header className="d-flex justify-between align-center p-30">
        <div className= "Header__logo d-flex align-center">
          <img width={40} height={40}src="img/logo.png" alt="logo" />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="Header__right d-flex">
          <li className="mr-30">
            <img width={18} height={18} src="img/card.svg" />
            <span>1205 руб.</span>
          </li>
          <li>
            <img width={18} height={18} src="img/user.svg" />
          </li>
        </ul>
    </header>
    );
}

export default Header;