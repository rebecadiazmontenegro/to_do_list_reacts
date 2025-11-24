import React from "react";
import './Card.css'


const Card = ({ data, remove }) => {
  const { titulo, descripcion, fecha_creacion, fecha_limite } = data;

  return (
    <article className="infoTarea">
      <h4>{titulo || "--"}</h4>
      <h5>Descripción</h5>
      <p>{descripcion || "--"}</p>
      <div className="infoFechas">
        <h5>Fecha de creación:</h5>
        <br/>
        <p>{fecha_creacion || "--"}</p>
        <h5>Fecha límite:</h5>
        <br/>
        <p>{fecha_limite || "--"}</p>
      </div>
      <button className="removeBoton" onClick={remove}>Borrar tarea</button>
    </article>
  );
};

export default Card;
