import { useState, useEffect } from 'react';
import api from './Services/api'
import './Registrarproducto.css'
function RegistrarProducto({productoEditado, limpiarSeleccion, onActualizacionExitosa}){
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');

    useEffect(()=>{
        if(productoEditado){
            setTitle(productoEditado.title);
            setPrice(productoEditado.price);
            setDescription(productoEditado.description);
            setCategory(productoEditado.category);
            setImage(productoEditado.image);
        }else{
            resetForm();
        }
    },[productoEditado]);

    const resetForm=()=>{
        setTitle('');
        setPrice('');
        setDescription('');
        setCategory('');
        setImage('')
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const nuevoProducto = {title, price, description,category,image}
        try{
            if(productoEditado){
                const respuesta = await api.put(`/products/${productoEditado.id}`, nuevoProducto);
                console.log('Producto actualizado', respuesta.data);
                alert('¡Producto actualizado con exito!');
                limpiarSeleccion();
            }else{
                const respuesta = await api.post(`/products/`, nuevoProducto);
                console.log('Producto Registrado', respuesta.data);
                alert('Producto Registrado con exito!');  
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
            <h2>Registrar Productos</h2>
            <form onSubmit={handleSubmit}>
                <label>Titulo:</label>
                <input type="text" name="title" value={title} onChange={(e)=> setTitle(e.target.value)}></input>
                <label>Precio:</label>
                <input type="number" name="price" value={price} onChange={(e)=> setPrice(e.target.value)}></input>
                <label>Descripción:</label>
                <input type="text" name="description" value={description} onChange={(e)=> setDescription(e.target.value)}></input>
                <label>Categoria:</label>
                <input type="text" name="category" value={category} onChange={(e)=> setCategory(e.target.value)}></input>
                <label>Imagen:</label>
                <input type="text" name="image" value={image} onChange={(e)=> setImage(e.target.value)}></input>
                <button type="submit">Registrar</button>
            </form>
            </div>
        </div>  
    )
}
export default RegistrarProducto