import styles from './SearchBar.module.css';
import {useState} from 'react';

export default function SearchBar(props) {
   const [id, setStateId] = useState("");

   const handleChange = (event) =>{
      setStateId(event.target.value)
   }

   return (
      <div className={styles.aux}>
         <input onChange={handleChange} className={styles.input} type='search' value={id}></input>
         <button className={styles.button} onClick={()=>{props.onSearch(id); setStateId("")}}><strong>add</strong></button>
      </div>
   );
}
