import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";

const Template = () => {
    return (

        <div className="template-container">
            <div className="para-container" style={{marginLeft:"20px"}}> <h1>Hi,Hi,I'm John Doe</h1>
                <p style={{ textAlign: "justify" }}>A freelance Web developer from London . I convert custom web designs to bootstrap templates.</p>
                <p>I make Youtube videos and write Blog.</p>
                <button className= "btn btn-primary " style={{width:"40%",marginLeft:"50px"}}>I'M AVAILABLE</button>
                <div className="icon-container d-flex mt-4 " style={{ fontSize: "20px", color: "black",marginLeft:"70px", gap:"20px" }}>
                    <FaFacebookF />
                    <FaTwitter /> 
                    <RiInstagramFill />
                    <FaGithub />
                </div>
                </div>
                
            <div className="img-container">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBqHARSQEkWdeMLMTHT8TwmhUfcHFm206n5A&s" alt="" />
            </div>
            
        </div>
    )
}

export default Template
