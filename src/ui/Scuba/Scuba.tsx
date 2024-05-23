import {Link} from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Stack } from '@mui/system';
import Services from '../Services/Services';
import { theme } from '../NavBar/NavBar';
import './Scuba.scss';
import '../Projects/Projects.scss';
import '../../App.scss';

const Scuba = () => {
  return (
    <>
      <div className="header-image-work" />
      <div className="content-container">
      <div className="sub-header-text">Scuba Analytics: Frontend Software Engineer</div>
        <div className="work-item-container">
          <div className="work-item-left">
            <img src={process.env.PUBLIC_URL + "/react-typescript.png"} width="100%" height="auto"/>
          </div>
          <div className="work-item-right">
            <div className="work-header-text">React + Typescript</div>
            <p>
              We used React + Typescript for the main frontend codebase. Note, for privacy reasons, the image shown is similar to the components we built for Scuba, but it is not actual Scuba code.
            </p>
          </div>
        </div>
        <div className="work-item-container">
          <div className="work-item-left">
            <img src={process.env.PUBLIC_URL + "/redux.png"} width="100%" height="auto"/>
          </div>
          <div className="work-item-right">
            <div className="work-header-text">Redux & Async Thunks</div>
            <p>
              For application state management, we used Redux and may async thunk calls to collect the data to distribute and use to support the Scuba app.
            </p>
          </div>
        </div>
        <div className="work-item-container">
          <div className="work-item-left">
            <img src={process.env.PUBLIC_URL + "/jest-tests.png"} width="100%" height="auto"/>
          </div>
          <div className="work-item-right">
            <div className="work-header-text">Jest + Enzyme Tests</div>
            <p>
              For application testing, we used jest and enzyme.
            </p>
          </div>
        </div>
      </div>
      <Services />

    </>
  );
}

export default Scuba;
