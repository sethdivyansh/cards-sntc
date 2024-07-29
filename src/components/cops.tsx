import React from 'react';
import { FaTwitter, FaInstagram, FaFacebook, FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import cops from '../assets/cops.png'
import sntc from '../assets/sntc.png'

const CopsCard = ({mainImage,clubName,content,color}:{mainImage:string,clubName:string,content:string,color:string}) => {
  return (
      <div className="bg-white p-8 rounded-3xl shadow-lg w-96 text-center flex flex-col justify-center align-middle">
        <div className="flex justify-start mb-4">
            <img src={sntc} alt="SNTC" className="rounded-full w-10" />
        </div>
        <div className="flex justify-center mb-4">
            <img src={mainImage} alt="COPS" className='w-1/2 rounded-full border'/>
        </div>
        <h1 className="text-xl font-bold mb-4">{clubName}</h1>
        <p className="text-gray-700 mb-4">
          {content}
        </p>
        <div className='flex justify-center align-middle'>
          <button className="bg-gray-800 rounded-3xl text-white flex justify-center align-middle p-2 my-3 w-1/2 font-semibold"><FaWhatsapp size={24} className='mr-2'/>WhatsApp</button>
        </div>
        <div className="flex justify-center space-x-4 mt-1 text-gray-600 hover:text-gray-900">
          <a href="https://twitter.com"><FaTwitter size={24} /></a>
          <a href="https://instagram.com"><FaInstagram size={24} /></a>
          <a href="https://facebook.com"><FaFacebook size={24} /></a>
          <a href="https://linkedin.com"><FaLinkedin size={24} /></a>
          <a href="https://github.com"><FaGithub size={24} /></a>          <a href="mailto:example@example.com" ><FaEnvelope size={24} /></a>
        </div>
      </div>
  );
};

export default CopsCard;
