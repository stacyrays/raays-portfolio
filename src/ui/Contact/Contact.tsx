import Services from '../Services/Services';
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
                email preferred
            </div>
            <ul>
              <li>stacyrays77@gmail.com</li>
            </ul>
            <div className="contact-header-text">
                Resume
            </div>
            <ul>
              <li>
                Download Resume (coming soon)
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
