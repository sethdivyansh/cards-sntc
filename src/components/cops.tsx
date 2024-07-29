import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import sntc from '../assets/sntc.png';

const colorVariants = {
  black: 'text-gray-800 hover:text-gray-900',
  blue: 'text-blue-800 hover:text-blue-900',
  orange: 'text-orange-500 hover:text-orange-700',
  purple: 'text-purple-800 hover:text-purple-900',
  red: 'text-red-800 hover:text-red-900',
  skyBlue: 'text-sky-500 hover:text-sky-700',
  lightPurple: 'text-purple-500 hover:text-purple-700',
  lightRed: 'text-red-500 hover:text-red-700',
  darkPurple: 'text-purple-900 hover:text-purple-800',
  darkRed: 'text-red-900 hover:text-red-800',
};

const colorVariantsWhatsapp = {
  black: 'bg-gray-800 active:bg-gray-900',
  blue: 'bg-blue-800 active:bg-blue-900',
  orange: 'bg-orange-500 active:bg-orange-700',
  purple: 'bg-purple-800 active:bg-purple-900',
  red: 'bg-red-800 active:bg-red-900',
  skyBlue: 'bg-sky-500 active:bg-sky-700',
  lightPurple: 'bg-purple-500 active:bg-purple-700',
  lightRed: 'bg-red-500 active:bg-red-700',
  darkPurple: 'bg-purple-900 active:bg-purple-800',
  darkRed: 'bg-red-900 active:bg-red-800',
};

interface CopsCardProps {
  mainImage: string;
  clubName: string;
  content: string;
  color: keyof typeof colorVariants;
  whatsappLink: string;
  instaLink: string;
  linkedinLink: string;
}

const CopsCard: React.FC<CopsCardProps> = ({
  mainImage,
  clubName,
  content,
  color,
  whatsappLink,
  instaLink,
  linkedinLink,
}) => {
  return (
    <div className="bg-white p-8 rounded-3xl shadow-lg text-center flex flex-col justify-center align-middle">
      <div className="flex justify-start mb-4">
        <img src={sntc} alt="SNTC" className="rounded-full w-10" />
      </div>
      <div className="flex justify-center mb-4">
        <img src={mainImage} alt="COPS" className="w-1/2 rounded-full border" />
      </div>
      <h1 className="text-xl font-bold mb-4">{clubName}</h1>
      <p className="text-gray-700 mb-4">{content}</p>
      <div className="flex justify-center align-middle">
        <button
          className={`${colorVariantsWhatsapp[color]} rounded-3xl text-white flex justify-center align-middle p-2 my-3 w-1/2 font-semibold`}
          onClick={() => window.open(whatsappLink, '_blank')}
        >
          <FaWhatsapp size={24} className="mr-2" />
          WhatsApp
        </button>
      </div>
      <div className="flex justify-center space-x-4 mt-1">
        <a href={instaLink} className={`${colorVariants[color]}`}>
          <FaInstagram size={24} />
        </a>
        <a href={linkedinLink} className={`${colorVariants[color]}`}>
          <FaLinkedin size={24} />
        </a>
        <a href="https://github.com" className={`${colorVariants[color]}`}>
          <FaGithub size={24} />
        </a>
        <a href="mailto:example@example.com" className={`${colorVariants[color]}`}>
          <FaEnvelope size={24} />
        </a>
      </div>
    </div>
  );
};

export default CopsCard;
