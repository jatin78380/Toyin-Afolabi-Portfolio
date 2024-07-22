// import JPP from "../assets/JPP.png";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export const Navbar = () => {
  return (
    <div> 
        <nav className=" mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
          <img className="mx-2 w-10 rounded"  alt="logo"/> 
        </div>
        <div className="m-8 flex itens-center justify-center gap-4 text-2xl">
         <a href="https://www.linkedin.com/in/toyin-afolabi-/" target="_blank">
          <FaLinkedin />
          </a>
          <a href="https://www.facebook.com/toyin.afolabi.92" target="_blank">
          <FaFacebook/>
          </a>

        </div>
        </nav>


      </div>
  )
}