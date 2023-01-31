import { useEffect } from 'react';import ContentBlock from '../../components/ContentBlock/ContentBlock';
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
        <div className='home-content-container'>
          <ContentBlock
            title='Development'
            content={[
              {
                type: 'text',
                content: "Most of my projects have been in JavaScript, TypeScript, and Java, but I jump at the chance to learn new technologies and techniques."
              },
              {
                type: 'text',
                content: "I prefer to work in environments where pair programming, continuous integration / continuous delivery, and automated testing are encouraged."
              },
              {
                type: 'button',
                text: 'See my work',
                local: true,
                link: '/work'
              }
            ]}
          />
          <Terminal />
        </div>
        <div className='home-content-container'>
          <img src="./assets/pixel-6-mockups.png" className='hero-image' />
          <ContentBlock
            title='Methodology'
            content={[
              {
                type: 'text',
                content: "Working with other developers, designers, and business stakeholders is one of the things I enjoy most about building software. I prefer:"
              },
              {
                type: 'text',
                content: "Working Collaboratively",
                bold: true
              },
              {
                type: 'text',
                content: "Prioritize fast feedback and focus on eliminating communication barriers to get things done efficiently"
              },
              {
                type: 'text',
                content: "Building Iteratively",
                bold: true
              },
              {
                type: 'text',
                content: "Deliver features and products in \"thin slices\" that reach your users early and often, then drive improvements based on feedback"
              },
              {
                type: 'button',
                text: 'more about me',
                local: true,
                link: '/about'
              }
            ]}
          />
        </div>
      </div>
    </>
  );
}

export default Home;