import './Terminal.css';

interface TerminalLineProps {
  text: string;
  isHeader?: boolean;
}

const TerminalLine = ({ text, isHeader = false }: TerminalLineProps) =>
  <div><span className={isHeader ? 'terminal-line-header' : ''}>{text}</span></div>

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
        <TerminalLine
          isHeader={true}
          text={'[name]'}
        />
        <TerminalLine
          text={'  Brennan Pilcher'}
        />
        <TerminalLine
          isHeader={true}
          text={'[email]'}
        />
        <TerminalLine
          text={'  brennan.pilcher@gmail.com'}
        />
        <TerminalLine
          isHeader={true}
          text={'[github]'}
        />
        <TerminalLine
          text={'  @brennan-pilcher'}
        />
        <TerminalLine
          isHeader={true}
          text={'[years-of-experience]'}
        />
        <TerminalLine
          text={'  3 in IT, 4.5 in Software Development'}
        />
      </div>
    </div>
  );
}

export default Terminal;