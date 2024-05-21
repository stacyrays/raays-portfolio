import {Link} from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Stack } from '@mui/system';
import Services from '../Services/Services';
import { theme } from '../NavBar/NavBar';
import './Work.css';
import '../../App.scss';

const Work = () => {
  return (
    <>
      <div className="header-image-work" />
      <div className="content-container">
      <div className="sub-header-text">Work: Software Engineering</div>
        <div className="work-item-container">
          <div className="work-item-left">
            <img src="https://www.verywellmind.com/thmb/39_t3xNP_43YUiUnyRVAtqfckBY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/positive-blonde-middle-aged-woman-psychologist-talking-to-girl-patient-1213531990-745e910347594bf0a0569e7e1b908105.jpg" width="100%" height="auto"/>
          </div>
          <div className="work-item-right">
            <div className="work-header-text">Scuba Analytics</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tellus mauris, tristique mollis nulla eu, viverra fringilla dolor. Sed venenatis ligula et sem congue, a tempor sem luctus. Aliquam ornare feugiat efficitur.
            </p>
            <ThemeProvider theme={theme}>
              <Stack gap={2} alignItems="flex-start">
                <Link to="/scuba">
                  <Button variant="contained" color="purple">
                    SEE SAMPLES
                  </Button>
                </Link>
              </Stack>
          </ThemeProvider>
          </div>
        </div>
        <div className="sub-header-text">Work: UX and Visual Design</div>
        <div className="work-item-container">
          <div className="work-item-left">
            <img src="https://www.verywellmind.com/thmb/39_t3xNP_43YUiUnyRVAtqfckBY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/positive-blonde-middle-aged-woman-psychologist-talking-to-girl-patient-1213531990-745e910347594bf0a0569e7e1b908105.jpg" width="100%" height="auto"/>
          </div>
          <div className="work-item-right">
            <div className="work-header-text">Lab Zero Innovations</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tellus mauris, tristique mollis nulla eu, viverra fringilla dolor. Sed venenatis ligula et sem congue, a tempor sem luctus. Aliquam ornare feugiat efficitur.
            </p>
            <ThemeProvider theme={theme}>
              <Stack gap={2} alignItems="flex-start">
                <Link to="/scuba">
                  <Button variant="contained" color="purple">
                    SEE SAMPLES
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
