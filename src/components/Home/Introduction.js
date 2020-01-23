import React from 'react'


export default function Introduction(props) {

    return (

        <section id="colorlib-hero" className="js-fullheight" data-section="home">
            <div className="flexslider js-fullheight">
                <ul className="slides">
                    <li>
                        <div className="overlay"></div>
                        <div className="container-fluid">
                            <div className="row">
                                <div
                                    className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                                    <div className="slider-text-inner">
                                        <div className="desc">
                                            <h1>I am <br/>a Web Developer</h1>
                                            <h2></h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>

    )
}