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

  async function onSearch(id) {
     const {data} = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
     try {
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
         window.alert('¡No hay personajes con este ID!');
      }
     } catch (error) {
      throw Error(error);
     }
   }

   const onClose = (id)=>{
      const characterFiltered = characters.filter(char => char.id !== Number(id))
      setCharacters(characterFiltered)
   }
   
   const [access, setAccess] = useState(false);

  
   const navigate = useNavigate();
   
   // const login = (userData)=>{
   //   if(EMAIL === userData.email && PASSWORD === userData.password){
   //    setAccess(true);
   //    navigate("/home")
   //   }
   // }

   async function login(userData) {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      const {data} = await axios(URL + `?email=${email}&password=${password}`)
      try {
         const { access } = data;
         setAccess(access);
         access && navigate('/home');
      } catch (error) {
         throw Error(error)
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


// .then(({ data }) => {
//    if (data.name) {
//       setCharacters((oldChars) => [...oldChars, data]);
//    } else {
//       window.alert('¡No hay personajes con este ID!');
//    }
// });

// .then(({ data }) => {
//    const { access } = data;
//    setAccess(access);
//    access && navigate('/home');
// });