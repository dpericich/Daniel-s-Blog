import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    IconButton,
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
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
                    {/* If this goes mobile, I use the IconButton w/ menu and display my name in the navbar */}
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: 'flex', justifyContent: 'space-between' }}>
                        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link>
                        <Link to="/projects" style={{ textDecoration: 'none', color: 'inherit' }}>Software Projects</Link>
                        <Link to="/technical-writing" style={{ textDecoration: 'none', color: 'inherit' }}>Technical Blog</Link>
                        <Link to="/teaching" style={{ textDecoration: 'none', color: 'inherit' }}>Teaching & Tutoring</Link>
                        <Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }}>About Me</Link>
                        <Link to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>Contact</Link>
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
export default Navbar;

