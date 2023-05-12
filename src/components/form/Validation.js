


export default function Validation (userData){
    let errors={};
     
    if(!(/\S+@\S+.\S+/).test(userData.email)){
        errors.email = "Formato de email incorrecto."
    }

    if(!userData.email){
        errors.email = "Se debe ingresar un email."
    }

    if(userData.email.length > 35){
        errors.email = "El mail no debe superar los 35 caracteres"
    }


    if(userData.password.length < 6 || userData.password.length >10){
            errors.password = "La contraseña debe ser entre 6 y 10 caracteres."
    }

    if(!/.\d+./.test(userData.password)){
        errors.password = "Debe contener al menos un número"
    }

    
    return errors;

}



