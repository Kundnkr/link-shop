import './App.css';
import General from './Component/General';
import { BrowserRouter } from 'react-router-dom'
import { FaBriefcase, FaCoffee, FaGithub, FaInstagram } from "react-icons/fa";
function App() {
  let portfolio = {
    name:"Portfolio",
    disc:"Explore my portfolio website to discover a curated collection of my creative work, showcasing my skills in design, development, and more.",
    link: "https://kundnkr.netlify.app/"
  }
  let BuyCoffee = {
    name:"Buy Me a Coffee",
    disc:"If you appreciate my work, and you're feeling generous feel free to buy me a cup of coffee. Thank you!",
    link: "https://www.buymeacoffee.com/kundnkr"
  }
  let gihub = {
    name:"GitHub",
    disc:"Don't feel like manually copying the code? Grab the code straight from GitHub.",
    link: "https://github.com/Kundnkr?tab=repositories"
  }
  let instagram = {
    name:"Instagram",
    disc:"Follow me on Instagram to keep up with what I'm doing. I share tons of useful code snippets that can save you time",
    link: "https://www.instagram.com/kundnkr/"
  }
  
  return (
    <>
      <BrowserRouter>
        <div className="general-section">
          <div className="heading">
            <li>General</li>
          </div>
          <General name={portfolio.name} link = {portfolio.link} disc = {portfolio.disc} logo={<FaBriefcase className='logo' size={"30px"} />} />
          <General name={BuyCoffee.name} link = {BuyCoffee.link} disc = {BuyCoffee.disc} logo={<FaCoffee className='logo' size={"30px"} />} />
          <General name={gihub.name} link = {gihub.link} disc = {gihub.disc} logo={<FaGithub className='logo' size={"30px"} />} />
          <General name={instagram.name} link = {instagram.link} disc = {instagram.disc} logo={<FaInstagram className='logo' size={"30px"} />} />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
