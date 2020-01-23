import React from 'react'
import ScrollAnimation from "react-animate-on-scroll";


export default function Skills(props) {
    return (
        <ScrollAnimation animateIn='bounceInRight'
                         animateOnce={true}>
            <section className="colorlib-skills" data-section="skills">
                <div className="colorlib-narrow-content">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                             data-animate-effect="fadeIn">

                            <span className="heading-meta">My Specialty</span>
                            <h2 className="colorlib-heading animate-box">My Skills</h2>

                        </div>
                    </div>


                    <div className="row">
                        <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">

                            <p>Over a year of experience working with JavaScript, NodeJS and React, writing server- and
                                client-side code.</p>

                        </div>


                        <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                            <div className="progress-wrap">

                                <h3>Javascript</h3>
                                <div className="progress">
                                    <div className="progress-bar color-1" role="progressbar" aria-valuenow="90"
                                         aria-valuemin="0" aria-valuemax="100" style={{"width": "90%"}}>
                                        <span>90%</span>
                                    </div>
                                </div>

                            </div>
                        </div>


                        <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                            <div className="progress-wrap">

                                <h3>Node.js, Express.js</h3>
                                <div className="progress">
                                    <div className="progress-bar color-2" role="progressbar" aria-valuenow="90"
                                         aria-valuemin="0" aria-valuemax="100" style={{"width": "90%"}}>
                                        <span>90%</span>
                                    </div>
                                </div>

                            </div>
                        </div>


                        <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                            <div className="progress-wrap">

                                <h3>React JS</h3>
                                <div className="progress">
                                    <div className="progress-bar color-3" role="progressbar" aria-valuenow="80"
                                         aria-valuemin="0" aria-valuemax="100" style={{"width": "80%"}}>
                                        <span>80%</span>
                                    </div>
                                </div>

                            </div>
                        </div>


                        <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                            <div className="progress-wrap">

                                <h3>PostgreSQL, Sequelize.js</h3>
                                <div className="progress">
                                    <div className="progress-bar color-4" role="progressbar" aria-valuenow="80"
                                         aria-valuemin="0" aria-valuemax="100" style={{"width": "80%"}}>
                                        <span>80%</span>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                            <div className="progress-wrap">

                                <h3>Python, Django/Flask</h3>
                                <div className="progress">
                                    <div className="progress-bar color-2" role="progressbar" aria-valuenow="60"
                                         aria-valuemin="0" aria-valuemax="100" style={{"width": "60%"}}>
                                        <span>60%</span>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                            <div className="progress-wrap">

                                <h3>HTML5, CSS3</h3>
                                <div className="progress">
                                    <div className="progress-bar color-5" role="progressbar" aria-valuenow="75"
                                         aria-valuemin="0" aria-valuemax="100" style={{"width": "75%"}}>
                                        <span>75%</span>
                                    </div>
                                </div>

                            </div>
                        </div>


                        <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                            <div className="progress-wrap">

                                <h3>Java</h3>
                                <div className="progress">
                                    <div className="progress-bar color-5" role="progressbar" aria-valuenow="40"
                                         aria-valuemin="0" aria-valuemax="100" style={{"width": "40%"}}>
                                        <span>40%</span>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                            <div className="progress-wrap">

                                <h3>Git</h3>
                                <div className="progress">
                                    <div className="progress-bar color-8" role="progressbar" aria-valuenow="90"
                                         aria-valuemin="0" aria-valuemax="100" style={{"width": "90%"}}>
                                        <span>90%</span>
                                    </div>
                                </div>

                            </div>
                        </div>


                    </div>
                </div>


            </section>
        </ScrollAnimation>
    )
}