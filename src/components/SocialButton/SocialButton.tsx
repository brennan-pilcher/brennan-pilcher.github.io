import './SocialButton.css';

export type SocialType = 'github' | 'linkedin' | 'email' | 'instagram';

export interface SocialButtonProps {
  type: SocialType;
  link: string;
}

type SocialIcon = {
  [name in SocialType]: {
    default: string;
    hover: string;
  };
};

const socialIcons: SocialIcon = {
  github: {
    default: 'github.svg',
    hover: 'github-white.svg'
  },
  linkedin: {
    default: 'linkedin.png',
    hover: 'linkedin-white.png'
  },
  email: {
    default: 'email.svg',
    hover: 'email-white.svg'
  },
  instagram: {
    default: 'instagram.svg',
    hover: 'instagram-white.svg'
  },
}

const SocialButton = ({ type, link }: SocialButtonProps) => (
  <a href={link} className='social-button' rel='noreferrer' target='_blank'>
    <div className='social-button-icons'>
      <img className='social-icon-hover' alt={`${type} logo`} src={`./assets/logos/${socialIcons[type].hover}`} />
      <img className='social-icon-default' alt={`${type} logo`} src={`./assets/logos/${socialIcons[type].default}`} />
    </div>
  </a>
);

export default SocialButton;