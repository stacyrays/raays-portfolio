import {Link} from "react-router-dom";
import {ThemeProvider} from '@mui/material/styles';
import Button from '@mui/material/Button';
import {Stack} from '@mui/system';
import Services from '../Services/Services';
import {theme, buttonStyles} from '../NavBar/NavBar';
import {LaptopIcon} from '../icons/LaptopIcon';
import './Home.css';
import '../../App.scss';

const Home = () => {
  return (
    <>
      <div className="header-image-home">
        <div className="laptop"><LaptopIcon /></div>
        <div className="header-text">
          <h1>modern React coding and design methods</h1>
          <ThemeProvider theme={theme}>
            <Stack gap={2} alignItems="flex-start">
              <Link to="/projects">
                <Button sx={buttonStyles} variant="contained" color="purple">
                  SEE WORK
                </Button>
              </Link>
            </Stack>
          </ThemeProvider>
        </div>
      </div>
      <Services />
    </>
  );
}

export default Home;
