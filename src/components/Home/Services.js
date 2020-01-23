import React from 'react'
import FontAwesome from "react-fontawesome";
import ScrollAnimation from "react-animate-on-scroll";


export default function Services(props) {
    return (
        <ScrollAnimation animateIn='fadeIn'
                                 animateOnce={true}>
        <section className="colorlib-services" data-section="services">
            <div className="colorlib-narrow-content">
                <ScrollAnimation animateIn='flipInX'
                                 animateOnce={true}>
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                             data-animate-effect="fadeInLeft">

                            <span className="heading-meta">What I do?</span>
                            <h2 className="colorlib-heading">Here are some of my expertise</h2>
                        </div>
                    </div>
                    <div className="row row-pt-md">
                        <div className="col-md-4 text-center animate-box">
                            <div className="services color-2">
								<span className="icon">

                                    <FontAwesome size='2x' style={{"margin-top": "10px"}}
                                                 className="fas fa-database"/>
								</span>
                                <div className="desc">
                                    <h3>Back-end</h3>
                                    <p>Building the server-side of the app. Creating REST APIs and managing databases</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 text-center animate-box">
                            <div className="services color-6">
								<span className="icon">
									<FontAwesome size='3x' style={{"margin-top": "8px"}}
                                                 className="fas fa-mobile"/>
								</span>
                                <div className="desc">
                                    <h3>Front-end</h3>
                                    <p>Crafting the user-facing code and architecture of immersive UI/UX</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </section>
        </ScrollAnimation>
    )
}