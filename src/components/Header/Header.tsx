import './Header.css';

const Navigation = () => {
    return (
        <div className='navigation'>
          <span>projects</span>
          <span>experiments</span>
          <span>resume</span>
          <span>contact</span>
        </div>
    );
};

const Title = () => {
  return (
    <div className='title-container'>
      <span className='title'><b>Brennan</b> Pilcher</span>
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