import * as React from 'react';
import './Header.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';


export default function Header ({logOutClick,activeUser}) {
    let logoPart;
    if(activeUser.isLoggedIn) {
        logoPart = <div className="account">
                           <img className="userLogo" src={activeUser.imgUrl} />
                           <div>
                               {activeUser.userName}
                           </div>
                       </div>
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Our Homework
                    </Typography>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        color="inherit"
                    >
                        {logoPart}
                    </IconButton>
                    <Button color="inherit" onClick={() => logOutClick()}>{activeUser.isLoggedIn ? "Logout" : "Login"}</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
