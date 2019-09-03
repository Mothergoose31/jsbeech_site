import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';

class Header extends Component {
    render() {


    return (
        <header id="home">

        <nav id="nav-wrap">

            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	        <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

            <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	            <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">portfolio</a></li>
            
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
            </ul>

        </nav>

        <div className="row banner">
            <div className="banner-text">
            <h1 className="responsive-headline">Joseph Beech</h1>
            <h3> I'm a Software Engineer with a strong foundation in Physics Mathematics, with an appetite for learning and understanding new subjects as a means for analyzing new trends, that help me better explore and predict possibilities about the future.</h3>
            <hr />
            
            <ul className="social">
            <li><a href="https://www.linkedin.com/in/joseph-beech/"> <i class="fab fa-linkedin"></i></a></li>
            <li><a href="https://github.com/Mothergoose31"><i class="fab fa-github"></i></a></li>
            <li><a href="https://www.facebook.com/joseph.alvarenga"><i class="fab fa-facebook-square"></i></a></li>
            
            </ul>
            </div>
        </div>

        <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
        </p>

    </header>
    );
    }
}

export default Header;

