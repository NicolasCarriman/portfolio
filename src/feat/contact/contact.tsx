import React from 'react'
import Container from '../../components/container';
import './contact.css';
import Social, { socialType } from '../../components/social';

function Contact() {
  const netWorks: socialType[] = [
    'linkedin',
    'gmail',
    'github'
  ]
  return (
    <Container>
      <div className='contact-content'>
        {
          netWorks.map((social)=> (
            <>
              <Social key={social} type={social}/>
            </>
          ))
        }
      </div>
    </Container>
  )
}

export default Contact;
