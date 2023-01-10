import Header from '../../components/Header/Header';
import './Home.css';

const Home = () => {
  return (
    <>
      <Header />
      <div className='hero'>
        <span>I'm a <span className='highlight'>technologist</span> with a background in <span className='highlight'>art and design</span> who enjoys exploring the interactions between creative media and technology.</span>
      </div>
    </>
  );
}

export default Home;