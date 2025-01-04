import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Button, Drawer, Divider } from '@mui/material'
import Box from '@mui/material/Box';

import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import { useState } from "react";

const NavDrawer = () => {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (drawerState: boolean) => {
        setOpen(drawerState);
    }

    const topListItems = [
        'Home',
        'Software Projects',
        'Technical Blog',
        'Teaching & Tutoring',
    ];

    const bottomListItems = [
        'About Me',
        'Contact'
    ]

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={() => toggleDrawer(false)}>
            <List>
                {topListItems.map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {bottomListItems.map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
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