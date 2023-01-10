import { Link } from 'react-router-dom';
import './Header.css';

const Navigation = () => {
    return (
        <div className='navigation'>
          <Link to={`projects`}><span>projects</span></Link>
          <Link to={`experiments`}><span>experiments</span></Link>
          <Link to={`about`}><span>about</span></Link>
          <a href="https://registry.jsonresume.org/brennan-pilcher" target="_blank" rel="noreferrer"><span>résumé</span></a>
        </div>
    );
};

const Title = () => {
  return (
    <div className='title-container'>
      <Link to={'/'}><div className='title'><span className='first-name'>Brennan</span> <span className='last-name'>Pilcher</span></div></Link>
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