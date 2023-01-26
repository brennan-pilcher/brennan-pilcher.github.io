import './ProjectPanel.css';

interface ProjectPanelProps {
  title: string;
  description: string;
  tags: string[];
  imageSrc: string;
  projectLink?: string | undefined;
  codeLink?: string | undefined;
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

const Links = ({ projectLink, codeLink }: { projectLink: string | undefined, codeLink: string | undefined }) => {

  return (
    <div className='project-panel-buttons'>
      {
        codeLink ?
          <a href={codeLink} className='github-button' target='_blank'>
            <div className='github-button-icons'>
              <img className='github-icon-white' src='./assets/github-mark-white.svg' />
              <img className='github-icon' src='./assets/github-mark.svg' />
            </div>
          </a>
        : <></>
      }
      {
        projectLink ?
          <a href={projectLink} className='project-button' target='_blank'>
            <span className="material-symbols-outlined project-icon">
              exit_to_app
            </span>
          </a>
        : <></>
      }
    </div>
  )
}

const ProjectPanel = ({ title, description, tags, imageSrc, codeLink, projectLink }: ProjectPanelProps) => {
  return (
    <div className='project-panel'>
      <img className='project-panel-image' src={imageSrc} />
      <div className='project-panel-content'>
        <Title
          title={title}
        />
        <Description
          description={description}
        />
        <div className='project-panel-bottom-section'>
          {
            codeLink || projectLink ?
              <Links
                codeLink={codeLink}
                projectLink={projectLink}
              />
            : <></>
          }
          <Tags
            tags={tags}
          />
        </div>
        
      </div>
    </div>
  );
}

export default ProjectPanel;