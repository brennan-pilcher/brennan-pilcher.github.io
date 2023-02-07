import { Link } from 'react-router-dom';
import './ContentBlock.css';
import { ContentItem, isButtonContentItem, isHeadingContentItem, isTextContentItem } from './ContentItems';

interface ContentBlockProps {
  content: ContentItem[];
  id: string;
}

const heading = (key: string, text: string, isSubheading: boolean) =>
  <span key={key} className={isSubheading ? 'subheading' : 'heading'}>{text}</span>

const paragraph = (key: string, text: string, bold: boolean) =>
  <span key={key} className={`content-paragraph${bold ? ' bold-text' : ''}`}>
    {text}
  </span>

const button = (key: string, text: string, local: boolean, link: string) => 
  local ?
    <Link key={key} className='content-button' to={link}><span>{text}</span><span className='content-button-text-accent'>❯</span></Link>
  : <a key={key} className='content-button' href={link} rel="noreferrer">{text}<span className='content-button-text-accent'>❯</span></a>

const createKey = (key: string, index: number) => `${key}-${index}`;

const createContent = (content: ContentItem[], id: string): JSX.Element[] =>
  content.map((item, index) => {
    const key = createKey(id, index);
    
    if (isHeadingContentItem(item)) return heading(key, item.text, item.isSubheading ?? false);
    if (isTextContentItem(item)) return paragraph(key, item.text, item.bold ?? false);
    if (isButtonContentItem(item)) return button(key, item.text, item.local, item.link);
    else return <></>;
  })

const ContentBlock = ({ content, id }: ContentBlockProps) => {
  return (
    <div className='content-block'>
      {createContent(content, id)}
    </div>
  )
}

export default ContentBlock;