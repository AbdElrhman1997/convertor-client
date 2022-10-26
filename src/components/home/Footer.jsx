import React from 'react'
import {Link} from "react-router-dom";


function Footer() {
    return (
    <div className='footer-sec'>

    <div className="footer-sec-contain">
        <div>
            <h1>Quick Links</h1>
            <ul>
                <li><Link to={`/detail/${23}`} >PDF to Word</Link></li>
                <li><Link to={`/detail/${24}`}>Word to PDF</Link></li>
                <li><Link to={`/MinifyCSS`}>Word to PDF</Link></li>
                <li><Link to={`/CSSformatter`}>Word to PDF</Link></li>
                <li><Link to={`/MinifyHTML`}>Word to PDF</Link></li>
                <li><Link to={`/HTMLFormatter`}>Word to PDF</Link></li>
                <li><Link to={`/MinifyJSON`}>Word to PDF</Link></li>
                <li><Link to={`/jsonformatter`}>Word to PDF</Link></li>
            </ul>
        </div>
        <div className="footer-sec-contain-mail">
        <h3><span role="img" aria-label="mailbox">📫 </span>New tools in your inbox</h3>
        <p>Join over 6800 subscribers. You'll get new tools as soon as they're published and occasional project updates.

        </p>
        <div className="footer-sec-contain-mail-form">
            <div className="footer-sec-contain-mail-form-input">
                <input type="text" placeholder='Email' />
            </div>
            <button type="button" className="btn btn-outline-primary">Submit</button>
        </div>
        </div>
        
    </div>
    <div className="footer-sec-endcontain">
    <div className="footer-sec-endcontain-copy">
        © 2022, Made by  <a href="#" target="blank" rel="noopener noreferrer">Fix Tools</a>
        </div>
        <div className="footer-sec-endcontain-links">
            
        <a href="/#">Cookies</a>
        <a href="/#">Privacy Policy</a>
        
        </div>
    </div>
</div>
)
}

export default Footer;


// <div className="footer-sec-contain-about">
//         <h3><span role="img" aria-label="info">ℹ️ </span>About Untools</h3>
//         <p>Collection of thinking tools and frameworks to help you solve problems, make decisions and understand systems.
            
//         </p>
//         <a href="#">More about Untools</a>
//         <p>Do you have feedback or want to suggest a tool?
            
//         </p>
//         <a href="#">Let me know on Twitter!</a>
//         </div>