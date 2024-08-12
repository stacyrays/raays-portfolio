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
              Scuba is a data analytics deep dive took, making it so it's much easier to make complicated queries much faster and formatted in a human friendly way.
            </p>
            <p>
              <strong>Technologies:</strong> React, Typescript, Redux, Material UI, Python
            </p>
            <div>
              <ThemeProvider theme={theme}>
                  <Link to="https://www.scuba.io/" target='_blank'>
                    <Button variant="contained" color="blue" sx={{...buttonStyles, marginRight: '10px'}}>
                      GO TO SCUBA
                    </Button>
                  </Link>
                  <Link to="/projects/scuba">
                    <Button variant="contained" color="blue" sx={buttonStyles}>
                      SEE CODE EXAMPLES
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
              <ThemeProvider theme={theme}>
                  <Link to="/projects/streaming-app">
                    <Button variant="contained" color="blue" sx={buttonStyles}>
                      SEE CODE EXAMPLES
                    </Button>
                  </Link>
              </ThemeProvider>
            </div>
          </div>
        </div>
        <div className="work-item-container">
          <div className="work-item-left">
            <img src={process.env.PUBLIC_URL + '/life-leap.png'} width="100%" height="auto" />
          </div>
          <div className="work-item-right">
            <div className="work-header-text">Life Leap Therapy Site</div>
            <p>
             Life Leap is a contract development (and design) project I am about to finish. The final design and some code samples will be added here soon.
            </p>
            <p>
              <strong>Technologies:</strong> React, Typescript, Next.js, javascript, html/css, Figma
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
        <div className="sub-header-text">Design and Prototyping</div>
        <div className="work-item-container">
          <div className="work-item-left">
          <img src={process.env.PUBLIC_URL + '/labzero-site.png'} width="100%" height="auto"/>
          </div>
          <div className="work-item-right">
            <div className="work-header-text">Lab Zero Innovations</div>
            <p>
              At Lab Zero, I was a full time designer and prototyper. Lab Zero is a design and development agency located in San Francisco. We worked on design and development projects for many well-known bay area tech companies. Check out the Lab Zero site for more information.
            </p>
            <p>
              <strong>Technologies:</strong> Figma, Sketch, Framer (React prototyping tool), javascript, html/css Adobe Suite
            </p>
            <ThemeProvider theme={theme}>
              <Stack gap={2} alignItems="flex-start">
                <Link to="https://labzero.com/" target="_blank">
                  <Button variant="contained" color="blue" sx={buttonStyles}>
                    GO TO LABZERO
                  </Button>
                </Link>
              </Stack>
          </ThemeProvider>
          </div>
        </div>
        <div className="work-item-container">
          <div className="work-item-left">
            <img src={process.env.PUBLIC_URL + '/angelic-clean.png'} width="100%" height="auto" />
          </div>
          <div className="work-item-right">
            <div className="work-header-text">Angelic Cleaning Site</div>
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
                      go to site
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
