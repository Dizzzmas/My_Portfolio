import React from 'react'
import ScrollAnimation from "react-animate-on-scroll";


export default function Education(props) {

    return (
        <ScrollAnimation animateIn='fadeIn'
                                 animateOnce={true}>
        <section className="colorlib-education" data-section="education">
            <div className="colorlib-narrow-content">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                         data-animate-effect="fadeInLeft">
                        <span className="heading-meta">Education</span>
                        <h2 className="colorlib-heading animate-box">Education</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                        <div className="fancy-collapse-panel">
                            <div className="panel-group" id="accordion" role="tablist">
                                <div className="panel panel-default">
                                    <div className="panel-heading" role="tab" id="headingOne">
                                        <h4 className="panel-title">
                                            <a className="collapsed" data-toggle="collapse" data-target="#collapseOne"
                                               href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">High
                                                School Diploma <strong>(2007-09 - 2018-05)</strong>
                                            </a>
                                        </h4>
                                    </div>
                                    <div id="collapseOne" className="panel-collapse collapse" role="tabpanel"
                                         aria-labelledby="headingOne" data-parent="#accordion">
                                        <div className="panel-body">

                                            <ul>
                                                <li>Vinnytsia School-Gymnasium №2, Soborna St. 94, Vinnytsia, Vinnytsia
                                                    Oblast, 21000
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="panel panel-default">
                                    <div className="panel-heading" role="tab" id="headingTwo">
                                        <h4 className="panel-title">
                                            <a className="collapsed" data-toggle="collapse"  data-target="#collapseTwo"
                                               href="#collapseTwo" aria-expanded="false"
                                               aria-controls="collapseTwo">Bachelor Degree of Software
                                                Engineering <strong>(2018-09 - Current)</strong>
                                            </a>
                                        </h4>
                                    </div>
                                    <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel"
                                         aria-labelledby="headingTwo" data-parent="#accordion">
                                        <div className="panel-body">
                                            <ul>
                                                <li>Igor Sikorsky Kyiv Polytechnic Institute, Peremohy Ave, 37, Kyiv,
                                                    03056
                                                </li>
                                                <li>Faculty of Applied Mathematics, Department of Software Engineering
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
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