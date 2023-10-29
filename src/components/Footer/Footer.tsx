import { Logo } from '../Logo';
import './Footer.scss';

export const Footer = () => (
  <div className="Footer">
    <div className="Footer__content">
      <Logo />
      <div className='Footer__links'>
        <a className='Footer__links--link' href="https://github.com">
            Github
        </a>
        <a className='Footer__links--link' href=''>
            Contact
        </a>
        <a className='Footer__links--link' href=''>
            Rights
        </a>
      </div>
      <button className='Footer__navigation'>
        <p className='Footer__navigation--text'>Back to top</p>
        <div className='Footer__navigation--icon'></div>
      </button>
    </div>
  </div>
);
