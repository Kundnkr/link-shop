import React from 'react'
import { FaLink } from "react-icons/fa";
import { Link } from 'react-router-dom'
import './Css/General.css'

export default function General({ logo, name, link, disc }) {
    return (
        <>
            <section className='general'>
                <div className="general-container">
                    <div className="logo-name">
                        {logo}
                        <h3>{name}</h3>
                    </div>
                    <div className="disc">
                        {disc}
                    </div>
                    <Link target='_blank' to={link} className='btnlink'><div className='btn-container'><span><FaLink size={"15px"} /></span> Let's Go</div></Link>
                </div>
            </section>
        </>
    )
}
