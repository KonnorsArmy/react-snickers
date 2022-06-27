import React from 'react';
import styles from './Card.module.scss';



// Вызвал пропс
function Card({title, price, imageUrl, onClickFavorite, onPlus}){
  // Использовал булевое значение чтобы отобразить клик на плюс
  const [isAdded, setIsAdded] = React.useState(false);
  const onClickPlus = () => {
    onPlus({title, price, imageUrl});
    setIsAdded(!isAdded);
  }

    return (
        <div className={styles.card}>
            <div className={styles.favorite} onClick={onClickFavorite}>
              <img src="img/heart-passive.svg" alt="Unliked"/>
            </div>
            <img width={133} height={112} src={imageUrl} alt="Sneaker" />
            {/*Достал из элемента пропс тайл и так же с другими, показывает то что я указал в апп.жс */}
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>{price} руб.</b>
              </div>
              <img
              className={styles.plus} 
              onClick={onClickPlus} 
              src={isAdded ? "/img/plus-active.svg" : "/img/btn-plus.svg" } alt='Plus'
              />
            </div>
        </div>
    );
}

export default Card;