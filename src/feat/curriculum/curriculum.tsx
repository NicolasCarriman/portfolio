import React from 'react'
import Container from '../../components/container';
import './curriculum.css';
import curriculum from '../../assets/cv/NicolasCarrimanFrontend.pdf';
import { useGlobalContext } from '../../context/section/section.context';

function Curriculum() {
  const { currentSection } = useGlobalContext();
  return (
    <Container>
        <div className={currentSection === 'Perfil' ? 'cv-content': 'cv-hidden'}>
          < div className='cv-description'>
            <p>
              En 2021, junto con amigos, formamos un equipo con el objetivo de aportar una nueva visión que impacte positivamente al mundo a través del desarrollo de un producto digital.
            </p>
            <p>
              Con el tiempo, nos potenciamos mutuamente gracias a la retroalimentación constante y al intercambio de conocimientos. Adoptamos metodologías ágiles, como Trello y Kanban, para mejorar nuestra eficiencia y colaboración.
            </p>
            <p>
              A medida que avanzaba mi pasión por el desarrollo web se intensificó. Adquirí experiencia en tecnologías como React y TypeScript, y encontré una gran motivación en seguir aprendiendo y explorando nuevas tecnologías emergentes.
            </p>
            <p>
              Mi enfoque preferido para abordar tareas se basa en la planificación estratégica. Me gusta sumergirme en los requerimientos del negocio y tener un profundo entendimiento de ellos. Esto me permite proporcionar soluciones óptimas.
            </p>
          </div>
          <div className='cv-downuload'>
            <a href={curriculum} download>Descargar Curriculum</a>
          </div>
        </div>
    </Container >
  )
}

export default Curriculum;
