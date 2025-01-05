import { createElement } from 'react';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Drawer, Divider, IconButton } from '@mui/material'
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import TerminalIcon from '@mui/icons-material/Terminal';
import CreateIcon from '@mui/icons-material/Create';
import SchoolIcon from '@mui/icons-material/School';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu'

import { useState } from "react";

const NavDrawer = () => {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (drawerState: boolean) => {
        setOpen(drawerState);
    }

    type NavDrawerItemType = {
        title: string,
        link: string,
        icon: React.ElementType
    }

    const topListItems: NavDrawerItemType[] = [
        {
            title: 'Home',
            link: '/',
            icon: HomeIcon,
        },
        {
            title: 'Software Projects',
            link: '/projects',
            icon: TerminalIcon
        },
        {
            title: 'Technical Blog',
            link: '/technical-writing',
            icon: CreateIcon
        },
        {
            title: 'Teaching & Tutoring',
            link: '/teaching',
            icon: SchoolIcon
        }
    ];

    const bottomListItems: NavDrawerItemType[] = [
        {
            title: 'About Me',
            link: '/about',
            icon: PersonIcon
        },
        {
            title: 'Contact',
            link: '/contact',
            icon: MailIcon
        },
    ]

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={() => toggleDrawer(false)}>
            <List>
                {topListItems.map((item, index) => (
                    <Link to={item.link}>
                        <ListItem key={item.title} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {createElement(item.icon)}
                                </ListItemIcon>
                                <ListItemText primary={item.title} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                ))}
            </List>
            <Divider />
            <List>
                {bottomListItems.map((item, index) => (
                    <Link to={item.link}>
                        <ListItem key={item.title} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {createElement(item.icon)}
                                </ListItemIcon>
                                <ListItemText primary={item.title} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                ))}
            </List>
        </Box >
    );

    return (
        <div>
            {/*  */}
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={() => toggleDrawer(true)}
            >
                <MenuIcon />
            </IconButton>
            {/* <Button onClick={() => toggleDrawer(true)}>Open drawer</Button> */}
            <Drawer open={open} onClose={() => toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </div>
    );
};

export default NavDrawer;