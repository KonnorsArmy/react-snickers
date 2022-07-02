import React from 'react';
import axios from 'axios';
import Card from './components/Card';
import Header from './components/Header.js';
import Drawer from './components/Drawer';
// Создал массив, то что хранится в массиве то и отображается на сайте,сколько данных в массиве столько и карточек
// const arr = [];
// arr.map() вызывает массив и возращает измененным, но сам массив не меняет


function App(){
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    axios.get('https://62b978beff109cd1dc92db17.mockapi.io/items')
      .then ((res) => {setItems(res.data);
    });
    axios.get('https://62b978beff109cd1dc92db17.mockapi.io/cart')
      .then ((res) => {setCartItems(res.data);
    });
  }, []);
  

  const onAddToCart = (obj) => {
    axios.post('https://62b978beff109cd1dc92db17.mockapi.io/cart', obj)
    setCartItems(prev  => [...prev, obj]);
  }
  
  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };


  return(
    <div className="wrapper clear">
      {cartOpened &&<Drawer items={cartItems} onClose={() => setCartOpened(false)} />}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content  p-40">
        <div className="mb-40 d-flex align-center justify-between">
          <h1>{searchValue ? 'Поиск по запросу: "$searchValue"' : 'Все кроссовки'}</h1>
          <div className="search-block">
            <img src="img/search.svg" alt="Search" />
            {searchValue &&<img onClick={() => setSearchValue ('')} className="clear cu-p" src="img/btn-removed.svg" alt="Remove"/>}
            <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {items
          .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
          .map((item, index) => (
            <Card
            key={index}
            title={item.title}
            price={item.price}
            imageUrl={item.imageUrl}
            onClickFavorite={() => console.log('Добавили в закладки')}
            onPlus={() => onAddToCart(item)}
            />
          ))}
        </div> 
      </div>
  </div>
  );
}

export default App;
