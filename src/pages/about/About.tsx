import ContentBlock from '../../components/ContentBlock/ContentBlock';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import './About.css';

const About = () => {
  return (
    <>
      <Header />
      <div className='container'>
        <div className='about-content'>
          <ContentBlock
            id='about'
            animate={true}
            content={[
              {
                type: 'heading',
                text: 'Who I Am'
              },
              {
                type: 'text',
                text: "I'm a technologist with a passion for creating engaging, well-designed digital experiences. I love to learn, and in my professional life that means always looking for opportunities to explore new techniques, technologies, methodologies, and design philosophies."
              },
              {
                type: 'heading',
                isSubheading: true,
                text: "My experience"
              },
              {
                type: 'text',
                text: "For the last four and a half years I have been working as a software development consultant for Thoughtworks, working on a variety of different projects for organizations and on teams of all sizes. In addition to contributing as a developer, I've also played the Tech Lead role several times and enjoy utilizing my non-technical skills to help facilitate effective collaboration within and between teams."
              },
              {
                type: 'heading',
                isSubheading: true,
                text: "Some fun facts about me"
              },
              {
                type: 'text',
                text: "I love photography — primarily landscapes and architecture."
              },
              {
                type: 'text',
                text: "I studied abroad on a ship, visiting more than a dozen countries by sea."
              },
              {
                type: 'text',
                text: "I've been learning 3D modeling and animation with Blender."
              }
            ]}
          />
          <img className='about-portrait' alt='portrait' src='./assets/birb.jpg' />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default About;