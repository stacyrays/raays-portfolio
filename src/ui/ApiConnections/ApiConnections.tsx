import Services from '../Services/Services';
import Grid from "../Grid/Grid";
import './ApiConnections.scss';
import '../../App.scss';

 
const ApiConnections = () => {
  return (
    <>
      <div className="header-image-work" />
      <div className="content-container">
        <div className="sub-header-text">api fun and connections</div>
        <p>I love dogs! So for fun I wanted to include a little dog api connection example here, that is a free and public api: thedogapi.com. Coming soon: my own sketches api (i love art too!)</p>
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
