import Card from "../card/Card";
import {connect, useDispatch } from "react-redux";
import styles from "./Favorites.module.css";
import {filterCards, orderCards} from "../../redux/action";
import { useState } from "react";

const Favorites = ({myFavorites})=>{

    // const [aux, setAux] = useState(false);

    const dispatch = useDispatch();

    const handleOrder = (event)=>{
        if(aux){
            dispatch(orderCards(event.target.value))
        }else{
            setAux(!aux)
        }
    }
    
    const handleFilter = (event)=>{
        dispatch(filterCards(event.target.value))
    }

    return (
        <>
        <select className={styles.ascDes} onChange={handleOrder}>
            <option value="A">Ascendente</option>
            <option value="D">Descendente</option>
        </select>
        <select className={styles.filter} onChange={handleFilter}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
        </select>
        {
            myFavorites?.map(fav =>{
               return(
                <div className={styles.carta}>
                <Card 
                   key={fav.id}
                   id={fav.id}
                   name={fav.name}
                   image={fav.image}
                />
                </div>
               )
            })
        }
        </>
    )
}

// const mapStateToProps = (state) =>{
//     return{
//         myFavorites: state.myFavorites
//     }
// }

// export default connect (
//     mapStateToProps,
//     null
// )(Favorites);