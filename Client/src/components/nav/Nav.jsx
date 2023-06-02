import SearchBar from '../searchbar/SearchBar';
import {NavLink }from "react-router-dom"
import style from "./Nav.module.css"



const Nav = (props) => {
 
    return (
        <div className={style.nav}>
             <NavLink className={style.link} to={"/home"}>
                <button className={style.home} >Home</button>
            </NavLink>

            <NavLink className={style.link} to={"/about"}>
                <button className={style.about}>About</button>
            </NavLink>

            <NavLink className={style.link} to={"/favorites"}>
                <button className={style.fav} >Favorites</button>
            </NavLink>

            <SearchBar onSearch={props.onSearch}/>

            <NavLink className={style.link} to={"/"}>
                <button className={style.logout} onClick={()=>alert("Gracias por su visita! Esperamos que vuelva pronto!")}>Log out</button>
            </NavLink>
        </div>
    )
};

export default Nav;