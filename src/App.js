import Card from './components/Card';
import Header from './components/Header.js';
// Создал массив, то что хранится в массиве то и отображается на сайте,сколько данных в массиве столько и карточек
const arr = [
  {title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 12999, imageUrl: "img/sneakers/1.jpg" },
  {title: 'Мужские Кроссовки Nike Air Max 270', price: 15600, imageUrl: "img/sneakers/2.jpg" },
  {title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 8499, imageUrl: "img/sneakers/3.jpg" },
  {title: 'Кроссовки Puma X Aka Boku Future Rider', price: 8999, imageUrl: "img/sneakers/4.jpg" }];
// arr.map() вызывает массив и возращает измененным, но сам массив не меняет


function App() {
  return <div className="wrapper clear">
    <Header />
    <div className="content p-40">
      <div className="mb-40 d-flex align-center justify-between">
        <h1>Все кроссовки</h1>
        <div className="search-block">
          <img src="img/search.svg" alt="Search" />
          <input placeholder="Поиск..." />
        </div>
      </div>
      <div className="d-flex">
        {arr.map((obj) => (
          <Card title={obj.title} price={obj.price} imageUrl={obj.imageUrl}  />
        ))}
      </div> 
    </div>
  </div>;
}

export default App;
