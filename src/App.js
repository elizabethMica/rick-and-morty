import './App.css';
import axios from "axios"
import {useState} from "react"
import Cards from './components/cards/Cards.jsx';
import {Routes, Route, useLocation} from "react-router-dom";
import Nav from './components/nav/Nav.jsx'
import About from './components/about/About.jsx';
import Detail from './components/detail/Detail.jsx';
import Form from "./components/form/Form.jsx"
import { useNavigate } from 'react-router-dom';
import  {useEffect } from 'react';
import Favorites from './components/favorites/Favorites';




function App() {

   let [characters, setCharacters] = useState([]);

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }
   const onClose = (id)=>{
      const characterFiltered = characters.filter(char => char.id !== Number(id))
      setCharacters(characterFiltered)
   }
   
   const [access, setAccess] = useState(false);

   const EMAIL = "gurdzelm@gmail.com";
   const  PASSWORD = "123456mica";
   const navigate = useNavigate();
   
   const login = (userData)=>{
     if(EMAIL === userData.email && PASSWORD === userData.password){
      setAccess(true);
      navigate("/home")
     }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);



   return (
      <div className='App'>
        
            <div>
            {!((useLocation()).pathname==="/") && <Nav path="/:" onSearch={onSearch}></Nav>}
            </div>
         <Routes>
            <Route path="/" element={<Form login={login}/>}/>
            <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/detail/:id" element={<Detail/>} />
            <Route path="/favorites" element={<Favorites/>}/>
         </Routes>
      </div>
   );
}

export default App;
