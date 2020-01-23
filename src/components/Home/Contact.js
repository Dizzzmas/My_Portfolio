import React from 'react'
import FontAwesome from "react-fontawesome";
import ScrollAnimation from "react-animate-on-scroll";
import {Link} from "react-router-dom";


export default function Contact(props) {
    return (
        <ScrollAnimation animateIn='flipInY'
                         animateOnce={true}>
            <section className="colorlib-contact" data-section="contact">
                <div className="colorlib-narrow-content">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                             data-animate-effect="fadeInLeft">
                            <span className="heading-meta">Get in Touch</span>
                            <h2 className="colorlib-heading">Contact</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-5">
                            <div className="colorlib-feature colorlib-feature-sm animate-box"
                                 data-animate-effect="fadeInLeft">
                                <div className="colorlib-icon">
                                    <FontAwesome size='2x' style={{"margin-top": "30px"}}
                                                 className="fas fa-envelope-square"/>
                                </div>
                                <div className="colorlib-text">
                                    <p><a
                                        href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=yankovskyi.dmytro736@gmail.com&su=MISSED">yankovskyi.dmytro736@gmail.com</a>
                                    </p>
                                </div>
                            </div>

                            <div className="colorlib-feature colorlib-feature-sm animate-box"
                                 data-animate-effect="fadeInLeft">
                                <div className="colorlib-icon">
                                    <a href="https://t.me/Dizzzmas"><FontAwesome size='2x'
                                                                                 style={{"margin-top": "30px"}}
                                                                                 className="fab fa-telegram"/></a>
                                </div>
                                <div className="colorlib-text">
                                    <p><br/></p>
                                </div>
                            </div>

                            <div className="colorlib-feature colorlib-feature-sm animate-box"
                                 data-animate-effect="fadeInLeft">
                                <div className="colorlib-icon">
                                    <a href="https://www.linkedin.com/in/dmytro-yankovskyi-0708bb193/"><FontAwesome
                                        size='2x' style={{"margin-top": "30px"}}
                                        className="fab fa-linkedin"/></a>
                                </div>
                                <div className="colorlib-text">
                                    <p><br/></p>
                                </div>
                            </div>

                            <div className="colorlib-feature colorlib-feature-sm animate-box"
                                 data-animate-effect="fadeInLeft">
                                <div className="colorlib-icon">
                                    <a href="https://github.com/Dizzzmas"><FontAwesome size='2x'
                                                                                       style={{"margin-top": "30px"}}
                                                                                       className="fab fa-github"/></a>
                                </div>
                                <div className="colorlib-text">
                                    <p><br/></p>
                                </div>
                            </div>

                            <p><Link className="btn btn-primary btn-learn" to="/static/Dmytro_Yankovskyi_-_Web_Developer.pdf"
                                     target="_blank" download>Download resume <i
                                className="icon-download4"></i></Link>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </ScrollAnimation>
    )
}