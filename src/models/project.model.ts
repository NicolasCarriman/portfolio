import { technologies } from "../components/technology";

export type linkType = {
  github: string,
  demo: string,
}

export interface IProject {
  imgs: string[];  
  tittle: string;
  descriptions: string[];
  links: linkType;
  technoloiges: technologies[];
}
