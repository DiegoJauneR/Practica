import React from "react";
import "./Malla.css";
import { subjects } from "./assets/subjects.json";
import { useState } from "react";
import { useEffect } from "react";

function ListaComponentes() {
  const [semestres, setSemestres] = useState({});
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [prevSubjects, setPrevSubjects] = useState([]);
  const [nextSubjects, setNextSubjects] = useState([]);

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

  const handleButtonClick = (subject) => {
    setSelectedSubject(subject);

    const subjectData = subjects.find((subj) => subj.name === subject);
    const prev = subjectData.prev || [];
    const next = subjectData.next || [];

    setPrevSubjects(prev);
    setNextSubjects(next);
  };

  return (
    <div className="cotainermalla">
      {Object.keys(semestres).map((semester) => (
        <div key={semester}>
          <h2>Semestre {semester}</h2>
          {semestres[semester].map((subject, index) => (
            <button
              key={index}
              onClick={() => handleButtonClick(subject)}
              className={
                selectedSubject === subject
                  ? "selected"
                  : prevSubjects.includes(subject)
                  ? "prev"
                  : nextSubjects.includes(subject)
                  ? "next"
                  : ""
              }
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
