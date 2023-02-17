import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import ProjectPanel from '../../components/ProjectPanel/ProjectPanel';
import './Work.css';

const Work = () => {
  return (
    <>
      <Header />
      <div className='container'>
        <div className='work-section-title'>
          <span>Client Work</span>
        </div>
        <div className='work-summary'>
          <span>
            I can't share a lot of details about my professional work — as a consultant, most projects have been under non-disclosure agreements. However, I can share some project highlights with any sensitive information redacted.
          </span>
        </div>
        <div className='projects'>
          <ProjectPanel
            title={'Pizza Chain'}
            description={"Developed a replacement website for a national pizza chain serving millions of customers a day. Individual contributor on the cart and checkout flow team and Tech Lead for the non-pizza product pages team."}
            tags={['typescript', 'next.js', 'redux', 'jest', 'react testing library', 'docker', 'kubernetes']}
            imageSrc={'./assets/pizza-portrait.jpg'}
          />
          <ProjectPanel
            title={'Sports Analytics Firm'}
            description={"Client wanted to totally rebuild their mobile application from the ground up with React Native in a short span of time. I helped to build out the app's core content experience, focusing on the article view, news feed, and data fetching / caching architecture."}
            tags={['typescript', 'react native', 'redux', 'jest']}
            imageSrc={'./assets/sports-portrait.jpg'}
          />
          <ProjectPanel
            title={'Global Consultancy'}
            description={"Worked on a full-stack internal web application with a React frontend and a backend supported by Solr and Spring Boot microservices. Contributed significantly to the design and the implementation of a new recommendations microservice as well as real-time notifications for users."}
            tags={['typescript', 'react', 'redux', 'java', 'spring boot', 'solr', 'redis', 'junit', 'docker', 'kubernetes']}
            imageSrc={'./assets/consultancy-portrait.jpg'}
          />
          <ProjectPanel
            title={'Grocery Retailer'}
            description={"Developed microservices to replace a business-critical system that will eventually be scaled to hundreds of thousands of daily users and millions of transactions with Spring Boot and Docker, deployed on Kubernetes in Azure."}
            tags={['java', 'spring boot', 'junit', 'docker', 'kubernetes']}
            imageSrc={'./assets/grocery-portrait.jpg'}
          />
          <ProjectPanel
            title={'News Non-Profit'}
            description={"Contributed to the development and architecture of a React Native mobile application as well as maintenance and upgrades on the Ruby on Rails website and API layer."}
            tags={['javascript', 'react native', 'redux', 'jest', 'ruby on rails']}
            imageSrc={'./assets/news-portrait.jpg'}
          />
          <ProjectPanel
            title={'Smart Home Startup'}
            description={"Contributed to a technical assessment analyzing the quality of the client's code, provided insights on architecture and workflow, and presented a report on our findings and recommendations to C-level executives."}
            tags={[]}
            imageSrc={'./assets/smart-home-portrait.jpg'}
          />
        </div>
        <div className='work-section-title'>
            <span>Personal Projects</span>
          </div>
          <div className='work-summary'>
            <span>
              Things built in my spare time for the purposes of learning, honing skills, and enjoyment.
            </span>
          </div>
          <div className='projects'>
            <ProjectPanel
              title={'Block Block Block'}
              description={"Created a fast-paced block stacking game for Android with a friend using the libGDX game development library."}
              tags={['java', 'libgdx']}
              imageSrc={'./assets/blockblockblock-portrait.png'}
              projectLink={'https://play.google.com/store/apps/details?id=com.vorobeans.stacker'}
            />
            <ProjectPanel
              title={'React Weather'}
              description={"A simple weather app, built as a learning project. Recently migrated the backend from Heroku to Azure and updated to use more modern React patterns."}
              tags={['javascript', 'react', 'jest', 'github pages', 'azure cloud functions']}
              imageSrc={'./assets/react-weather-portrait.png'}
              codeLink={'https://github.com/brennan-pilcher/react-weather'}
              projectLink={'https://pilcher.dev/react-weather/'}

            />
            <ProjectPanel
              title={"Where's Bernie?"}
              description={`A silly weekend project based on Where's Waldo and the viral photo of Bernie Sanders wearing mittens at the US presidential inauguration in 2020.`}
              tags={['javascript', 'html5 canvas', 'github pages']}
              imageSrc={'./assets/wheres-bernie-portrait.jpg'}
              codeLink={'https://github.com/brennan-pilcher/wheres-bernie'}
              projectLink={'https://pilcher.dev/wheres-bernie/'}
            />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Work;