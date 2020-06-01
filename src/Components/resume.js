import React, { Component } from 'react';
import ProfilePic from '../Assets/ProfilePic.png';
import { Grid, Cell, List, ListItem } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
    render() {
        return (

            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{ textAlign: 'center' }}>
                            <img
                                src={ProfilePic}
                                alt="avatar"
                                style={{ height: '200px' }}
                            />
                        </div>


                        <h2 style={{ paddingTop: '1em', color: '#b92b27', fontWeight: 'bold' }}>" Karan Kr. Gupta "</h2>
                        <h4 style={{ color: 'mediumslateblue' }}>Career Objective:</h4>
                        <hr style={{ borderTop: '3px solid #e22947', width: '50%' }} />
                        <p className="all">To secure a position where I can efficiently contribute my skills and abilities to the growth of the organization and build my professional career.</p>
                        <hr style={{ borderTop: '3px solid #e22947', width: '50%' }} />
                        <h5 style={{ color: 'mediumslateblue', fontWeight: 'bold' }}>Address</h5>
                        <p className="all">J-4/9,Krishna Nagar,Delhi-51</p>
                        <h5 style={{ color: 'mediumslateblue', fontWeight: 'bold' }}>Phone</h5>
                        <p className="all">(+91)-8802030518</p>
                        <h5 style={{ color: 'mediumslateblue', fontWeight: 'bold' }}>Email</h5>
                        <p className="all">karangupta308@gmail.com</p>
                        <hr style={{ borderTop: '3px solid #e22947', width: '50%' }} />
                        <h5 style={{ color: 'mediumslateblue', fontWeight: 'bold' }}>Soft Skills</h5>
                        <List>
                            <ListItem style={{ color: 'antiquewhite' }}>*  Leadership and Time management</ListItem>
                            <ListItem style={{ color: 'antiquewhite' }}>*  Ability to work under pressure</ListItem>
                            <ListItem style={{ color: 'antiquewhite' }}>*  Listening and Communication Skills</ListItem>
                            <ListItem style={{ color: 'antiquewhite' }}>*  Complete allocated work on time</ListItem>
                        </List>
                        <hr style={{ borderTop: '3px solid #e22947', width: '50%' }} />
                        <h5 style={{ color: 'mediumslateblue', fontWeight: 'bold' }}>Hobbies</h5>
                        <List>
                            <ListItem style={{ color: 'antiquewhite' }}>*  Vocalist and Guitarist</ListItem>
                            <ListItem style={{ color: 'antiquewhite' }}>*  Sketching</ListItem>
                         </List>

                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2 style={{ color: 'mediumslateblue', fontWeight: 'bold' }}>Education</h2>


                        <Education
                            startYear={2016}
                            endYear={2020}
                            schoolName="ABES Institute Of Technology"
                            schoolDescription="Pursued my BTech in Computer Science branch from this college."
                        />

                        <Education
                            startYear={2015}
                            endYear={2016}
                            schoolName="Bal Mandir Sr. Sec. School"
                            schoolDescription="Pursued my Higher Education(Class 12th) in Science branch from this school."
                        />

                        <Education
                            startYear={2013}
                            endYear={2015}
                            schoolName="Bal Mandir Sr. Sec. School"
                            schoolDescription="Pursued my Intermediate Education(Class 10th) from this school."
                        />
                        <hr style={{ borderTop: '3px solid #e22947' }} />

                        <h2 style={{ color: 'mediumslateblue', fontWeight: 'bold' }}>Experience</h2>

                        <Experience
                            startYear={2019}
                            jobName="Internship in Airtel,Gurgaon"
                            jobDescription="(10th June 2019 to 19th August 2019) The task was to develop the ‘Web UI’ for the Customer Database being maintained by the Admins using ReactJS.
                  Also made the related APIs using Spring Boot."
                        />


                        <hr style={{ borderTop: '3px solid #e22947' }} />
                        <h2 style={{ color: 'mediumslateblue', fontWeight: 'bold' }}>Skills</h2>
                        <Skills
                            skill="React"
                            progress={70}
                        />
                        <Skills
                            skill="HTML/CSS"
                            progress={50}
                        />
                        <Skills
                            skill="Bootstrap"
                            progress={60}
                        />
                        <Skills
                            skill="Springboot"
                            progress={30}
                        />
                        <Skills
                            skill="JavaScript"
                            progress={50}
                        />
                        <Skills
                            skill="Flutter"
                            progress={70}
                        />



                    </Cell>
                </Grid>
            </div>


        );

    }
}

export default Resume;