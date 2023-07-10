import { useState } from "react";
import { SectionContext, section } from "./section/section.context";

interface ContextPropvider {
  children: React.ReactNode;
}

export const MyContextProvider: React.FC<ContextPropvider> = ({ children }) => {
  const [currentSection, setCurrentSection] = useState<section>('Home');

  return (
    <SectionContext.Provider value={{ currentSection, setCurrentSection }}>
      {children}
    </SectionContext.Provider>
  );
};
