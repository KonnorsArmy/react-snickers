import styles from './Card.module.scss';


// Вызвал пропс
function Card(props){
    return (
        <div className={styles.card}>
            <div className={styles.favorite}>
              <img src="img/heart-passive.svg" alt="Unliked"/>
            </div>
            <img width={133} height={112} src={props.imageUrl} alt="Sneaker" />
            {/*Достал из элемента пропс тайл и так же с другими, показывает то что я указал в апп.жс */}
            <h5>{props.title}</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>{props.price} руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="img/plus.svg" />
              </button>
            </div>
        </div>
    );
}

export default Card;