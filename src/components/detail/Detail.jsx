import axios from "axios";
import {useParams} from "react-router-dom";
import {useState} from "react";
import {useEffect} from "react";
import style from "./Detail.module.css";
import {NavLink} from "react-router-dom"

export default function Detail(){

    const [character, setCharacter] = useState([]);
    
    const {id} = useParams();

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);
    

    return (
        <div className={style.contenedor}>

          <div className={style.img}>
          <img src={character?.image} alt="" /> 
          </div>
          <NavLink to="/favorites"><button className={style.backButton}>↩</button></NavLink>
          <div className={style.text}>
            <h2>{character?.name}</h2>
            <p>{character?.status}</p>
            <p>{character?.gender}</p>
            <p>{character?.species}</p>
            <p>{character?.origin?.name}</p>
          </div>

        </div>
    )
};