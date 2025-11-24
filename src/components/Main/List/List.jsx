import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Card from "./Card";
import Tareas from "../../../tareas.json";

const List = () => {
  const tareas = Tareas;

  const [items, setItems] = useState([]); //Array de items a representar

  // Estado inicial del formulario
  const [values, setValues] = useState({
    titulo: "",
    descripcion: "",
    fecha_creacion: "",
    fecha_limite: "",
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  //Sustituye al document.getElementById("Formulario").addEvenListener("submit")...
  const handleSubmit = (e) => {
    e.preventDefault();

    setItems([...items, values]); //Concatena los productos metidos por le formulario según se van añadiendo
    setValues({ // Limpia los campos del input
      titulo: "",
      descripcion: "",
      fecha_creacion: "",
      fecha_limite: "",
  });
  };

  const paintData = () =>
    items.map((item, index) => (
      <Card data={item} remove={() => deleteTarea(index)} key={uuidv4()} />
    ));
  const resetTareas = () => setItems(tareas);
  const removeList = () => setItems([]); //Borra todos
  const deleteTarea = (i) => {
    const filteredItems = items.filter((item, index) => index !== i);
    setItems(filteredItems); // Carga el estado con los items restantes
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="titulo">Título</label>
        <br />
        <input
          type="text"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
          required
        />
        <br />

        <label htmlFor="descripcion">Descripción</label>
        <br />
        <input
          type="text"
          name="descripcion"
          value={values.descripcion}
          onChange={handleChange}
          required
        />
        <br />

        <label htmlFor="fecha_creacion">Fecha de creación</label>
        <br />
        <input
          type="date"
          name="fecha_creacion"
          value={values.fecha_creacion}
          onChange={handleChange}
          required
        />
        <br />

        <label htmlFor="fecha_limite">Fecha límite</label>
        <br />
        <input
          type="date"
          name="fecha_limite"
          value={values.fecha_limite}
          onChange={handleChange}
          required
        />
        <br />
        {values.titulo &&
        values.descripcion &&
        values.fecha_creacion &&
        values.fecha_limite ? (
          <button type="submit">Añadir tarea</button>
        ) : (
          <p>"Completa los campos"</p>
        )}
      </form>
      <button onClick={removeList}>Borrar lista</button>
      <button onClick={resetTareas}>Resetear lista</button>
      {paintData()}
    </div>
  );
};

export default List;
