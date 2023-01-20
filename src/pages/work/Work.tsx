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
              Unfortunately I can't share a lot of details about my professional projects — as a consultant, most projects have been under non-disclosure agreements. However, I can share some project highlights with any sensitive information redacted.
            </span>
          </div>
          <div className='projects'>
            <ProjectPanel
              title={'Pizza Chain'}
              description={"Developed a replacement website for a national pizza chain serving millions of customers a day. Individual contributor on the cart and checkout flow team and Tech Lead for the non-pizza product pages team."}
              tags={['typescript', 'next.js', 'redux', 'jest', 'react testing library', 'docker', 'kubernetes']}
              imageSrc={'./assets/pizza-placeholder-portrait.png'}
            />
            <ProjectPanel
              title={'Sports Analytics Firm'}
              description={"Client wanted to totally rebuild their mobile application from the ground up with React Native in a short span of time. I helped to build out the app's core content experience, focusing on the article view, news feed, and data fetching / caching architecture."}
              tags={['typescript', 'react native', 'redux', 'jest']}
              imageSrc={'./assets/sports-placeholder-portrait.png'}
            />
            <ProjectPanel
              title={'Grocery Retailer'}
              description={"Developed microservices to replace a business-critical system that will eventually be scaled to hundreds of thousands of daily users and millions of transactions with Spring Boot and Docker, deployed on Kubernetes in Azure."}
              tags={['java', 'spring boot', 'junit', 'mockito', 'docker', 'kubernetes']}
              imageSrc={'./assets/pizza-placeholder-portrait.png'}
            />
            <ProjectPanel
              title={'News Non-Profit'}
              description={"Contributed to the development and architecture of a React Native mobile application as well as maintenance and upgrades on the Ruby on Rails website and API layer."}
              tags={['javascript', 'react native', 'redux', 'jest', 'ruby on rails']}
              imageSrc={'./assets/pizza-placeholder-portrait.png'}
            />
            <ProjectPanel
              title={'Smart Home Startup'}
              description={"Contributed to a technical assessment analyzing the quality of the client's code, provided insights on architecture and workflow, and presented a report on our findings and recommendations to C-level executives."}
              tags={[]}
              imageSrc={'./assets/pizza-placeholder-portrait.png'}
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
            />
            <ProjectPanel
              title={'React Weather'}
              description={"A simple weather app, built as a learning project. Recently migrated the backend from Heroku to Azure and updated to use more modern React patterns."}
              tags={['javascript', 'react', 'jest', 'azure cloud functions']}
              imageSrc={'./assets/react-weather-portrait.png'}
            />
            <ProjectPanel
              title={'Grocery Retailer'}
              description={"Developed microservices to replace a business-critical system that will eventually be scaled to hundreds of thousands of daily users and millions of transactions with Spring Boot and Docker, deployed on Kubernetes in Azure."}
              tags={['java', 'spring boot', 'junit', 'mockito', 'docker', 'kubernetes']}
              imageSrc={'./assets/pizza-placeholder-portrait.png'}
            />
        </div>
      </div>
    </>
  );
}

export default Work;