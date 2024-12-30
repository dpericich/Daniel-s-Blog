import { Button } from "@mui/material";

const Notes = () => {
    return (
        <>
            <ul style={{ textAlign: 'left' }}>
                <li>Landing Page to point to my work for clients</li>
                <li>Software Engineering Project Page</li>
                <li>Blog Page to direct out to Medium and guest blog posts</li>
                <li>Tutoring / Teaching Page</li>
                <li>About Me Page to give some background</li>
                <li>Contact Page to </li>
                <hr />
                <li>Good practice for building landing page</li>
                <li>Good practice for working on SEO</li>
                <li>Good practice for styling a website w/ a component library</li>
                <hr />
                <li>Landing Page</li>
                <ol>
                    <li>Accomplishments: +200 blog posts; +30 clients; +50 students</li>
                    <li>Some tagline for what my services are like</li>
                    <li>Small sections for work with links out to the services (maybe this is an carousel)</li>
                    <li>Section for contact me for with work</li>
                    <li>A scrolling list of / list of companies who I have worked with (professionally and as a freelance engineer)</li>
                    {/* OwensCorning, Chegg, AirFrance, Startups, UT Austin, Code Bootcamps */}
                </ol>
            </ul>
            <Button variant="contained">Hello World</Button>
        </>
    )
};

export default Notes;