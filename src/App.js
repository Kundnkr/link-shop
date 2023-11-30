
import './App.css';
import General from './Component/General';
import Footer from './Component/Footer';
import { BrowserRouter } from 'react-router-dom'
import { FaBriefcase, FaCoffee, FaGithub, FaInstagram, FaYoutube, FaDiscord, FaTelegram} from "react-icons/fa";



function App() {
  let portfolio = {
    name: "Portfolio",
    disc: "Explore my portfolio website to discover a curated collection of my creative work, showcasing my skills in design, development, and more.",
    link: "https://kundankr.online/"
  }
  let discord = {
    name: "Discord | Developer community",
    disc: "Join our web developer community server on Discord, where you can ask any questions related to web development and help others with their queries. Let's come together to share knowledge and support each other in our web development journey.",
    link: "https://discord.gg/KYfPpKbZmE"
  }
  let telegram = {
    name: "Telegram | Developer community",
    disc: "Join our web developer community on Telegram, where you can ask any questions related to web development and help others with their queries. Let's come together to share knowledge and support each other in our web development journey.",
    link: "https://t.me/+gnB75XnlxpUxOTRl"
  }
  let BuyCoffee = {
    name: "Buy Me a Coffee",
    disc: "If you appreciate my work, and you're feeling generous feel free to buy me a cup of coffee. Thank you!",
    link: "https://www.buymeacoffee.com/kundnkr"
  }
  let gihub = {
    name: "GitHub",
    disc: "Don't feel like manually copying the code? Grab the code straight from GitHub.",
    link: "https://github.com/Kundnkr?tab=repositories"
  }
  let instagram = {
    name: "Instagram",
    disc: "Stay in the loop with my life's adventures by connecting with me on Instagram.",
    link: "https://www.instagram.com/kundnkr/"
  }
  let youtube = {
    name: "YouTube",
    disc: "Do you want longer & details step-by-step toturial? Subscribe to my Channel.",
    link: "https://youtube.com/@kundnkr"
  }



  return (
    <>
      <BrowserRouter>
        <div className="general-section">
          <div className="heading" >
            <li>General</li>
          </div>
          <General delay="5000" className="card" name={portfolio.name} link={portfolio.link} disc={portfolio.disc} logo={<FaBriefcase className='logo' size={"30px"} />} />
          <General delay="5000" className="card" name={youtube.name} link={youtube.link} disc={youtube.disc} logo={<FaYoutube className='logo' size={"30px"} />} />
          <General delay="5000" className="card" name={BuyCoffee.name} link={BuyCoffee.link} disc={BuyCoffee.disc} logo={<FaCoffee className='logo' size={"30px"} />} />
          <General delay="5000" className="card" name={gihub.name} link={gihub.link} disc={gihub.disc} logo={<FaGithub className='logo' size={"30px"} />} />
          <General delay="5000" className="card" name={discord.name} link={discord.link} disc={discord.disc} logo={<FaDiscord className='logo' size={"30px"} />} />
          <General delay="5000" className="card" name={instagram.name} link={instagram.link} disc={instagram.disc} logo={<FaInstagram className='logo' size={"30px"} />} />
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
