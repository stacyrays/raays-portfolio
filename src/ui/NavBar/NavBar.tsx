import * as React from 'react';
import {useState, useEffect} from 'react';
import { Link, Outlet } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
// import ListItemText from '@mui/material/ListItemText';
// import ListItemButton from '@mui/material/ListItemButton';
// import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
// import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import './NavBar.css';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="left" ref={ref} {...props} />;
});

// Augment the palette to include an ochre color
declare module '@mui/material/styles' {
  interface Palette {
    orange: Palette['primary'];
    blue: Palette['secondary'];
  }

  interface PaletteOptions {
    orange?: PaletteOptions['primary'];
    blue?: PaletteOptions['secondary'];
  }
}

// Update the Button's color options to include an ochre option
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    orange: true;
    blue: true;
  }
}

export const theme = createTheme({
  palette: {
    orange: {
      main: '#FF4E02',
      light: '#FF611D',
      dark: '#D03F01',
      contrastText: '#FFFFFF',
    },
    blue: {
      main: '#25B6CA',
      light: '#40E7FE',
      dark: '#1A91A2',
      contrastText: '#FFFFFF',
    },
  },
});

export const buttonStyles = {
  color: '#000', 
  textTransform: 'lowercase',
  borderRadius: '0px',
  padding: '12px 20px',
}

export const textButtonStyles = {
  color: '#25B6CA', 
  textTransform: 'lowercase',
  borderRadius: '0px',
  padding: '12px 20px',
}

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
    // setHeight(window.innerHeight);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  
  const menu = () => {
    if (width >= 900){
      return (
        <>
          <ThemeProvider theme={theme}>
            <Stack spacing={2} direction="row">
              <Link to="/projects"><Button variant="text" sx={textButtonStyles}>Projects</Button></Link>
              <Link to="/about"><Button variant="text" sx={textButtonStyles}>About</Button></Link>
              <Link to="/api-connections"><Button variant="text" sx={textButtonStyles}>api fun</Button></Link>
              <Link to="/contact"><Button variant="text" sx={textButtonStyles}>Contact</Button></Link>
            </Stack>
          </ThemeProvider>
        </>
      );
    } else {
      return (<MenuIcon sx={{color: '#fff', cursor: 'pointer'}} onClick={handleClickOpen} />);
    }
  }

  return (
    <>
     <div className="nav-bar">{menu()}
      <Outlet />
    </div>
        <Dialog
          fullScreen
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
          sx={{ 
            '& .MuiPaper-root': {
              background: '#000'
            },
            '& .MuiBackdrop-root': {
              backgroundColor: '#000'
            }
          }}
        >
          <AppBar sx={{ position: 'relative', backgroundColor: 'transparent', boxShadow: '0'}}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >
                <CloseIcon sx={{color: '#25B6CA'}} />
              </IconButton>
              {/* <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                Menu
              </Typography> */}
            </Toolbar>
          </AppBar>
          <div style={{margin: '20px'}}>
            <ThemeProvider theme={theme}>
              <Stack spacing={2} direction="column">
                <Link to="/projects"><Button color="blue" variant="text" sx={{borderRadius: '0px', textTransform: 'lowercase'}} onClick={handleClose}>Projects</Button></Link>
                <Link to="/about"><Button color="blue" variant="text" sx={{borderRadius: '0px', textTransform: 'lowercase'}} onClick={handleClose}>About</Button></Link>
                <Link to="/api-connections"><Button color="blue" variant="text" sx={{borderRadius: '0px', textTransform: 'lowercase'}} onClick={handleClose}>API Fun</Button></Link>
                <Link to="/contact"><Button color="blue" variant="text" sx={{borderRadius: '0px', textTransform: 'lowercase'}} onClick={handleClose}>Contact</Button></Link>
              </Stack>
            </ThemeProvider>
          </div>
        </Dialog>
      </>
   );
}

export default NavBar;
