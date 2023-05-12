import Card from '../card/Card';
import styles from './Cards.module.css';

 const Cards = (props) => {
      const {characters} = props;
      const {onClose} = props;

   return (<>
      {characters.map(x => {
   return (
      <div className={styles.carta}>
      <Card
      key={x.id}
      id={x.id}
      name={x.name}
      status={x.status}
      species={x.species}
      gender={x.gender}
      origin={x.origin.name}
      image={x.image}
      onClose={onClose}
      />
      </div>
   )
})}
</>)
}
export default Cards;