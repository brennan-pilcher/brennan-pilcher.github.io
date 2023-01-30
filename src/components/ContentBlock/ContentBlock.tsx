import { Link } from 'react-router-dom';
import './ContentBlock.css';
import { ContentItem, isButtonContentItem, isTextContentItem } from './ContentItems';

interface ContentBlockProps {
  title: string;
  content: ContentItem[];
}

const paragraph = (text: string) =>
  <span className='content-paragraph'>
    {text}
  </span>

const button = (text: string, local: boolean, link: string) =>
  <div className='content-button'>
    {
      local ?
        <Link to={link}><span>{text}</span><span className='content-button-text-accent'>❯</span></Link>
      : <a href={link} rel="noreferrer">{text}</a>
    }
  </div>

const createContent = (content: ContentItem[]): JSX.Element[] =>
  content.map(item => {
    if (isTextContentItem(item)) return paragraph(item.content);
    if (isButtonContentItem(item)) return button(item.text, item.local, item.link);
    else return <></>;
  })

const ContentBlock = ({ title, content }: ContentBlockProps) => {
  

  return (
    <div className='content-block'>
      <span className='heading'>{title}</span>
      {createContent(content)}
    </div>
  )
}

export default ContentBlock;