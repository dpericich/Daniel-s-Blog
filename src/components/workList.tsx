import { List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';


const WorkExperienceList = () => {
    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'orangered' }}>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <WorkIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Software Engineer II - Whitelabel Co." secondary="January 2021 - Present" />
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <WorkIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Software Engineering Contractor - SquareVenue" secondary="June 2020 - Jan 2021" />
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <WorkIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Process Engineeer- Anheuser Busch Inbev" secondary="June 2017 - Sept. 2020" />
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <WorkIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="B.S. Mechanical Engineering" secondary="May 2017" />
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <WorkIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Engineering Intern - Bayer Animal Health" secondary="Summer 2016" />
            </ListItem>
        </List>
    )
};

export default WorkExperienceList;