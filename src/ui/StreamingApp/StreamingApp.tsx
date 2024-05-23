import {Link} from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Stack } from '@mui/system';
import Services from '../Services/Services';
import { theme } from '../NavBar/NavBar';
import './StreamingApp.scss';
import '../Projects/Projects.scss';
import '../../App.scss';

const StreamingApp = () => {
  return (
    <>
      <div className="header-image-work" />
      <div className="content-container">
      <div className="sub-header-text">Video Streaming App: Frontend Software Engineer</div>
        <div className="work-item-container">
          <div className="work-item-left">
            <img src={process.env.PUBLIC_URL + "/react-video-streaming.png"} width="100%" height="auto"/>
          </div>
          <div className="work-item-right">
            <div className="work-header-text">React</div>
            <p>
              We used React for the main frontend codebase.
            </p>
          </div>
        </div>
        <div className="work-item-container">
          <div className="work-item-left">
            <img src={process.env.PUBLIC_URL + "/apollo.png"} width="100%" height="auto"/>
          </div>
          <div className="work-item-right">
            <div className="work-header-text">Apollo + GraphQL</div>
            <p>
              For application state management, we used Apollo client and GraphQL.
            </p>
          </div>
        </div>
        <div className="work-item-container">
          <div className="work-item-left">
            <img src={process.env.PUBLIC_URL + "/react-testing.png"} width="100%" height="auto"/>
          </div>
          <div className="work-item-right">
            <div className="work-header-text">React Testing Library</div>
            <p>
              For application testing, we used React Testing Library.
            </p>
          </div>
        </div>
      </div>
      <Services />

    </>
  );
}

export default StreamingApp;