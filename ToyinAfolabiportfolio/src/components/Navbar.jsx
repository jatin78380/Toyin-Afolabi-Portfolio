import { FaInstagram, FaLinkedin } from "react-icons/fa";
export const Navbar = () => {
  return (
    <div>
      <nav className="mb-20 flex items-center justify-between py-6">
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <a href="https://www.linkedin.com/in/toyin-afolabi-/" className="text-blue-600" target="_blank">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/dhebbysmart?igsh=dm16aGU4enM1Yjlz" className="text-pink-500" target="_blank">
            <FaInstagram />
          </a>
        </div>
      </nav>
    </div>
  );
};
