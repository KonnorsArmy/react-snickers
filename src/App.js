import Card from './components/Card.js';
import Header from './components/Header.js';


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
        <Card />
      </div> {/* d-flex */}
    </div> {/* content */}
  </div>;
}

export default App;
