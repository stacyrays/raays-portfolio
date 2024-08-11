import Services from '../Services/Services';
import Grid from "../Grid/Grid";
import './ApiConnections.scss';
import '../../App.scss';

 
const ApiConnections = () => {
  return (
    <>
      <div className="header-image-work" />
      <div className="content-container">
        <div className="sub-header-text">API Case Studies</div>
        <p>This page is showcasing my skills at connecting to APIs. The first one is for random dog pics and breed names, because I love dogs! The api is free and public: thedogapi.com. Option to randomize dog pics coming soon too.</p>
        <div className="service-panel-section">
          <div className="sketch-item-container">
            <div className="sketch-item"><Grid /></div>
          </div>
        </div>
      </div>
    <Services />
    </>
  );
}

export default ApiConnections;
