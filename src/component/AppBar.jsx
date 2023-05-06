import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar/Toolbar';

import PetsIcon from '@mui/icons-material/Pets';
import Typography from '@mui/material/Typography/Typography';
import Box from '@mui/material/Box/Box';
import { styled } from '@mui/system';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';



export default function Appbar() {

    const [open,setOpen]=useState(false);
  

    const StyledToolbar = styled(Toolbar)({
        display: "flex",
        justifyContent: "space-between",


    }
    );


    const Search = styled('div')(({ theme }) => ({
        backgroundColor: "white",
        padding: theme.spacing(1),
        borderRadius: theme.shape.borderRadius,
        width: "40%"
    }));


    const Icons = styled(Box)(({ theme }) => ({
        display: "none",
        gap: "15px",
        alignItems: "center",
        [theme.breakpoints.up("sm")]: {
            display: "flex"
        }



    }));
    const UserBox = styled(Box)(({ theme }) => ({

        display: "flex",
        gap: "10px",
        alignItems: "center",
        [theme.breakpoints.up("sm")]: {
            display: "none"
        }


    }));
    return (
  
     
        <AppBar position="sticky">
            <StyledToolbar >
                <Typography variant="h4" sx={{ display: { xs: "none", sm: "block" } }} >
                    Uni-Design
                </Typography>
                <PetsIcon sx={{ display: { xs: "block", sm: "none" } }} />
                <Search><InputBase placeholder="Search ...."></InputBase></Search>
                <Icons>
                    <Badge badgeContent={4} color="secondary">
                        <MailIcon />
                    </Badge>
                    <Badge badgeContent={4} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                    <Avatar  onClick={()=>setOpen(true)} sx={{ width: 30, height: 30 }} src='https://mui.com/static/images/avatar/1.jpg' alt="avatar" />

                </Icons>
                <UserBox>
                    <Avatar onClick={()=>setOpen(true)} sx={{ width: 30, height: 30 }} src='https://mui.com/static/images/avatar/1.jpg' alt="avatar" />
                    <Typography variant='h6'>
                        John
                    </Typography>
                </UserBox>


            </StyledToolbar>
            
            <Menu

                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                
                open={open}
                onClose={e=>(setOpen(false))}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <MenuItem >Profile </MenuItem>
                <MenuItem >My account </MenuItem>
                <MenuItem >Logout </MenuItem>
            </Menu>


        </AppBar>


    )

}