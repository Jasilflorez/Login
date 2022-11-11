import './loggeo.css'
import { DiJenkins } from "react-icons/di";
import { useEffect, useState } from 'react';
const Login= () => {
    const [datos, setDatos]= useState([])
    const iniciar= () => {
        const data:any=[{
        user:'david@gmail.com',
        pass:'1234',
        rol:'Admin'        
        },{
        user:'david@gmail.com',
        pass:'1234',
        rol:'empleado'
        }]
        localStorage.setItem('user',JSON.stringify(data))
        
    }
    useEffect(()=>{
        const data = JSON.parse(localStorage.getItem('user') || '{}')
        iniciar()
        setDatos(data);
    },[])
    const validation =(params:any)=>{      
        const email = params.target.user.value
        const password = params.target.pass.value

        const bool = datos.find((data:any)=>data.user === email && data.pass === password)
        if(bool){
            alert('mafrend iniciaste')
        }else{
                alert("contraseña incorresta O Correo Incorresta")
        }
        
    }
    const onSubmit=(params:any)=>{
        params.preventDefault()
        validation(params)
    }

return (
    <form onSubmit={onSubmit} className='Register' action="">
        <DiJenkins className='Logo_Incono'/>
        <label className='label_register' htmlFor="">
        Email<input name='user' className='inpust_register' placeholder='Ingresa Tu Email' type="email" />
        </label>
        <label className='label_register' htmlFor="">
        Password<input name='pass' className='inpust_register' placeholder='Ingresa Tu Contraseña' type="password" />
        </label>
            <button className='Button_register'>Enviar</button>
    </form>
)
}

export default Login