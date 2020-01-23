import React from 'react';
import FontAwesome from "react-fontawesome";
import me from '../../images/me.jpg';


export default function MyNavBar(props) {


    return (
        <React.Fragment>
            <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse"
               data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i></i></a>
            <aside id="colorlib-aside" role="complementary" className="border js-fullheight">
                <div className="text-center">
                    <div className="author-img" style={{"backgroundImage": `url(${me})`}}></div>
                    <h1 id="colorlib-logo"><a href="#">Dmytro Yankovskyi</a></h1>
                    <span className="position"><a href="#">Web Developer</a> from Kiev, Ukraine</span>
                </div>
                <nav id="colorlib-main-menu" role="navigation" className="navbar">
                    <div id="navbar" className="collapse">
                        <ul>
                            <li className="active"><a href="#" data-nav-section="home">Home</a></li>
                            <li><a href="#" data-nav-section="about">About</a></li>
                            <li><a href="#" data-nav-section="services">Services</a></li>
                            <li><a href="#" data-nav-section="skills">Skills</a></li>
                            <li><a href="#" data-nav-section="education">Education</a></li>
                            <li><a href="#" data-nav-section="work">Projects</a></li>
                            <li><a href="#" data-nav-section="contact">Contact</a></li>
                        </ul>
                    </div>
                </nav>

            </aside>
        </React.Fragment>
    )
}