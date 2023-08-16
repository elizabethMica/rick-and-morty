import {useState} from "react";
import Validation from "./Validation";
import style from "./Form.module.css";

export default function Form ({login}){
    
    const [errors, setErrors] = useState({})
    
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })
    
    const handleChange = (event)=>{
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })

        setErrors(Validation({
           ...userData,
           [event.target.name]: event.target.value
        }))
    }

    

    const handleSubmit = (event) => {
      event.preventDefault();
      login(userData);
    }

    return(
        <div className={style.formContainer}>
            <form >
                <h1 className={style.titulo}>Inicie sesión</h1>
                <label className={style.labelEmail} htmlFor="email"><strong>email:</strong></label>
                <br></br>
                <input  className={style.inputForm} name="email" type="email" placeholder="ingrese su mail" value={userData.email} onChange={handleChange}/>
                <p className={style.erroresEmail} style={{ visibility: errors.email ? 'visible' : 'hidden' }}>{errors.email}</p>
                <br/>
                <br/>
                <label className={style.labelPassword} htmlFor="password"><strong>password:</strong></label>
                <br></br>
                <input className={style.inputForm} name="password" type="password" placeholder="password" value={userData.password} onChange={handleChange}/>
                <p className={style.erroresPassword} style={{ visibility: errors.password ? 'visible' : 'hidden' }}>{errors.password}</p>
                <button className={style.submit} onClick={handleSubmit}>submit</button>
            </form>
        </div>
    )
}

