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
            <img src={process.env.PUBLIC_URL + "/me-ballena.png"} width="100%" height="auto"/>
          </div>
          <div className="work-item-right">
            <div className="work-header-text">
                  Bio
              </div>
              <p>
                Hi I'm Stace (Raays), I am a software engineer and ui designer in the San Francisco bay area, currently doing consulting development and design projects. My most recent full time position was with Scuba Analytics as a Frontend Software Engineer. I was with Scuba for 3 years. Unfortunately, there was a company wide layoff in May 2024, where half the company, including myself and many amazing engineers, were affected.
              </p>
              <p>
                My undergraduate degree is in computer science and design. In addition to that, a few years ago, I brushed up on the latest full stack technologies by completing a fullstack bootcamp for software engineering at Treehouse.
              </p>
              <p>
                When I'm not coding or designing, I love to hike around the bay area, see the latest sci-fi movies, play guitar, and practice yoga. And I love Peanuts as you can see in the pic below :)
              </p>
            </div>
          </div>
        <div className="work-item-container">
          <div className="work-item-left">
            <div className="work-header-text">
                Location
            </div>
            <ul>
              <li>San Francisco, CA</li>
            </ul>
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
          <div className="work-item-right">
            <img src={process.env.PUBLIC_URL + "/me-snoopy.png"} width="100%" height="auto"/>
          </div>
        </div>
      </div>
      <Services />
    </>
  );
}

export default About;
