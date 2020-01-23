import React from 'react'
import MyNavBar from "./MyNavBar";
import Introduction from "./Introduction";
import About from "./About";
import Services from "./Services";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Education from "./Education";





export default function Index() {


    return (

        <React.Fragment>
            <MyNavBar/>
            <div id="colorlib-main">

                <Introduction/>
                <About/>
                <Services/>
                <Skills/>
                <Education/>
                <Projects/>
                <Contact/>
            </div>
        </React.Fragment>
    )
}