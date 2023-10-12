import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, Routes, Route } from 'react-router-dom';
import {Login} from './Login';
import {Footer} from './Footer';
import {Compo} from './Compo';
import {Header} from './Header';
import {Album} from './Album';
import { grey } from '@mui/material/colors';
import Float1 from './Float1';
export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 , backgroundColor:grey}}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 , fontFamily: "cars font"}}>
            AMAZING CARS
          </Typography>
          <nav>
          <Link to='/login'><Button color="inherit">Login</Button></Link>
          <nav>
        <ul >
          <li><Link to="/">Header</Link></li>
          <li><Link to="/compos">Compo</Link></li>
        </ul>
      </nav>
        </nav>
        </Toolbar>
      </AppBar>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path="/" element={<Header/>}/>
            <Route exact path="/compos" element={<Compo />}/>
             <Route path="/footer" element={<Footer />}/>
        </Routes>
       
        <Album />
        <Float1 />
 </Box>
  );
}