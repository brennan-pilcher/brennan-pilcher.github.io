import SocialButton from '../SocialButton/SocialButton';
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
      (tag: string, index: number) => <span key={`${tag}-${index}`} className='project-panel-tag'>{tag}</span>
    )}
  </div>
);

const Links = ({ projectLink, codeLink }: { projectLink: string | undefined, codeLink: string | undefined }) => {

  return (
    <div className='project-panel-buttons'>
      {
        codeLink ?
          <SocialButton
            type='github'
            link={codeLink}
          />
        : <></>
      }
      {
        projectLink ?
          <a href={projectLink} className='project-button' rel='noreferrer' target='_blank'>
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
      <img className='project-panel-image' alt={`${title} project`} src={imageSrc} />
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