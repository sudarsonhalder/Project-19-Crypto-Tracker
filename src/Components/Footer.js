import React from "react";
// import Logo from "./images/whitelogo.png";
import { NavLink } from "react-router-dom";
import {
	faYoutube,
	faFacebook,
	faInstagram,
	faLinkedin,
	faGithub
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function topFunction() {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

const Footer = () => {
	return (
		<>
			<footer>
				<div class="content">
					<div class="top">
						{/* <div class="logo-details">
							<img style={{ width: "150px" }} src={Logo} alt="logo"></img>
						</div> */}
						<div class="media-icons">
							<a
								className="youtube social"
								target="_blank"
								href="https://github.com/sudarsonhalder"
								rel="noreferrer"
							>
								<i class="">
									{" "}
									<FontAwesomeIcon icon={faGithub} size="2x" />
								</i>
							</a>
							<a
								class="instagram social"
								target="_blank"
								href="https://www.instagram.com/mr.halder/"
								rel="noreferrer"
							>
								<i class="">
									{" "}
									<FontAwesomeIcon icon={faInstagram} size="2x" />
								</i>
							</a>
							<a
								class="Linkedin social"
								target="_blank"
								href="https://www.linkedin.com/in/sudarsonhalder/"
								rel="noreferrer"
							>
								<i class="">
									{" "}
									<FontAwesomeIcon icon={faLinkedin} size="2x" />
								</i>
							</a>
						</div>
					</div>
					<h3 style={{textAlign:"center",marginBottom:"15px"}}>Made with ❤️ by <a href="https://sudarsonhalder.netlify.app/">Sudarson Halder</a></h3>

				</div>
				
  
   
			</footer>
		</>
	);
};

export default Footer;
