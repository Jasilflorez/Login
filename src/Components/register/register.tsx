function Register() {
return (
<div className='contenido-1'>
            <form className="register">
                <div className='input-1'>
                    <label className='input-label-1'>Name</label>
                    <input type="text" name='user' className='input-field-1' placeholder="Alexander Parkinson" />
                </div>
                <div className='input-1'>
                    <label className='input-label-1'>Password</label>
                    <input type="password" name='pass' className='input-field-1' />
                </div>
                <div className='input-1'>
                    <label className='input-label-1'>Empresa</label>
                    <input type="text" name='empresa' className='input-field-1' />
                </div>
                <div className="botones">
                    <button className="btn-a-1" type="submit">Registrarse</button>
                </div>
            </form>
        </div>
)
}
export default Register
