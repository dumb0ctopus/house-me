import logo from "../../../assets/logo/png/housemelogo_4.png";
import x from "../../../assets/socials/socialsIcons/png/X_Twitter.png";
import whatsapp from "../../../assets/socials/socialsIcons/png/Whatsapp.png";
import facebook from "../../../assets/socials/socialsIcons/png/Facebook.png";
import linkedin from "../../../assets/socials/socialsIcons/png/Linkedin.png";
import instagram from "../../../assets/socials/socialsIcons/png/Instagram.png";
import LocationOnSharpIcon from "@mui/icons-material/LocationOnSharp";
import CallSharpIcon from "@mui/icons-material/CallSharp";
import MailSharpIcon from "@mui/icons-material/MailSharp";

function Footer() {
  return (
    <footer className="bg-white py-4 rounded-lg border-t-2 border-l-2 border-r-2 border-black ml-11 mr-11">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center mt-16">
        <div className="items-center mb-7">
          <a href="##">
            <img src={logo} alt="house me logo" className="h-8 mr-2" />
          </a>
          <div className="ml-4 flex space-x-4 mt-3">
            <a href="##" className="w-5">
              <img src={x} alt="X(FKA Twitter)" />
            </a>
            <a href="##" className="w-5">
              <img src={whatsapp} alt="whatsapp" />
            </a>
            <a href="##" className="w-5">
              <img src={facebook} alt="facebook" />
            </a>
            <a href="##" className="w-5">
              <img src={linkedin} alt="linkedin" />
            </a>
            <a href="##" className="w-5">
              <img src={instagram} alt="instagram" />
            </a>
          </div>
        </div>
        <div className="flex md:flex-row sm:flex-col flex-row items-center space-x-4 mb-7">
          <a href="##" className="text-gray-500 text-xs hover:text-gray-700">
            FAQs
          </a>
          <a
            href="##"
            className="text-gray-500 sm:text-sm text-xs hover:text-gray-700"
          >
            Contact Us
          </a>
          <a
            href="##"
            className="text-gray-500 sm:text-sm text-xs hover:text-gray-700"
          >
            EULA
          </a>
          <a
            href="##"
            className="text-gray-500 sm:text-sm text-xs hover:text-gray-700"
          >
            Privacy Policy
          </a>
        </div>
        <div className="items-center space-y-1 mb-7">
          <div className="flex">
            <LocationOnSharpIcon className="text-green-500" />
            <span className="text-gray-500 sm:text-base text-sm">
              Somewhere, The Milkyway
            </span>
          </div>
          <div>
            <CallSharpIcon className="text-green-500" />
            <span className="text-gray-500 sm:text-base text-sm">
              123 456 7890
            </span>
          </div>
          <div>
            <MailSharpIcon className="text-green-500" />
            <span className="text-gray-500 sm:text-base text-sm">
              contact@houseme.ng
            </span>
          </div>
        </div>
      </div>
      <div className="border-t-2 border-grey ml-11 mr-11"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <p className="text-gray-500 text-sm text-center">
          © 2024. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
