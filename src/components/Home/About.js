import React from 'react';
import ScrollAnimation from "react-animate-on-scroll";

export default function About(props) {

    return (
        <section className="colorlib-about" data-section="about">
            <div className="colorlib-narrow-content">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                            <div className="col-md-12">
                                <div className="about-desc">
                                    <ScrollAnimation animateIn='bounceInRight'
                                                     animateOnce={true}>


                                        <span className="heading-meta">About</span>
                                        <h2 className="colorlib-heading">About Me</h2>
                                        <p><strong>Hi I'm Dmytro Yankovskyi</strong>, an enthusiastic Web Developer eager to
                                            contribute to team success through hard work, attention to detail and
                                            remarkable organizational skills. <p>Motivated to learn, grow and excel in
                                                Software Engineering and Web Development.</p></p>
                                    </ScrollAnimation>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

)

}