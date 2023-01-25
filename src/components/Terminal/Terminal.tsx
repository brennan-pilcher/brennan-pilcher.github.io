import './Terminal.css';

const Terminal = () => {

  return (
    <div className='terminal'>
      <div className='terminal-top-nav'>
        <div className='terminal-top-nav-item'>
          <span>~/code (zsh)</span>
        </div>
      </div>
      <div className='terminal-interior'>
        <div><span className='terminal-code-dir'>~/code</span><span className='terminal-code-caret'> ❯ </span><span>cat ~/Documents/about-me.txt</span></div>
        <div><span>name: Brennan Pilcher</span></div>
        <div><span>email: brennan.pilcher@gmail.com</span></div>
        <div><span>github: @brennan-pilcher</span></div>
        <div><span>years-of-experience: 3 in IT, 4.5 in Software Development</span></div>
      </div>
    </div>
  );
}

export default Terminal;