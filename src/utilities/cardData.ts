import { IProject } from "../models/project.model";
import task1 from '../assets/portfolio/task1.png'
import task2 from '../assets/portfolio/task2.png';
import travel1 from '../assets/portfolio/traveler1.png';
import travel2 from '../assets/portfolio/traveler2.png';

export const cardData: IProject[] = [
  {
    tittle: 'T-Task',
    imgs: [
      task1,
      task2
    ],
    descriptions: [
      'T-Task es un administrador de tareas que facilita la colaboración de los miembros en una organización.',
      'El objetivo principal de este proyecto es garantizar la eficiencia en el logro de metas.'
    ],
    links: {
      github: 'https://github.com/NicolasCarriman/monorepo-next13-Redux-RTK',
      demo: 'https://monorepo-next13-redux-rtk-task-app.vercel.app/'
    },
    technoloiges: [
      'lerna',
      'next',
      'redux',
      'tailwind',
      'ts',
      'webpack'
    ]
  },
  {
    tittle: 'TimeTraveler',
    imgs: [
      travel1,
      travel2
    ],
    descriptions: [
      'TimeTraveler es un visualizador de itinerarios con integración de terceros.',
      'El objetivo principal de este proyecto es desarrollar una interfaz flexible para empresas del sector turístico.'
    ],
    links: {
      github: 'https://github.com/NicolasCarriman/timetraveler',
      demo: 'https://nicolascarriman.github.io/timetraveler/'
    },
    technoloiges: [
      'react',
      'redux',
      'chakra',
      'ts',
    ]
  }
];
