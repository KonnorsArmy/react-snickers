
function Drawer({onClose, items = []}){
    return(
        <div className="overlay">
        <div className="drawer">
          <h2 className="d-flex justify-between mb-30">Корзина <img onClick={onClose} className="cu-p" src="img/btn-removed.svg" alt="Remove"/></h2>
          <div className="items flex">
            { items.map((obj) => (
                <div className="cart-item d-flex align-center mb-20"> {/* 1 */}
              <div style={{ backgroundImage: `url(${obj.imageUrl})` }} className="cart-item-img"></div>
              <div className="mr-20 flex">
                <p className="mb-5">{obj.title}</p>
                <b>{obj.price} руб.</b>
              </div>
              <img className="remove-btn" src="img/btn-removed.svg" alt="Remove"/>
            </div>
              ))
            }
          </div>
          <div className="cartTotalBlock">
            <ul>
              <li>
                <span>Итого:</span>
                <div></div>
                <b>21 498 руб. </b>
              </li>
              <li>
                <span>Налог 5%:</span>
                <div></div>
                <b>1074 руб. </b>
              </li>
            </ul>
            <button className="greenButton">Оформить заказ<img src="img/arrow.svg" alt="arrow" /></button>
            </div>
        </div>
      </div>
    );
}

export default Drawer;