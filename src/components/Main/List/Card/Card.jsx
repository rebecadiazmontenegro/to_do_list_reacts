import React, { useState } from "react";
import "./Card.css";

const Card = ({ data, remove, edit }) => {
  const { titulo, descripcion, fecha_creacion, fecha_limite } = data;

  const [isEditing, setIsEditing] = useState(false);
  const [editValues, setEditValues] = useState({ ...data });

  const [isDone, setIsDone] = useState(false);

  const handleEditChange = (e) => {
    setEditValues({
      ...editValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    console.log(editValues);
    edit(editValues);
    setIsEditing(false);
  };

  return (
    <article className="infoTarea">
      <h4
        style={{
          textDecoration: isDone ? "line-through" : "none",
          fontWeight: isDone ? "300" : "600",
        }}
      >
        {titulo}
      </h4>
      {!isDone && (
        <>
          <h5>Descripción</h5>
          <p>{descripcion}</p>

          <div className="infoFechas">
            <h5>Fecha de creación:</h5>
            <p>{fecha_creacion}</p>

            <h5>Fecha límite:</h5>
            <p>{fecha_limite}</p>
          </div>
        </>
      )}
      <div className="botonesCard">
        <button className="removeBoton" onClick={remove}>
          Borrar tarea
        </button>
        <button className="tacharBoton" onClick={() => setIsDone(!isDone)}>
          {isDone ? "Deshacer tachado" : "Tachar tarea"}
        </button>

        <button className="editBoton" onClick={() => setIsEditing(true)}>
          Editar
        </button>
      </div>
      {isEditing && (
        <form className="editForm" onSubmit={handleEditSubmit}>
          <input
            type="text"
            name="titulo"
            value={editValues.titulo}
            onChange={handleEditChange}
          />
          <input
            type="text"
            name="descripcion"
            value={editValues.descripcion}
            onChange={handleEditChange}
          />
          <input
            type="date"
            name="fecha_creacion"
            value={editValues.fecha_creacion}
            onChange={handleEditChange}
          />
          <input
            type="date"
            name="fecha_limite"
            value={editValues.fecha_limite}
            onChange={handleEditChange}
          />
          <div className="editFormBoton">
            <button className="guardarBoton" type="submit">
              Guardar
            </button>
            <button
              className="cancelarBoton"
              type="button"
              onClick={() => setIsEditing(false)}
            >
              Cancelar
            </button>
          </div>
        </form>
      )}
    </article>
  );
};

export default Card;
