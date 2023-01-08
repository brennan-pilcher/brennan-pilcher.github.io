import Header from '../../components/Header/Header';
import './Home.css';

const Home = () => {
  return (
    <>
      <Header />
      <div className='hero'>
        <span>I blend <span className='highlight'>technical expertise</span> with <span className='highlight'>artistic training</span> to create memorable projects focused on the interactions between creative media and technology.</span>
      </div>
    </>
  );
}

export default Home;