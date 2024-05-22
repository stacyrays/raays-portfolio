import {Link} from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Stack } from '@mui/system';
import Services from '../Services/Services';
import {theme, buttonStyles} from '../NavBar/NavBar';
import './Work.scss';
import '../../App.scss';

const Work = () => {
  console.log('buttonStyles', buttonStyles)
  return (
    <>
      <div className="header-image-work" />
      <div className="content-container">
      <div className="sub-header-text">Software Engineering</div>
        <div className="work-item-container">
          <div className="work-item-left">
            <img src="/scuba-site.png" width="100%" height="auto"/>
          </div>
          <div className="work-item-right">
            <div className="work-header-text">Scuba Analytics</div>
            <p>
              Scuba is a data analytics deep dive took, making it so it's much easier to make complicated queries much faster and formatted in a human friendly way.
            </p>
            <div>
              <ThemeProvider theme={theme}>
                  <Link to="https://www.scuba.io/" target='_blank'>
                    <Button variant="contained" color="purple" sx={{...buttonStyles, marginRight: '10px'}}>
                      GO TO SCUBA
                    </Button>
                  </Link>
                  <Link to="/work/scuba">
                    <Button variant="contained" color="purple" sx={buttonStyles}>
                      SEE CODE EXAMPLES
                    </Button>
                  </Link>
              </ThemeProvider>
            </div>
          </div>
        </div>
        <div className="sub-header-text">UX and Visual Design</div>
        <div className="work-item-container">
          <div className="work-item-left">
          <img src="/labzero-site.png" width="100%" height="auto"/>
          </div>
          <div className="work-item-right">
            <div className="work-header-text">Lab Zero Innovations</div>
            <p>
              At Lab Zero, I was a full time designer and prototyper. Lab Zero is a design and development agency located in San Francisco. We worked on design and development projects for many well-known bay area tech companies. Check out the Lab Zero site for more information.
            </p>
            <ThemeProvider theme={theme}>
              <Stack gap={2} alignItems="flex-start">
                <Link to="https://labzero.com/" target="_blank">
                  <Button variant="contained" color="purple" sx={buttonStyles}>
                    GO TO LABZERO
                  </Button>
                </Link>
              </Stack>
          </ThemeProvider>
          </div>
        </div>
      </div>
      <Services />

    </>
  );
}

export default Work;
