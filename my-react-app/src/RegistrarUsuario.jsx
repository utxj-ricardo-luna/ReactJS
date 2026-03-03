import { useState, useEffect } from 'react';
import api from './Services/api'
import './RegistrarUsuario.css'
function RegistrarUsuario({usuarioEditado, limpiarSeleccion, onActualizacionExitosa}){
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(()=>{
        if(usuarioEditado){
            setUsername(usuarioEditado.username);
            setEmail(usuarioEditado.email);
            setPassword(usuarioEditado.password);
        }else{
            resetForm();
        }
    },[usuarioEditado]);

    const resetForm=()=>{
        setUsername('');
        setEmail('');
        setPassword('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const nuevoUsuario = {username, email, password}
        try{
            if(usuarioEditado){
                const respuesta = await api.put(`/users/${usuarioEditado.id}`, nuevoUsuario);
                console.log('Usuario actualizado', respuesta.data);
                alert('¡Usuario actualizado con exito!');
                limpiarSeleccion();
            }else{
                const respuesta = await api.post(`/users/`, nuevoUsuario);
                console.log('Usuario Registrado', respuesta.data);
                alert('¡Usuario Registrado con exito!');  
            }
            resetForm();
            if(onActualizacionExitosa) onActualizacionExitosa();
        }catch (error){
            console.error('Error al registrar:', error);
            alert ('¡Error al procesar la solicitud!');
        }
    }

    return (
        <div>
            <div className="containerForm">
            <h2>Registrar Usuarios</h2>
            <form onSubmit={handleSubmit}>
                <label>Nombre de Usuario:</label>
                <input type="text" name="username" value={username} onChange={(e)=> setUsername(e.target.value)}></input>
                <label>Email:</label>
                <input type="mail" name="email" value={email} onChange={(e)=> setEmail(e.target.value)}></input>
                <label>Password:</label>
                <input type="password" name="password" value={password} onChange={(e)=> setPassword(e.target.value)}></input>
                <button type="submit">Registrar</button>
            </form>
            </div>
        </div>  
    )
}
export default RegistrarUsuario