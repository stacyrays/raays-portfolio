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
        <div className="sub-header-text">about stace</div>
        <div className="work-item-container">
          <div className="work-item-left">
            <img src={process.env.PUBLIC_URL + "/me-beach.png"} width="100%" height="auto"/>
          </div>
          <div className="work-item-right">
            <div className="work-header-text">
                  bio
              </div>
              <p>
                Hi I'm Stace, I'm a senior frontend software engineer and designer in the San Francisco bay area, currently doing consultant projects and keeping an eye out for the next great full time role. 
              </p>
              <p>
                My most recent full time position was with Scuba Analytics as a Frontend Software Engineer. I was with Scuba for 3 years. Unfortunately they had a company wide layoff in May 2024, where half the company, including myself and many other amazing engineers, were affected.
              </p>
              <p>
                I have years of software engineering and design experience, an undergrad computer science degree, a fullstack bootcamp completion certificate, and I'm currently finishing up an AI development bootcamp through Interview Kickstart. 
              </p>
              <p>
                When I'm not coding or designing, I love to hike around the bay area, see the latest sci-fi movies, play guitar, and practice yoga. And I love Peanuts as you can see in the pic below :)
              </p>
            </div>
          </div>
        <div className="work-item-container">
          <div className="work-item-left">
            <div className="work-header-text">
                location
            </div>
            <ul>
              <li>Alameda, CA (right across the bay from San Francisco)</li>
            </ul>
            <div className="work-header-text">
                career
            </div>
            <ul>
              <li>software engineer + ui designer
                <ul>
                  <li>Software Engineer - 8 years experience</li>
                  <li>UI Designer - 20 years experience</li>
                </ul>
              </li>
            </ul>
            <div className="work-header-text">
                education
            </div>
            <ul>
              <li>
                {/* <strong><Link to="https://www.iupui.edu/" target="_blank">Indiana University &amp; Purdue University</Link></strong> */}
                <Link to="https://www.iupui.edu/" target="_blank" className={'link-styles'}>Indiana University &amp; Purdue University</Link>
                <ul>
                  <li>Computer science &amp; web design </li>
                  <li>Bachelor degree</li>
                  <li>Graduated 2009</li>
                </ul>
              </li>
              <li>
                <Link to="https://www.interviewkickstart.com/courses/applied-genai" target="_blank" className={'link-styles'}>Interview Kickstart Level Up</Link>
                <ul>
                  <li>Applied Generative AI Development Botocamp</li>
                  <li>Completing in 2024</li>
                </ul>
              </li>
              <li>
                <Link to="https://teamtreehouse.com/techdegree/full-stack-javascript" target="_blank" className={'link-styles'}>Javascript Full Stack Bootcamp - Treehouse</Link>
                  <ul>
                    <li>
                      Completed in 2020 and earned my <Link to="https://www.credential.net/5cfcf6de-9141-4e3f-b239-fdc9080b50dc#gs.c7dblx" target="_blank" className={'link-styles'}>Certificate</Link>
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
