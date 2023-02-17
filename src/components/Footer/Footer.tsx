import SocialButton from "../SocialButton/SocialButton";
import './Footer.css';

const Footer = () => (
  <div className='footer'>
    <SocialButton
      type='email'
      link='mailto:brennan.pilcher@gmail.com'
    />
    <SocialButton
      type='linkedin'
      link='https://www.linkedin.com/in/brennan-pilcher-a47146b8/'
    />
    <SocialButton
      type='instagram'
      link='https://www.instagram.com/astronaut_pilcher/'
    />
    <SocialButton
      type='github'
      link='https://github.com/brennan-pilcher'
    />
  </div>
);

export default Footer;