import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'usehooks-ts';
import MenuOverlay from '../MenuOverlay/MenuOverlay';
import './Header.css';

const Navigation = ({ mobile, closeMenuOverlay }: { mobile: boolean, closeMenuOverlay: () => void }) => {
    return (
        <div className={`navigation${mobile ? '-mobile' : ''}`}>
          <Link to={`/home`} onClick={closeMenuOverlay}><span>home</span></Link>
          <Link to={`/work`} onClick={closeMenuOverlay}><span>work</span></Link>
          <Link to={`/about`} onClick={closeMenuOverlay}><span>about</span></Link>
          <a href="/resume.pdf" target="_blank" rel="noreferrer" onClick={closeMenuOverlay}><span>résumé</span></a>
        </div>
    );
};

const Title = ({ closeMenuOverlay }: { closeMenuOverlay: () => void } ) => {
  return (
    <div className='title-container'>
      <Link to={'/'} onClick={closeMenuOverlay}><div className='title'><span className='first-name'>Brennan</span> <span className='last-name'>Pilcher</span></div></Link>
      <span className='subtitle'>code + design</span>
    </div>
  );
}

const Header = () => {
  const [menuOverlayOpen, setMenuOverlayOpen] = useState(false);
  const useMobileHeader = useMediaQuery('(max-width: 768px)')

  useEffect(() => {
    if (!useMobileHeader && menuOverlayOpen) {
      setMenuOverlayOpen(false)
    }
  }, [useMobileHeader, menuOverlayOpen])
  
  return (
    <div className='header'>
      <Title closeMenuOverlay={() => setMenuOverlayOpen(false)} />
      {
        useMobileHeader ?
          <span className="material-symbols-outlined menu-icon" onClick={() => setMenuOverlayOpen(true)}>
            menu
          </span>
        :  <Navigation mobile={false} closeMenuOverlay={() => setMenuOverlayOpen(false)}/>
      }
      {menuOverlayOpen && (
        <MenuOverlay
          navigation={<Navigation mobile={true} closeMenuOverlay={() => setMenuOverlayOpen(false)} />}
          closeMenuOverlay={() => setMenuOverlayOpen(false)}
        />
        )}
    </div>
  );
}

export default Header;