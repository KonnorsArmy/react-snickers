function App() {
  return <div className="wrapper clear">
    <div className="overlay">
      <div className="drawer">
        <h2 className="mb-30">Корзина</h2>
        <div className="items">
          <div className="cart-item d-flex align-center mb-20"> {/* 1 */}
            <div style={{ backgroundImage: 'url(img/sneakers/1.jpg)' }} className="cart-item-img">

            </div>
            <div className="mr-20 flex">
              <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
              <b>12 999 руб.</b>
            </div>
            <img className="remove-btn" src="img/btn-removed.svg" alt="Remove"/>
          </div>
          <div className="cart-item d-flex align-center mb-20">{/* 2 */}
            <div style={{ backgroundImage: 'url(img/sneakers/1.jpg)' }} className="cart-item-img">

            </div>
            <div className="mr-20 flex">
              <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
              <b>12 999 руб.</b>
            </div>
            <img className="remove-btn" src="img/btn-removed.svg" alt="Remove"/>
          </div>
        </div>
      </div>
    </div>

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
    <div className="content p-40">
      <div className="mb-40 d-flex align-center justify-between">
        <h1>Все кроссовки</h1>
        <div className="search-block">
          <img src="img/search.svg" alt="Search" />
          <input placeholder="Поиск..." />
        </div>
      </div>
      <div className="d-flex">
        <div className="card p-30">
          <div className="favorite">
            <img src="img/heart-passive.svg" alt="Unliked"/>
          </div>
          <img width={133} height={112} src="img/sneakers/1.jpg" alt="Sneaker" />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>12 999 руб.</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="img/plus.svg" />
            </button>
          </div>
        </div> {/* card 1*/}
        <div className="card p-30">
          <img width={133} height={112} src="img/sneakers/2.jpg" alt="Sneaker" />
          <h5>Мужские Кроссовки Nike Air Max 270</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>12 999 руб.</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="img/plus.svg" />
            </button>
          </div>
        </div> {/* card 2 */}
        <div className="card p-30">
          <img width={133} height={112} src="img/sneakers/3.jpg" alt="Sneaker" />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>8 499 руб.</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="img/plus.svg" />
            </button>
          </div>
        </div> {/* card 3*/}
        <div className="card p-30">
          <img width={133} height={112} src="img/sneakers/4.jpg" alt="Sneaker" />
          <h5>Кроссовки Puma X Aka Boku Future Rider</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>8 999 руб.</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="img/plus.svg" />
            </button>
          </div>
        </div> {/* card 4 */}
      </div>{/* d-flex */}
    </div>{/* content */}
  </div>;
}

export default App;
