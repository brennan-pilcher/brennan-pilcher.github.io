import { Link } from 'react-router-dom';
import './Header.css';

const Navigation = () => {
    return (
        <div className='navigation'>
          <Link to={`projects`}><span>projects</span></Link>
          <Link to={`experiments`}><span>experiments</span></Link>
          <Link to={`about`}><span>about</span></Link>
          <Link to={`contact`}><span>contact</span></Link>
        </div>
    );
};

const Title = () => {
  return (
    <div className='title-container'>
      <Link to={'/'}><span className='title'><b>Brennan</b> Pilcher</span></Link>
      <span className='subtitle'>code + design</span>
    </div>
  );
}


const Header = () => {
  return (
    <div className='header'>
      <Title />
      <Navigation />
    </div>
  );
}

export default Header;