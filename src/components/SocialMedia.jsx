import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
const SocialMedia = () => {
    return (
        <>
            <div className="app__social ">
                <div>
                    <a href="https://github.com/Shazly99"><BsGithub /></a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/ahmed-elshazly-345076151/" ><BsLinkedin /></a>
                    
                </div>
                <div>
                    <a href="https://www.facebook.com/profile.php?id=100009776111150"><FaFacebookF /></a>
                    
                </div>
            </div>
        </>
    )
}

export default SocialMedia
