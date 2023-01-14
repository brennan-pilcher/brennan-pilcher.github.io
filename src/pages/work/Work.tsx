import Header from '../../components/Header/Header';
import ProjectPanel from '../../components/ProjectPanel/ProjectPanel';
import './Work.css';

const Work = () => {
  return (
    <>
      <Header />
      <div className='work-section-title'>
        <span>Client Work</span>
      </div>
      <div className='work-summary'>
        <span>
          Unfortunately I can’t share a lot of details about my professional projects — as a consultant, most projects have been under non-disclosure agreements. However, I can share some project highlights with any sensitive information redacted.
        </span>
      </div>
      <div className='client-projects'>
        <ProjectPanel
          title={'National Pizza Chain'}
          description={"Developed a replacement website for a national pizza chain serving millions of customers a day. Individual contributor on the cart and checkout flow team and Tech Lead for the non-pizza product pages team."}
          tags={['typescript', 'next.js', 'redux', 'jest', 'react testing library', 'docker', 'kubernetes']}
          imageSrc={'./assets/pizza-placeholder.png'}
        />
        <ProjectPanel
          title={'Sports Analytics Firm'}
          description={"Client wanted to totally rebuild their mobile application from the ground up with React Native in a short span of time. I helped to build out the app's core content experience, focusing on the article view, news feed, and data fetching / caching architecture."}
          tags={['typescript', 'react native', 'redux', 'jest']}
          imageSrc={'./assets/sports-placeholder.png'}
        />
        <ProjectPanel
          title={'National Grocery Retailer'}
          description={"Developed microservices to replace a business-critical system that will eventually be scaled to hundreds of thousands of daily users and millions of transactions with Spring Boot and Docker, deployed on Kubernetes in Azure."}
          tags={['java', 'spring boot', 'junit', 'mockito', 'docker', 'kubernetes']}
          imageSrc={'./assets/grocery-placeholder.png'}
        />
      </div>
    </>
  );
}

export default Work;