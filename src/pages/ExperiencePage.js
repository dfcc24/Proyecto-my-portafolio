import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ExperiencePage = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const fetchExperiences = async () => {
      const res = await axios.get('/api/experience');
      setExperiences(res.data);
    };
    fetchExperiences();
  }, []);

  return (
    <div>
      <h2>Experiencia</h2>
      {experiences.map(exp => (
        <div key={exp._id}>
          <h3>{exp.company}</h3>
          <p>{exp.description}</p>
          <p>{exp.startDate} - {exp.endDate}</p>
        </div>
      ))}
    </div>
  );
};

export default ExperiencePage;
