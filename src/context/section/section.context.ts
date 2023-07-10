import { Dispatch, SetStateAction, createContext, useContext } from "react";

export type section = | 'Proyectos'
  | 'Tecnologias'
  | 'Home'
  | 'Contacto'
  | 'Perfil';

export interface ISectionContext {
  currentSection: string,
  setCurrentSection: Dispatch<SetStateAction<section>>, 
}

export const SectionContext = createContext<ISectionContext>({
  currentSection: '',
  setCurrentSection: () => {},
});

export const useGlobalContext = () => useContext(SectionContext);
