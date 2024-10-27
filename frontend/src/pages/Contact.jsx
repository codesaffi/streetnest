import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'
import { NavLink } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>

      <div className=" my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img
          className=" w-full md:max-w-[480px]"
          src={assets.contact_img}
          alt=""
        />
        <div className=" flex flex-col justify-center items-start gap-6">
          <p className=" font-semibold text-xl text-gray-600">Our Store</p>
          <p className=" text-gray-500">
            Jehlum,Punjab,Pakistan
          </p>
          <p className=" to-gray-500">
            Tel: 0340-5658267
            <br /> Email: Thestreetnest@gmail.com
          </p>
          <p className=" font-semibold text-xl text-gray-600">
            Socials
          </p>
          <p className=" text-gray-500">
            <NavLink to='https://www.instagram.com/thestreetnest?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='>
            <FontAwesomeIcon className=" h-8 text-red-900" icon={faInstagram} />
            </NavLink>
          </p>
          <p className=" font-semibold text-xl text-gray-600">
            Careers at Forever
          </p>
          <p className=" text-gray-500">
            Learn more about our teams and job openings.
          </p>
          <button className=" border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
            Explore Jobs
          </button>
        </div>
      </div>
      {/* <NewsLetterBox /> */}
    </div>
  );
};

export default Contact;
