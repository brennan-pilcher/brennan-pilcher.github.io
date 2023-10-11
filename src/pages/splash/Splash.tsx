import CodeBackground from '../../components/CodeBackground/CodeBackground';
import ContentBlock from '../../components/ContentBlock/ContentBlock';
import Footer from '../../components/Footer/Footer';
import './Splash.css';

// TODO implement typing effect on subtitle
const descriptors = [
  'full stack developer',
  'tech lead',
  'photography enthusiast',
  'gamer',
  'senior consultant',
  'animal lover',
  'traveler',
  'typescript fan',
  '3D modeler',
  'rock climber',
  'Baltimore ➡️ Brooklyn ➡️ Oakland',
  'hiker',
]

const Splash = () => {
    return (
        <>
          <CodeBackground />
          <div className='splash-container'>
            <div className='splash-title-container'>
              <div className='splash-title'><span className='splash-first-name'>Brennan</span> <span className='splash-last-name'>Pilcher</span></div>
              <span className='splash-subtitle'>code + design</span>
            </div>
            <div className='splash-body'>
                <span>I'm a senior full-stack software developer with a background in art and design and a passion for creating engaging, thoughtful, and inclusive digital experiences.</span>
                <span>I'm currently a Senior Consultant at <a className="body-link" rel="noreferrer" target="_blank" href="https://www.thoughtworks.com/">Thoughtworks</a>, where I've been working with and leading teams to deliver robust, performant, and testable software for the last five years.</span>
                <span>When I'm not coding, you can usually find me behind a camera, on a rock climbing wall, hiking, or gaming with friends.</span>
              </div>
            <div className='splash-button-wrapper'>
              <ContentBlock
                id='methodology'
                content={[
                  {
                    type: 'button',
                    text: 'take a look',
                    local: true,
                    link: '/home'
                  }
                ]}
              />
            </div>
            <div className='social-links'>
              <Footer />
            </div>
          </div>
        </>
      );
}

export default Splash;