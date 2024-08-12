import Services from '../Services/Services';
import './Contact.scss';
import '../../App.scss';

const Contact = () => {
  return (
    <>
      <div className="header-image-work" />
      <div className="content-container">
      <div className="sub-header-text">contact raays</div>
        <div className="work-item-container">
          <div className="work-item-left">
            <img src={process.env.PUBLIC_URL + '/me-ballena.png'} width="100%" height="auto"/>
          </div>
          <div className="work-item-right">
            <div className="work-header-text">
                email preferred
            </div>
            <ul>
              <li>stacyrays@gmail.com</li>
            </ul>
            <div className="work-header-text">
                Resume
            </div>
            <ul>
              <li>
                Download Resume (coming soon)
              </li>
            </ul>
          </div>
        </div>
        </div>
      <Services />

    </>
  );
}

export default Contact;
