import React, { useState } from 'react'
import Card from './Card';
import FormStyles from '../css/form.module.css'

const Form = () => {
  const [user, setUser] = useState({
    name: "",
    age:0,
    movie:"",
  })
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const handleChangeName = (e) => {
    setUser({...user, name: e.target.value})
  }
  const handleChangeAge = (e) => {
    setUser({...user, age: e.target.value})
  }
  const handleChangeMovie = (e) => {
    setUser({...user, movie: e.target.value})
  }

  const regex = /[0-9]/

  const handleSubmit = (e) => {
    e.preventDefault();
    const regex=/[0-9]/
    console.log('Regex: ', regex.test(user.age));

    if (
      user.name.trim().length >= 3 &&
      user.name != regex &&
      regex.test(user.age) &&
      user.movie.trim().length >= 6 &&
      (user.age >= 10 && user.age <= 100)
    ) {
      setShow(true)
      setError(false)
    }else{
      setError(true)
    }
  }

  const reset = () => {
    setError(false)
    setShow(false)
    setUser({
      name: '', 
      age: 0,
      movie: ''
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit} className={FormStyles.form}>
          <label >Nombre:</label>
          <input type="text" value={user.name} onChange={handleChangeName} placeholder='Ingrese su nombre'/>
          <label >Edad:</label>
          <input type="number" value={user.age} onChange={handleChangeAge} placeholder='Ingresa tu edad'/>
          <label >Película favorita:</label>
          <input type="text" value={user.movie} onChange={handleChangeMovie} placeholder='Ingresa tu película favorita'/>
          <button>Enviar</button>
        </form>
      {show ? (<Card user = {user} />) : (error ? <h4 style={{color:'red'}}>Por favor revisa que los datos sean correctos</h4> : null)}
      <button onClick={reset}>Volver a intentar</button>
     
    </>
  )
}

export default Form