import styles from './Card.module.css';
import {NavLink} from "react-router-dom";
import { addFav, removeFav } from '../../redux/action';
import {connect} from "react-redux";
import {useState, useEffect} from "react";

function Card({id, name, image, onClose, addFav, removeFav, myFavorites}) { 

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () =>{
      if(isFav){
         setIsFav(false);
         removeFav(id);
      }
      else{
         setIsFav(true);
         addFav({id, name, image})
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={styles.contenedor}>
        

         <img className={styles.imagen} src={image} alt='' /> 

             <NavLink to={`/detail/${id}`} id={id}>
                <p className={styles.cardText}><strong>{name}</strong></p>
             </NavLink>

          <button onClick={handleFavorite}>{isFav ? "❤️" : "🤍"}</button>  
         <button className={styles.boton} onClick={()=>onClose(id)}><strong>close</strong></button>
       
      </div>
   );
}

const mapStateToProps = (state) =>{
   return{
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProp =(dispatch)=>{
   return {
      addFav: (character)=>{dispatch(addFav(character))},
      removeFav: (id)=>{dispatch(removeFav(id))}
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProp
)(Card);



{/* <p><i>Status: </i><strong>{props.status}</strong></p>
         <p><i>Species: </i><strong>{props.species}</strong></p> */}
         {/* <p><i>Gender: </i><strong>{props.gender}</strong></p> */}
         {/* <p>Origin:{props.origin}</p> */}