import Header from '../../components/Header/Header';
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
      </div>
    </>
  );
}

export default Home;