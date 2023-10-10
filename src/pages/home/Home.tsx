import ContentBlock from '../../components/ContentBlock/ContentBlock';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Terminal from '../../components/Terminal/Terminal';
import './Home.css';

const Home = () => {
  return (
    <>
      <Header />
      <div className='container'>
        {/* <div className='hero'>
          <span>Hey there! I'm Brennan Pilcher.</span>
        </div>
        <div className='hero-subtitle'>
          <span>I'm a <span className='highlight'>full stack developer</span> with a background in <span className='highlight'>art and design</span>, currently working as a Senior Consultant at <a href='https://www.thoughtworks.com' target='_blank' rel='noreferrer' className='link'>Thoughtworks</a>.</span>
        </div> */}
        <div className='home-content-container'>
          <ContentBlock
            id='methodology'
            content={[
              {
                type: 'heading',
                text: "Methodology"
              },
              {
                type: 'text',
                text: "Working with other developers, designers, and business stakeholders is one of the things I enjoy most about building software. I prefer:"
              },
              {
                type: 'heading',
                text: "Working Collaboratively",
                isSubheading: true
              },
              {
                type: 'text',
                text: "Prioritize fast feedback and focus on eliminating communication barriers to get things done efficiently"
              },
              {
                type: 'heading',
                text: "Building Iteratively",
                isSubheading: true
              },
              {
                type: 'text',
                text: "Deliver features and products in \"thin slices\" that reach your users early and often, then drive improvements based on feedback"
              },
              {
                type: 'button',
                text: 'more about me',
                local: true,
                link: '/about'
              }
            ]}
          />
          <Terminal />
        </div>
        <div className='home-content-container'>
          <img src="./assets/pixel-6-mockups.png" alt='mobile app examples' className='hero-image' />
          <ContentBlock
            id='development'
            content={[
              {
                type: 'heading',
                text: "Development"
              },
              {
                type: 'text',
                text: "I've worked in a variety of contexts and roles, from Fortune 500 to non-profit and individual contributor to tech lead. I do my best to cultivate a balance between breadth and depth of technical expertise so that I can be effective as an adivisor as well as when I'm writing code."
              },
              {
                type: 'text',
                text: "Most of my projects have been in JavaScript, TypeScript, and Java, but I jump at the chance to learn new technologies, techniques, and architectural patterns."
              },
              {
                type: 'text',
                text: "I prefer to work in environments where pair programming, continuous integration / continuous delivery, and automated testing are encouraged."
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
      <Footer />
    </>
  );
}

export default Home;