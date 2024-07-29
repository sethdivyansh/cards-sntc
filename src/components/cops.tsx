import React from 'react';
import { FaTwitter, FaInstagram, FaFacebook, FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import cops from '../assets/cops.png'
import sntc from '../assets/sntc.png'
import { FaSquareWhatsapp } from 'react-icons/fa6';

const CopsCard = () => {
  return (
      <div className="bg-white p-8 rounded-3xl shadow-lg w-96 text-center flex flex-col justify-center align-middle">
        <div className="flex justify-start mb-4">
            <img src={sntc} alt="SNTC" className="rounded-full w-10" />
        </div>
        <div className="flex justify-center mb-4">
            <img src={cops} alt="COPS" className='w-1/2 rounded-full border'/>
        </div>
        <h1 className="text-xl font-bold mb-4">Clubs of Programmers</h1>
        <p className="text-gray-700 mb-4">
          Club of Programmers (COPS) promotes coding through workshops, competitions, and events like Technex, with specialized groups and mentorship for all programmers.
        </p>
        <div className='flex justify-center align-middle'>
          <button className="bg-gray-800 rounded-3xl text-white flex justify-center align-middle p-2 my-3 w-1/2"><FaWhatsapp size={24}/>WhatsApp</button>
        </div>
        <div className="flex justify-center space-x-4 mt-1">
          <a href="https://twitter.com" className="text-gray-600 hover:text-gray-900"><FaTwitter size={24} /></a>
          <a href="https://instagram.com" className="text-gray-600 hover:text-gray-900"><FaInstagram size={24} /></a>
          <a href="https://facebook.com" className="text-gray-600 hover:text-gray-900"><FaFacebook size={24} /></a>
          <a href="https://linkedin.com" className="text-gray-600 hover:text-gray-900"><FaLinkedin size={24} /></a>
          <a href="https://github.com" className="text-gray-600 hover:text-gray-900"><FaGithub size={24} /></a>          <a href="mailto:example@example.com" className="text-gray-600 hover:text-gray-900"><FaEnvelope size={24} /></a>
        </div>
      </div>
  );
};

export default CopsCard;
