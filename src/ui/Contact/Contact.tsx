import Services from '../Services/Services';
import { Link } from 'react-router-dom';
import './Contact.scss';
import '../../App.scss';

const Contact = () => {
  return (
    <>
      <div className="header-image-work" />
      <div className="content-container">
      <div className="sub-header-text">contact stace</div>
        <div className="contact-container">
          <div className="contact-left">
            <div className="contact-header-text">
                email
            </div>
            <ul>
              <li>stacyrays77@gmail.com</li>
            </ul>
            <div className="contact-header-text">
                linkedin
            </div>
            <ul>
              <li>
                Visit my&nbsp;
                <Link to="https://www.linkedin.com/in/stace-suits-7b687917/" target="_blank" className={'link-styles'}>LinkedIn Profile</Link>
              </li>
            </ul>
          </div>
          <div className="contact-item-right"></div>
        </div>
        </div>
      <Services />

    </>
  );
}

export default Contact;
