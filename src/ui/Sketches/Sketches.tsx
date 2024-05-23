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
        {/* <div className="work-item-container">
          <div className="work-item-left">
            <img src="/me-woods.png" width="100%" height="auto"/>
          </div>
          <div className="work-item-right">
            <div className="work-header-text">
                Career
            </div>
            <ul>
              <li>Software Engineer &amp; and UI Designer
                <ul>
                  <li>Software Engineer - 8 years experience</li>
                  <li>UI Designer - 15 years experience</li>
                </ul>
              </li>
            </ul>
            <div className="work-header-text">
                Education
            </div>
            <ul>
              <li>
                <strong><Link to="https://www.iupui.edu/" target="_blank">Indiana University &amp; Purdue University</Link></strong>
                <ul>
                  <li>Computer science &amp; web design </li>
                  <li>Bachelor degree</li>
                  <li>Graduated 2009</li>
                </ul>
              </li>
              <li>
                <strong><Link to="https://teamtreehouse.com/techdegree/full-stack-javascript" target="_blank">Javascript Full Stack Bootcamp - Treehouse</Link></strong>
                  <ul>
                    <li>
                      Completed and earned my <Link to="https://www.credential.net/5cfcf6de-9141-4e3f-b239-fdc9080b50dc#gs.c7dblx" target="_blank">Certificate</Link>
                    </li>
                    <li>Program focused on React, Node, Express, Sequelize, mysql, REST APIs, public API requests, Pug templating and Ruby on Rails</li>
                  </ul>
              </li>
            </ul>
          </div>
        </div> */}
        </div>
      <Services />

    </>
  );
}

export default Sketches;
