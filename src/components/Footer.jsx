import { Coffee } from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="sticky w-full  bg-amber-100 flex justify-between px-30 py-10">
      <div className=" ">
        <Coffee size={50} />
        <span className="text-amber-700 font-bold text-3xl">Raksha Cafe</span>
        <p>&copy; All rights reserved</p>
      </div>

      <div className="flex flex-col ">
        <span className="mb-4 text-amber-700 font-bold text-xl">Social</span>
        <div className="flex gap-5">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook
              size={40}
              className="hover:scale-110 ease-in-out duration-150"
            />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram
              size={40}
              className="hover:scale-110 ease-in-out duration-150"
            />
          </a>
          <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
            <FaXTwitter
              size={40}
              className="hover:scale-110 ease-in-out duration-150"
            />
          </a>
        </div>
      </div>

      <div className="">
        <h1 className="mb-4 text-amber-700 font-bold text-xl ">Contact Us</h1>
        <div className="flex gap-1">
          <div className="text-amber-600 font-bold w-max text-left">
            <p>Call Us</p>
            <p>Mail Us</p>
            <p>Address</p>
          </div>
          <div className="text-amber-600 font-bold">
            <p>:</p>
            <p>:</p>
            <p>:</p>
          </div>
          <div className="flex-1 text-left font-semibold">
            <a href="tel:9988654321" className="block">
              +919988654321
            </a>
            <a href="mailto:contact@rakshacafe.com" className="block">
              contact@rakshacafe.com
            </a>
            <p>1st Floor, Coffee Mall, Patna, Bihar.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
