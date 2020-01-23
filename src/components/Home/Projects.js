import React from 'react'
import project1 from '../../images/project-2.jpg'
import ScrollAnimation from "react-animate-on-scroll";


export default function Projects(props) {
    return (
        <React.Fragment>

             <ScrollAnimation animateIn='bounceInRight'
                                     animateOnce={true}>
            <section className="colorlib-work" data-section="work">
                <div className="colorlib-narrow-content">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                             data-animate-effect="fadeInLeft">

                                <span className="heading-meta">My Projects</span>
                                <h2 className="colorlib-heading animate-box">Recent Projects</h2>

                        </div>
                    </div>
                    <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">

                    </div>

                        <div className="row">
                            <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                                <a href="https://notice-me-net.herokuapp.com">
                                    <div className="project" style={{"backgroundImage": `url(${project1})`}}>
                                        <div className="desc">
                                            <div className="con">
                                                <h3 style={{"color": "#fff"}}>NoticeMe</h3>
                                                <span>A social network where people can share posts, follow each other and communicate</span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                </div>
            </section>

                  </ScrollAnimation>

        </React.Fragment>
    )
}