import { useEffect } from 'react';
import ContentBlock from '../../components/ContentBlock/ContentBlock';
import Header from '../../components/Header/Header';
import Terminal from '../../components/Terminal/Terminal';
import './Home.css';

const Home = () => {
  return (
    <>
      <Header />
      <div className='container'>
        <div className='hero'>
          <span>I'm a <span className='highlight'>full stack developer</span> with a background in <span className='highlight'>art and design</span>, currently working as a Senior Consultant at <a href='https://www.thoughtworks.com' target='_blank' rel='noreferrer' className='link'>Thoughtworks</a>.</span>
        </div>
        <div className='hero'>
          <span>I'm passionate about the power of technology to enable creativity.</span>
        </div>
        <div className='terminal-container'>
          <ContentBlock
            title='Methodology'
            content={[
              {
                type: 'text',
                content: "Working closely with other developers, designers, and business stakeholders is one of the things I enjoy most about building software."
              },
              {
                type: 'text',
                content: "I thrive in collaborative environments where I can tackle interesting problems, learn from my colleagues, and be encouraged to share and receive feedback."
              }
            ]}
          />
          <Terminal />
        </div>
        <div className='terminal-container'>
          <ContentBlock
            title='Development'
            content={[
              {
                type: 'text',
                content: "Most of my projects have been in JavaScript, TypeScript, and Java, but I jump at the chance to learn new technologies and techniques."
              },
              {
                type: 'text',
                content: "In my free time, I've been learning Unity and C# to pursue my interest in Game Development."
              },
              {
                type: 'button',
                text: 'See my work',
                local: true,
                link: '/work'
              }
              
            ]}
          />
        </div>
      </div>
    </>
  );
}

export default Home;