import {
    AppBar,
    Toolbar,
    Typography,
    Box,
} from "@mui/material";

import NavDrawer from './nav-drawer';

function Navbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <NavDrawer />
                    <Typography align="right">
                        Daniel Pericich - Blog
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
export default Navbar;

