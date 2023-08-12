import React, { useState } from 'react';
import './technology.css';
import { ReactComponent as Linkedin } from '../assets/contact/linkedin.svg'
import { ReactComponent as Gmail } from '../assets/contact/gmail.svg'
import { ReactComponent as Github } from '../assets/contact/github.svg'
import './social.css';

export type socialType = | 'linkedin'
  | 'github'
  | 'gmail';

interface Props {
  type: socialType;
}

function Social({ type }: Props) {
  const [ isHover, setIsHover ] = useState(false);

  const LinkedinComponent = () => (
    <>
      <Linkedin height={'100px'} width={'100px'} fill='white'/>
    </>
  );

  const GitHubComponent = () => (
    <>
      <Github width={'64px'} />
    </>
  );

  const GmailComponent = () => (
    <>
      <Gmail width={'100px'} fill='white' />
    </>
  );

  interface LinkProps {
    href: string;
    label: string;
  }

  const LinkComponent: React.FC<LinkProps> = ({ href, label }) => {
    return (
      <div className='social-links'>
        <a href={label === 'Email' ? 'mailto:' + href : href} >{label}</a>
        <p>{href}</p>
      </div>
    );
  };

  let components = {
    linkedin: <LinkedinComponent />,
    github: <GitHubComponent />,
    gmail: <GmailComponent />
  }

  let links = {
    linkedin: <LinkComponent href={'https://www.linkedin.com/in/nicolas-carriman-181601163/'} label={'Linkedin'} />,
    github: <LinkComponent href={'https://github.com/NicolasCarriman'} label={'Github'} />,
    gmail: <LinkComponent href={'nicolascarriman045@gmail.com'} label={'Email'} />
  }

  return (
    <div
      className='social-content'
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {
        isHover ? links[type]
        : components[type]
      }
      <div className='contact-mask'/>
    </div>
  );
}

export default Social;
