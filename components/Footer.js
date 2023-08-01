
import React from "react";
import { render } from "react-dom";

// get our fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram,faLinkedin,faFacebook  } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import Link from "next/link";

// create our App

let getYear = () => {
    let currentYear = new Date().getFullYear();
    return currentYear;
};

const Footer = () => (
   
    <div className="footer">
        <div className="social-media">
            <Link href="https://www.instagram.com/antoineibry" target="_blank">
                <FontAwesomeIcon icon={faInstagram} size="2x" style={{color: "#ffffff",}} />            
                {/*<i class="fab fa-instagram fa-2x"></i>*/}
            </Link>

            <Link href="https://www.facebook.com/antoineibry" target="_blank">
                <FontAwesomeIcon icon={faFacebook} size="2x" style={{color: "#ffffff",}} />
            </Link>

            <Link href="https://www.linkedin.com/in/antoine-ibry"  target="_blank">
                <FontAwesomeIcon icon={faLinkedin} size="2x" style={{color: "#ffffff",}} />    
            </Link>

            <Link href="mailto:antoine.ibry@outlook.com" target="_blank">
                <FontAwesomeIcon icon={faEnvelope} size="2x" style={{color: "#ffffff",}} />
            </Link>
        </div>

        <p>Copyright {getYear()} Antoine Ibry</p>

    </div>
);

export default Footer