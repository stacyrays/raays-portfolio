import {Link} from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Stack } from '@mui/system';
import Services from '../Services/Services';
import {theme, buttonStyles} from '../NavBar/NavBar';
import './About.scss';
import '../../App.scss';

const About = () => {
  console.log('buttonStyles', buttonStyles)
  return (
    <>
      <div className="header-image-work" />
      <div className="content-container">
      <div className="sub-header-text">About Stace Raays</div>
        <div className="work-item-container">
          <div className="work-item-left">
            <img src="/scuba-site.png" width="100%" height="auto"/>
          </div>
          <div className="work-item-right">
            <div className="work-header-text">
                Career
            </div>
            <ul>
              <li>UX designer &amp; web developer</li>
              <li>17 years experience</li>
            </ul>
            <div className="work-header-text">
                Education
            </div>
            <ul>
              <li>
                <strong><Link to="https://www.iupui.edu/" target="_blank">Indiana University &amp; Purdue University</Link></strong>
                <ul>
                  <li>Web design &amp; computer science</li>
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
            <div className="work-header-text">
                Location
            </div>
            <ul>
              <li>San Francisco, CA</li>
            </ul>
            <p>
              I am a UX designer and developer in San Francisco, currently doing consulting and freelance projects. My previous full time position was with Lab Zero. The clients there are large, house-hold name companies.
            </p>
            <p>
              My undergraduate degree is in design and computer science (Purdue University). To brush up on the latest technologies and to get more experience in the latest Javascript technologies I have attended and completed a fullstack javascript bootcamp for software engineering at Treehouse.
            </p>
            <p>
              When I'm not coding or designing, I love to take my dog on hikes around the bay area, see the latest sci-fi movies, play guitar, and practice yoga.
            </p>
          </div>
        </div>
        </div>
      <Services />

    </>
  );
}

export default About;
