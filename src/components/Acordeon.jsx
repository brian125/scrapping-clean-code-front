import React from "react";
import { Accordion } from "react-bootstrap";

const Acordeon = ({ pelicula }) => {
  return (
    <>
    <Accordion.Header>{pelicula.nombre}</Accordion.Header>
    <Accordion.Body>
      <strong>Nombre de la pelicula: </strong>{pelicula.nombre} <br /> <br />
      <strong>Descripcion: </strong>{pelicula.descripcion} <br />
      <strong>Genero: </strong>{pelicula.genero} <br />
      <strong>Año: </strong> {pelicula.agno} <strong> Duración: </strong>{pelicula.duracion} <br />
      
      <a href={pelicula.url} target="_blank">Enlace</a>

    </Accordion.Body>
    </>
  );
};

export default Acordeon;
