import axios from "axios";
import {useParams, useNavigate} from "react-router-dom";
import {useState} from "react";
import {useEffect} from "react";
import style from "./Detail.module.css";
import {NavLink} from "react-router-dom"

export default function Detail(){

    const [character, setCharacter] = useState([]);
    
    const {id} = useParams();

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);
    
     const navigate = useNavigate();

     const goBack = () => {
          navigate(-1);
        };

    return (
      <div>

        <div className={style.contenedor}>

          
          <img className={style.img} src={character?.image} alt="" /> 
          
          <div className={style.text}>
            <h2>{character?.name}</h2>
            <p><i>status:</i> {character?.status}</p>
            <p><i>gender:</i> {character?.gender}</p>
            <p><i>species:</i> {character?.species}</p>
            <p><i>origin:</i> {character?.origin?.name}</p>
          </div>
          <button className={style.backButton} onClick={goBack}>↩</button>

        </div>
      </div>
    )
};