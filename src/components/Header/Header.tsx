import { Link } from 'react-router-dom';
import { useMediaQuery } from 'usehooks-ts';
import './Header.css';

const Navigation = () => {
    return (
        <div className='navigation'>
          <Link to={`/work`}><span>work</span></Link>
          <Link to={`/experiments`}><span>experiments</span></Link>
          <Link to={`/about`}><span>about</span></Link>
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
  const useMobileHeader = useMediaQuery('(min-width: 950px)')
  
  return (
    <div className='header'>
      <Title />
      {useMobileHeader ?
        <Navigation />
        : <span className="material-symbols-outlined menu-icon">
            menu
          </span>
      }
    </div>
  );
}

export default Header;