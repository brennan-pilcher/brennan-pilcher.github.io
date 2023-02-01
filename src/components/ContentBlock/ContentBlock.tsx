import { Link } from 'react-router-dom';
import './ContentBlock.css';
import { ContentItem, isButtonContentItem, isHeadingContentItem, isTextContentItem } from './ContentItems';

interface ContentBlockProps {
  content: ContentItem[];
}

const heading = (text: string, isSubheading: boolean) =>
  <span className={isSubheading ? 'subheading' : 'heading'}>{text}</span>

const paragraph = (text: string, bold: boolean) =>
  <span className={`content-paragraph${bold ? ' bold-text' : ''}`}>
    {text}
  </span>

const button = (text: string, local: boolean, link: string) =>
  <div className='content-button'>
    {
      local ?
        <Link to={link}><span>{text}</span><span className='content-button-text-accent'>❯</span></Link>
      : <a href={link} rel="noreferrer">{text}<span className='content-button-text-accent'>❯</span></a>
    }
  </div>

const createContent = (content: ContentItem[]): JSX.Element[] =>
  content.map(item => {
    if (isHeadingContentItem(item)) return heading(item.text, item.isSubheading ?? false);
    if (isTextContentItem(item)) return paragraph(item.text, item.bold ?? false);
    if (isButtonContentItem(item)) return button(item.text, item.local, item.link);
    else return <></>;
  })

const ContentBlock = ({ content }: ContentBlockProps) => {
  

  return (
    <div className='content-block'>
      {createContent(content)}
    </div>
  )
}

export default ContentBlock;