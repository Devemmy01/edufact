import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="bg-[#111111] mt-0 flex flex-col pt-10 pb-3 px-[10px] md:px-10 shadow-black shadow-2xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="md:w-1/2">
          <img src={logo} className="w-[110px]" alt="" />
          <p className="text-gray-400 text-[15px] md:text-[17px] font-onest pt-5 pl-[7px] md:pl-0">
            We work with local high schools and colleges, scholarship boards and
            many organizations in the business of international education. We
            also supply educational materials to schools, government and
            corporate organizations.
          </p>
        </div>

        <ul className="text-gray-400 mt-10 md:mt-20 font-onest text-[15px] md:text-[17px] flex flex-col gap-3 pl-[7px] md:pl-0 whitespace-nowrap">
          <Link to="about_us">About us</Link>
          <Link to="our_partners">Our partners</Link>
          <Link to="our_team">Our team</Link>
          <Link to="contact_us">Contact us</Link>
        </ul>

        <ul className="text-gray-400 mt-10 md:mt-20 pl-[7px] md:pl-0 font-onest text-[15px] md:text-[17px] flex flex-col gap-3 whitespace-nowrap">
          <li>
            info@edufactconsults.com <br />
            admissions@edufactconsults.com
          </li>
          <li>+2349019947067</li>
        </ul>
      </div>

      <div className="flex pl-[8px] md:pl-0 gap-3 pt-6">
        <a href="https://www.instagram.com/edufactconsultants/?hl=en">
          <i className="bx bxl-instagram text-gray-400 text-4xl cursor-pointer bg-gray-700 rounded-full px-[5px] md:px-[10px] p-1 md:p-2"></i>
        </a>
        <a href="https://facebook.com/edufactconsult/?_rdc=1&_rdr">
          <i className="bx bxl-facebook text-gray-400 text-4xl bg-gray-700 rounded-full px-[5px] md:px-[10px] p-1 md:p-2 cursor-pointer"></i>
        </a>
        <a href="https://www.linkedin.com/company/edufact-consultants/posts/?feedView=all">
          <i className="bx bxl-linkedin text-gray-400 text-4xl bg-gray-700 rounded-full px-[5px] md:px-[10px] p-1 md:p-2 cursor-pointer"></i>
        </a>
      </div>

      <p className="text-gray-400 text-[15px] md:text-[18px] font-onest pt-10 text-center">
        © {new Date().getFullYear()} Edufact Consultant. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
