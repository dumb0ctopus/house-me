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
        <div className="mb-7">
          <a href="##">
            <img src={logo} alt="house me logo" className="h-8" />
          </a>
          <div className="flex space-x-4 mt-3">
            <a href="##" className="w-6">
              <img src={x} alt="X(FKA Twitter)" />
            </a>
            <a href="##" className="w-6">
              <img src={whatsapp} alt="whatsapp" />
            </a>
            <a href="##" className="w-6">
              <img src={facebook} alt="facebook" />
            </a>
            <a href="##" className="w-6">
              <img src={linkedin} alt="linkedin" />
            </a>
            <a href="##" className="w-6">
              <img src={instagram} alt="instagram" />
            </a>
          </div>
        </div>
        <div className="flex md:flex-row sm:flex-col sms:flex-row flex-col sm:items-start items-center justify-center md:space-x-4 sm:space-x-0 sms:space-x-4  space-x-0 mb-7">
          <a
            href="##"
            className="text-gray-500 sm:text-sm text-sm font-halant-light hover:text-gray-700"
          >
            FAQs
          </a>
          <a
            href="##"
            className="text-gray-500 sm:text-sm text-sm font-halant-light hover:text-gray-700"
          >
            Contact Us
          </a>
          <a
            href="##"
            className="text-gray-500 sm:text-sm text-sm font-halant-light hover:text-gray-700"
          >
            EULA
          </a>
          <a
            href="##"
            className="text-gray-500 sm:text-sm text-sm font-halant-light hover:text-gray-700"
          >
            Privacy Policy
          </a>
        </div>

        <div className="space-y-1 mb-7">
          <div className="md:text-start text-center space-x-1">
            <LocationOnSharpIcon className="text-green-500" />
            <span className="text-gray-500 sm:text-base text-sm font-halant-light">
              Somewhere, The Milkyway
            </span>
          </div>
          <div className="md:text-start text-center space-x-1">
            <CallSharpIcon className="text-green-500" />
            <span className="text-gray-500 sm:text-base text-sm font-halant-light">
              123 456 7890
            </span>
          </div>
          <div className="md:text-start text-center space-x-1">
            <MailSharpIcon className="text-green-500" />
            <span className="text-gray-500 sm:text-base text-sm font-halant-light">
              contact@houseme.ng
            </span>
          </div>
        </div>
      </div>
      <div className="border-t-2 border-grey ml-11 mr-11"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <p className="text-gray-500 text-sm font-halant-light text-center">
          © 2024. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
