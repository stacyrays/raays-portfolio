import {Link} from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Stack } from '@mui/system';
import Services from '../Services/Services';
import {theme, buttonStyles} from '../NavBar/NavBar';
import './Projects.scss';
import '../../App.scss';

const Projects = () => {
  return (
    <>
      <div className="header-image-work" />
      <div className="content-container">
      <div className="sub-header-text">software engineering + ui design</div>
        <div className="work-item-container">
          <div className="work-item-left">
            <img src={process.env.PUBLIC_URL + '/scuba-site.png'} width="100%" height="auto"/>
          </div>
          <div className="work-item-right">
            <div className="work-header-text">Scuba Analytics</div>
            <p>
            I was a full time frontend software engineer at Scuba for 3 years up until May 2024. Scuba is a data analytics deep dive tool, where users can create very complex queries much faster, while in a UI friendly environment. Unfortunately they had a company wide layoff in May 2024, where half the company, including myself and many other amazing engineers, were affected.
            </p>
            <p>
              <strong>Technologies:</strong> React, Typescript, Redux, Jest, Python, SQL, Webpack
            </p>
            <div>
              <ThemeProvider theme={theme}>
                  <Link to="https://www.scuba.io/" target='_blank'>
                    <Button variant="contained" color="blue" sx={{...buttonStyles, marginRight: '10px'}}>
                      Visit Scuba
                    </Button>
                  </Link>
                  {/* <Link to="/projects/scuba">
                    <Button variant="contained" color="blue" sx={buttonStyles}>
                      SEE CODE EXAMPLES
                    </Button>
                  </Link> */}
              </ThemeProvider>
            </div>
          </div>
        </div>
        <div className="work-item-container">
          <div className="work-item-left">
            <img src={process.env.PUBLIC_URL + '/cc.png'} width="100%" height="auto"/>
          </div>
          <div className="work-item-right">
            <div className="work-header-text">Chronicle Creations</div>
            <p>
            Currently I am working as Principal Software Engineer and UX Designer at Chronicle where I am Frontend Lead and designer on their stealth Ai focused project called Dreambook. We are hard at work on this project and will be launching the Dreambook MVP app in the months to come.
            </p>
            <p>
              <strong>Technologies:</strong> React Native, Typescript, Expo, Redux, Python, Figma
            </p>
            <div>
              <ThemeProvider theme={theme}>
                  <Link to="https://www.chroniclecreations.co/" target='_blank'>
                    <Button variant="contained" color="blue" sx={{...buttonStyles, marginRight: '10px'}}>
                      Visit Chronicle
                    </Button>
                  </Link>
                  {/* <Link to="/projects/scuba">
                    <Button variant="contained" color="blue" sx={buttonStyles}>
                      SEE CODE EXAMPLES
                    </Button>
                  </Link> */}
              </ThemeProvider>
            </div>
          </div>
        </div>
        <div className="work-item-container">
          <div className="work-item-left">
          <img src={process.env.PUBLIC_URL + '/labzero-site.png'} width="100%" height="auto"/>
          </div>
          <div className="work-item-right">
            <div className="work-header-text">Lab Zero Innovations</div>
            <p>
              I was a full time UX designer at LabZero, a design and development agency located in San Francisco from 2015-2020 We worked on design and development projects for many well-known bay area tech companies. Check out the Lab Zero site for more information. 
            </p>
            <p>
              <strong>Technologies:</strong> Figma, Sketch, Framer (React prototyping tool), javascript, html/css Adobe Suite
            </p>
            <ThemeProvider theme={theme}>
              <Stack gap={2} alignItems="flex-start">
                <Link to="https://labzero.com/" target="_blank">
                  <Button variant="contained" color="blue" sx={buttonStyles}>
                    Visit Labzero
                  </Button>
                </Link>
              </Stack>
          </ThemeProvider>
          </div>
        </div>
        <div className="work-item-container">
          <div className="work-item-left">
            <img src={process.env.PUBLIC_URL + '/answers.png'} width="100%" height="auto"/>
          </div>
          <div className="work-item-right">
            <div className="work-header-text">Answers.com</div>
            <p>
              I worked at Answers.com from 2009-2013 where I was ux/visual designer for the main site as well as other Answers owned sites. Also built high fidelity prototypes in HMTL, CSS, and javascript.
            </p>
            <p>
              <strong>Technologies:</strong> Adobe Suite, Javascript, HTML, CSS, Framer X
            </p>
            <div>
              <ThemeProvider theme={theme}>
                  <Link to="https://www.answers.com/" target='_blank'>
                    <Button variant="contained" color="blue" sx={{...buttonStyles, marginRight: '10px'}}>
                      Visit Answers
                    </Button>
                  </Link>
              </ThemeProvider>
            </div>
          </div>
        </div>
        <div className="work-item-container">
          <div className="work-item-left">
            <img src={process.env.PUBLIC_URL + '/River_desktop_hp.jpg'} width="100%" height="auto" />
          </div>
          <div className="work-item-right">
            <div className="work-header-text">River NLP Therapy Site</div>
            <p>
             River NLP is a current consultant design and development project that I am working on and should be live soon. I am the lead designer and developer on this site. Building it in Next.js and Typescript.
            </p>
            <p>
              <strong>Technologies:</strong> Next.js, Typescript, javascript, html/css, Figma
            </p>
            <div>
              <ThemeProvider theme={theme}>
                  <Link to="/">
                    <Button variant="contained" color="blue" sx={buttonStyles}>
                      COMING SOON
                    </Button>
                  </Link>
              </ThemeProvider>
            </div>
          </div>
        </div>
        <div className="work-item-container">
          <div className="work-item-left">
            <img src="https://stacyrays.github.io/portfolio/images/projects/concert-software.png" width="100%" height="auto"/>
          </div>
          <div className="work-item-right">
            <div className="work-header-text">Live Streaming Video App</div>
            <p>
             This live streaming video concert app was a consultant frontend project I contributed on. My main focus was developing the admin UI and the components used during a live event. I worked on a team of frontend and backend developers. 
            </p>
            <p>
              <strong>Technologies:</strong> React, Typescript, apollo, graphql, mongodb, javascript, html/scss
            </p>
            <div>
              {/* <ThemeProvider theme={theme}>
                  <Link to="/projects/streaming-app">
                    <Button variant="contained" color="blue" sx={buttonStyles}>
                      SEE CODE EXAMPLES
                    </Button>
                  </Link>
              </ThemeProvider> */}
            </div>
          </div>
        </div>
        {/* <div className="sub-header-text">Design and Prototyping</div> */}
        <div className="work-item-container">
          <div className="work-item-left">
            <img src={process.env.PUBLIC_URL + '/angelic-clean.png'} width="100%" height="auto" />
          </div>
          <div className="work-item-right">
            <div className="work-header-text">Angelic Clean</div>
            <p>
             Angelic Cleaning was a small business contract design project. This one was mainly visual and ux updates to their exisiting logo and site. I updated their logo, colors, fonts and images. And provided guidance for their content and organization of their site.
            </p>
            <p>
              <strong>Technologies:</strong> Figma, html/css
            </p>
            <div>
              <ThemeProvider theme={theme}>
                  <Link to="https://www.angelicclean.com/">
                    <Button variant="contained" color="blue" sx={buttonStyles}>
                      Visit Angelic
                    </Button>
                  </Link>
              </ThemeProvider>
            </div>
          </div>
        </div>
      </div>
      <Services />

    </>
  );
}

export default Projects;
