import React from "react";
import './Card.css'


const Card = ({ data, remove }) => {
  const { titulo, descripcion, fecha_creacion, fecha_limite } = data;

  return (
    <div>
      <h4>{titulo || "--"}</h4>
      <p>{descripcion || "--"}</p>
      <p>{fecha_creacion || "--"}</p>
      <p>{fecha_limite || "--"}</p>
      <button onClick={remove}>Borrar tarea</button>
    </div>
  );
};

export default Card;
