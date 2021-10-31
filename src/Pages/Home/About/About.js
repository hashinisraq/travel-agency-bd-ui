import React from 'react';
import { Accordion } from 'react-bootstrap';

const About = () => {
    return (
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header><span style={{fontWeight:"500"}}>VISION</span></Accordion.Header>
                <Accordion.Body>
                    To dominate the tourism industry by excellence in service with innovation and creative concepts in the global marketplace for our clients that will help us achieve the title of best travel agency in Bangladesh.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header><span style={{fontWeight:"500"}}>MISSION</span></Accordion.Header>
                <Accordion.Body>
                    Provide our clients with unforgettable travel experiences with guaranteed more than satisfactory services that exceed the level of their expectations.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header><span style={{fontWeight:"500"}}>SERVICE</span></Accordion.Header>
                <Accordion.Body>
                    Professional customer consultation providing hassle-free travel and journey. Creative but determined approach to search for the most appropriate travel arrangements and accommodations and identifying the best possible values. Our travel consultants are friendly, polite, professional, and experienced in accommodating both the seasoned traveler and those who are new to the world of travel.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header><span style={{fontWeight:"500"}}>VALUES</span></Accordion.Header>
                <Accordion.Body>
                    <ol>
                        <li>Direct and Open communication</li>
                        <li>Speedy process</li>
                        <li>Teamwork</li>
                        <li>Flexibility and willingness to accept change</li>
                        <li>Recognizing and learning from mistakes</li>
                        <li>Risk-taking</li>
                        <li>Quality care</li></ol>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
                <Accordion.Header><span style={{fontWeight:"500"}}>A TEAM OF EXPERTS</span></Accordion.Header>
                <Accordion.Body>
                We believe that only an experienced travel expert can help you discover its unique and amazing qualities. We have a team of specialists who work with full dedication and great passion, discipline, and knowledge not only to show you the best of the world but to allow you to feel it with all your senses and feel as if you are floating with joy.  
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
                <Accordion.Header><span style={{fontWeight:"500"}}>OUR TRIPS</span></Accordion.Header>
                <Accordion.Body>
                Our trips are carefully mastered to combine the cultural and natural riches with comfort, safety, luxury, and adventure to create trips that will have our guests talking for a long time. We have four key components: discovery, value, pace, and choice.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default About;