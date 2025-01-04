import { Divider } from "@mui/material";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import WorkExperienceList from "../components/workList";

const ContactPage = () => {
    return (
        <div className="">
            {/* Will have a card with the headshot and bio */}
            {/* Will have another element to the left or right with expereince cards*/}
            <h2>About Daniel Pericich</h2>
            {/* Need a headshot */}
            {/* Maybe this section is actually a card? */}
            <p>
                Daniel Pericich is a Software Engineer with over 5 years of development experience. In that time he has built and maintained apps
                for airlines, contstruction, Web3, AI and e-commerce companies. Along with his work programming, he has been an active technical
                writer, writing ~200 techincal articles on various software engineering topics for his personal blog as well as for many software
                companies, startups and bootcamps.
            </p>
            <p>
                In his freetime Daniel loves to stay active running, lifiting and playing sports. He is an avid reader on any topic and enjoys
                exploring breweries and coffee shops around town.
            </p>
            <Divider variant="middle">Contact Me</Divider>
            <WorkExperienceList />
            {/* Also have a link to my upwork in case some one wants to reach out that way */}
            <TextField id="email" label="Email" variant="filled" />
            <Button variant="contained">Submit</Button>
        </div>
    )
};

export default ContactPage;