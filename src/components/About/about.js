import React from "react";
import AboutImage from "../../assets/masala.jpg";
import "../Style/About.css";
function About(){
    console.log("Image URL:",AboutImage);
    return(
        <div className="about">
            <img src="static/media/masala.f4dd64f4906d42ddcbdb.jpg"></img>
            <div
                Style={{backgroundImage:`url(${AboutImage})`,
                backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        minHeight: '100vh'
    }}>
            </div>
            <div className="aboutBottom">
                <h1>About Page</h1>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
            accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
            molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
            officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
            nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque
            error repudiandae fuga? Ipsa laudantium molestias eos sapiente
            officiis modi at sunt excepturi expedita sint? Sed quibusdam
            recusandae alias error harum maxime adipisci amet laborum.
            Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a
            cumque velit
                </p>
            </div>
            
        </div>
    )
}

export default About