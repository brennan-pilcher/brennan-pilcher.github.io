import './ProjectPanel.css';

interface ProjectPanelProps {
  title: string;
  description: string;
  tags: string[];
}

const ProjectPanel = ({ title, description, tags }: ProjectPanelProps) => {
  return (
    <div className='project-panel'>
      <div className='project-panel-text-content'>
        <span className='project-panel-title'>{title}</span>
        <span className='project-panel-description'>{description}</span>
        <div className='project-panel-tags'>
          {tags.map(
            (tag: string) => <span className='project-panel-tag'>{tag}</span>
          )}
        </div>
      </div>
      <div className='project-panel-image-content'>
        <img src='./assets/project-image.png' />
      </div>
    </div>
  );
}

export default ProjectPanel;