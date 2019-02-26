import React from 'react';
import {NavLink} from "react-router-dom";
import FYCMasthead from './../assets/hulu/fyc/fycmasthead.png'
import FYCGrab1 from './../assets/hulu/fyc/fyc1.png'
import FYCGrab2 from './../assets/hulu/fyc/fyc2.png'
import FYCGrab3 from './../assets/hulu/fyc/fycmobile.png'

const ThisIsHulu = () => {
    return(
        <div className="Hero page project hulu-project">
            <div className="HeroGroup">
                <h2>Hulu FYC</h2>
                <img src={FYCMasthead} alt="" width="100%"></img>
                <p><NavLink className="visitor" target="_blank" exact to="https://www.hulu.com/fyc" activeClassName="active">Visit Site</NavLink></p>
                <p>I was the tech lead on rebuilding the hulu.com/fyc website. FYC stands for For Your Consideration which is heavily used for award events like Golden Globes, Emmys, and the Oscars. The purpose of the site is for voters to use the site to learn more about the shows we want nominated and to watch them as well.</p>
                <p>Before the update, the site was out dated and the code had not been touched in a while. To stay current on front-end best practices, the site was built using React. I lead a team of two, one UX designer who helped restructure how the user would look for photos and videos and a developer who helped code the responsive website.</p>
                
                <div className="grabs">
                    <img src={FYCGrab3} alt="" width="100%"></img>
                    <img src={FYCGrab2} alt="" width="100%"></img>
                </div>
                <img src={FYCGrab1} alt="" width="100%"></img>

                
                
            </div>
            
        </div> 
    )
}

export default ThisIsHulu;