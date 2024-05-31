import {Link} from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Stack } from '@mui/system';
import Services from '../Services/Services';
import {theme, buttonStyles} from '../NavBar/NavBar';
import './Sketches.scss';
import '../../App.scss';

const Sketches = () => {
  return (
    <>
      <div className="header-image-work" />
      <div className="content-container">
        <div className="sub-header-text">Sketches Coming Soon! Check back :)</div>
        <div className="service-panel-section">
          <div className="sketch-item-container">
            <div className="sketch-item">Sketch here...</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sketches;
