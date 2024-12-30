import { MenuItem, Menu } from '@mui/material'

const MainMenu = () => {
    return (
        <Menu open={true}>
            <MenuItem>Home</MenuItem>
            <MenuItem>Technical Writing</MenuItem>
            <MenuItem>Tutoring</MenuItem>
        </Menu>
    )
};

export default MainMenu;