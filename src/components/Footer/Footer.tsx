import SocialButton from "../SocialButton/SocialButton";
import './Footer.css';

const Footer = () => (
  <div className='footer'>
    <SocialButton
      type='github'
      link='https://github.com/brennan-pilcher'
    />
    <SocialButton
      type='linkedin'
      link='https://www.linkedin.com/in/brennan-pilcher-a47146b8/'
    />
    <SocialButton
      type='email'
      link='mailto:brennan.pilcher@gmail.com'
    />
  </div>
);

export default Footer;