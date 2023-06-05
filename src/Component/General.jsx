import React, {useEffect} from 'react'
import { FaLink } from "react-icons/fa";
import { Link } from 'react-router-dom'
import './Css/General.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function General({ logo, name, link, disc, delay }) {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <>
            <section className='general' data-aos="fade-up" data-aos-duration={delay}>
                <div className="general-container" >
                    <div className="logo-name" >
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
