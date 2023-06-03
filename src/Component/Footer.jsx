import React from 'react'
import { Link } from 'react-router-dom'
import './Css/Footer.css'
import { FaShareSquare } from 'react-icons/fa'
import { MdOutgoingMail } from "react-icons/md";

export default function Footer() {
    return (
        <footer>
        <p className='footer-title'>Any questions or remarks?</p>
            <div className="footer-link">
                <Link to="https://kundnkr.netlify.app/#contact">Contact Us<FaShareSquare className='logo footer-icon' size={"25px"} /></Link>
                <Link to="mailto:Mrkundan19@gmail.com">Write a Mail<MdOutgoingMail className='logo footer-icon' size={"25px"} /></Link>
            </div>
        </footer>
    )
}
