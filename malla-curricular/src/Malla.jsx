import React from "react";
import "./Malla.css";
import { subjects } from "./assets/subjects.json";
import { useState } from "react";
import { useEffect } from "react";

function ListaComponentes() {
  const [semestres, setSemestres] = useState({});
  useEffect(() => {
    const groupedSubjects = {};
    subjects.forEach((subject) => {
      const { semester, name } = subject;
      if (!groupedSubjects[semester]) {
        groupedSubjects[semester] = [];
      }
      groupedSubjects[semester].push(name);
    });
    setSemestres(groupedSubjects);
  }, []);

  const colores = (asignatura) => {
    const prev = subjects.find((subject) => subject.name === asignatura);
    return prev;
  };

  return (
    <div>
      <h2>Lista de Semestres</h2>
      {Object.keys(semestres).map((semester) => (
        <div key={semester}>
          <h2>Semestre {semester}</h2>
          {semestres[semester].map((subject, index) => (
            <button
              key={index}
              onClick={() => {
                console.log(colores(subject));
              }}
            >
              {subject}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}

export default ListaComponentes;
