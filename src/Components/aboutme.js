import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import ProfilePic from '../Assets/ProfilePic.png';

class Aboutme extends Component {
    render() {
        return (

            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={12}>
                        <h2 styles={{ color: 'red' }}>" Karan Kumar Gupta "</h2>
                        <img
                            src={ProfilePic}
                            alt="avatar"
                            style={{ height: '250px' }}
                        />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>
                            "Building state-of-the-art, easy to use, user-friendly websites and applications is truly a passion of mine and I am confident I would be an excellent addition to an organization. In addition to my knowledge base, I actively seek out new technologies and stay up-to-date on industry trends and advancements. This has allowed me to stay ahead of the curve and deliver exceptional work to all of my employers, including those I've worked for on a project basis.Though I have no experience ,yet proficient in HTML/CSS, JavaScript,Bootstrap and ReactJs & Flutter; plus modern libraries and frameworks.Building websites and apps that are responsive and usable.Identifying innovative ideas and proof of concepts according to project requirements."
                            </p>

                    </Cell>
                </Grid>
            </div>
        );

    }
}

export default Aboutme;