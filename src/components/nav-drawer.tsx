import { createElement } from 'react';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Button, Drawer, Divider } from '@mui/material'
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import TerminalIcon from '@mui/icons-material/Terminal';
import CreateIcon from '@mui/icons-material/Create';
import SchoolIcon from '@mui/icons-material/School';
import PersonIcon from '@mui/icons-material/Person';

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
            link: '/contacat',
            icon: MailIcon
        },
    ]

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={() => toggleDrawer(false)}>
            <List>
                {topListItems.map((item, index) => (
                    <ListItem key={item.title} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {createElement(item.icon)}
                            </ListItemIcon>
                            <Link to={item.link}>
                                <ListItemText primary={item.title} />
                            </Link>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {bottomListItems.map((item, index) => (
                    <ListItem key={item.title} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {createElement(item.icon)}
                            </ListItemIcon>
                            <Link to={item.link}>
                                <ListItemText primary={item.title} />
                            </Link>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div>
            <Button onClick={() => toggleDrawer(true)}>Open drawer</Button>
            <Drawer open={open} onClose={() => toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </div>
    );
};

export default NavDrawer;