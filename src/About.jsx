import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class About extends Component {
    render() {

        return (
            <section id="about">
                <div className="row">
                    <div className="three columns">
                        
                        <img className="profile-pic"  src='./images/background3.jpg' alt="My Profile Picture" />
                    </div>
                    <div className="nine  columns main-col">
                        <h2>About Me</h2> 
                        <p></p>
                        <div className="row">
                            <div className="columns contact-details">
                            <h2>Contact Details</h2>
                        <br />
                                    <span>(206)-455-0824</span><br />
                                <span>JosephAlvarengaBeech@pm.me</span>
                                
                            </div>
                            <div className="columns download">
                            <p>
                            
                                <a href='' className="button"><FontAwesomeIcon
                                icon="file-pdf"/>Download Resume</a>
                            </p>
                        </div>
                    </div>
                    </div>
                </div>

            </section>
        );
    }
}

export default About;