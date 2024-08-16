import React from "react";
import CardStyles from '../css/card.module.css'

const Card = ({user}) => {
  return (
    <div className={CardStyles.cardContainer}>
      <h4>Hola {user.name}!</h4>
      <h4>Nos encanta que a tus {user.age} años te guste:</h4>
      <h4>{user.movie}</h4>
    </div>
  );
};


export default Card;