import './ProjectPanel.css';

interface ProjectPanelProps {
  title: string;
  description: string;
  tags: string[];
  imageSrc: string;
}

const Title = ({ title }: {title: string}) => <span className='project-panel-title'>{title}</span>;

const Description = ({ description }: {description: string}) => <span className='project-panel-description'>{description}</span>;

const Tags = ({ tags }: {tags: string[]}) => (
  <div className='project-panel-tags'>
    {tags.map(
      (tag: string) => <span className='project-panel-tag'>{tag}</span>
    )}
  </div>
);

const ProjectPanel = ({ title, description, tags, imageSrc }: ProjectPanelProps) => {
  return (
    <div className='project-panel'>
      <img className='project-panel-image' src={imageSrc} />
      <div className='project-panel-text-content'>
        <Title
          title={title}
        />
        <Description
          description={description}
        />
        <Tags
          tags={tags}
        />
      </div>
    </div>
  );
}

export default ProjectPanel;