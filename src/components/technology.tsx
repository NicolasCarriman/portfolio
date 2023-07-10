import React from 'react';
import './technology.css';
import { ReactComponent as Lerna } from '../assets/technologies/lerna.svg'
import { ReactComponent as Redux } from '../assets/technologies/redux.svg'
import { ReactComponent as Ts } from '../assets/technologies/typescript.svg'
import { ReactComponent as Next } from '../assets/technologies/next.svg'
import { ReactComponent as Tailwind } from '../assets/technologies/tailwindcss.svg'
import { ReactComponent as Chakra } from '../assets/technologies/chakraui.svg'
import { ReactComponent as Material } from '../assets/technologies/materialui.svg'
import { ReactComponent as ReactSvg } from '../assets/technologies/react.svg'
import { ReactComponent as Webpack } from '../assets/technologies/webpack.svg'
import { ReactComponent as Jest } from '../assets/technologies/jest.svg'
import { ReactComponent as Testing } from '../assets/technologies/testing-library.svg'
import { ReactComponent as Axios } from '../assets/technologies/axios.svg'

export type technologies = | 'lerna'
  | 'next'
  | 'redux'
  | 'ts'
  | 'tailwind'
  | 'chakra'
  | 'material'
  | 'react'
  | 'webpack'
  | 'jest'
  | 'testing'
  | 'axios';

interface Props {
  type: technologies;
  variant?: 'small' | 'medium' 
}

function TechnologyComponent({ type, variant='small' }: Props) {

  const LernaComponent = () => (
    <>
      <Lerna width={variant === 'small' ? '32px' : '64px'} />
      <span>
        lerna
      </span>
    </>
  );

  const TailwindComponent = () => (
    <>
      <Tailwind width={variant === 'small' ? '32px' : '64px'} />
      <span>
        tailwind
      </span>
    </>
  );

  const NextComponent = () => (
    <>
      <Next width={variant === 'small' ? '32px' : '64px'} />
      <span>
        next
      </span>
    </>
  );

  const ReduxComponent = () => (
    <>
      <Redux width={variant === 'small' ? '32px' : '64px'} />
      <span>
        redux
      </span>
    </>
  );

  const TsComponent = () => (
    <>
      <Ts width={variant === 'small' ? '32px' : '64px'} />
      <span>
        typescript
      </span>
    </>
  );

  const ChakraComponent = () => (
    <>
      <Chakra width={variant === 'small' ? '32px' : '64px'} />
      <span>
        chakra-ui
      </span>
    </>
  );

  const MaterialComponent = () => (
    <>
      <Material width={variant === 'small' ? '32px' : '64px'} />
      <span>
        material-ui
      </span>
    </>
  );

  const ReactComponent = () => (
    <>
      <ReactSvg width={variant === 'small' ? '32px' : '64px'} />
      <span>
        react
      </span>
    </>
  );

  const WebpackComponent = () => (
    <>
      <Webpack width={variant === 'small' ? '32px' : '64px'} />
      <span>
        webpack
      </span>
    </>
  );

  const JestComponent = () => (
    <>
      <Jest width={variant === 'small' ? '32px' : '64px'} />
      <span>
        jest
      </span>
    </>
  );

  const TestingComponent = () => (
    <>
      <Testing width={variant === 'small' ? '32px' : '64px'} />
      <span>
        testing Library
      </span>
    </>
  );

  const AxiosComponent = () => (
    <>
      <Axios width={variant === 'small' ? '32px' : '64px'} />
      <span>
        axios
      </span>
    </>
  );

  let Components = {
    redux: <ReduxComponent />,
    ts: <TsComponent />,
    next: <NextComponent />,
    lerna: <LernaComponent />,
    tailwind: <TailwindComponent />,
    material: <MaterialComponent />,
    chakra: <ChakraComponent />,
    testing: <TestingComponent />,
    react: <ReactComponent />,
    jest: <JestComponent />,
    webpack: <WebpackComponent />,
    axios: <AxiosComponent />
  }

  return (
    <div className='technology-container'>
      {Components[type]}
    </div>
  );
}

export default TechnologyComponent;
