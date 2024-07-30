import React from 'react'
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaWhatsapp,
} from 'react-icons/fa'

const colorVariants = {
  black: 'text-[#1F2C33] hover:text-gray-900',
  blue: 'text-blue-800 hover:text-blue-900',
  orange: 'text-[#FF5A1F] hover:text-orange-700',
  purple: 'text-[#5A0096] hover:text-purple-700',
  red: 'text-[#D23337] hover:text-red-800',
  skyBlue: 'text-[#0C76BE] hover:text-sky-700',
  lightPurple: 'text-purple-500 hover:text-purple-700',
  lightRed: 'text-red-500 hover:text-red-700',
  darkPurple: 'text-purple-900 hover:text-purple-800',
  darkRed: 'text-red-900 hover:text-red-800',
}

const colorVariantsWhatsapp = {
  black: 'bg-[#1F2C33] active:bg-gray-900',
  blue: 'bg-blue-800 active:bg-blue-900',
  orange: 'bg-[#FF5A1F] active:bg-orange-700',
  purple: 'bg-[#5A0096] active:bg-purple-700',
  red: 'bg-[#D23337] active:bg-red-800',
  skyBlue: 'bg-[#0B8DC3] active:bg-[#0C76BE]',
  lightPurple: 'bg-purple-500 active:bg-purple-700',
  lightRed: 'bg-red-500 active:bg-red-700',
  darkPurple: 'bg-purple-900 active:bg-purple-800',
  darkRed: 'bg-red-900 active:bg-red-800',
}

interface CopsCardProps {
  mainImage: string
  clubName: string
  content: string
  color: keyof typeof colorVariants
  whatsappLink: string
  instaLink: string
  linkedinLink: string
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
    <div
      className={`bg-white p-8 rounded-3xl shadow-lg text-center flex flex-col justify-center align-middle border border-gray-300`}
    >
      <div className='flex justify-start mb-4'>
        <img
          src={mainImage}
          alt='Club Image'
          className='rounded-full w-10 h-10 object-cover border border-gray-300'
        />
      </div>
      <div className='flex justify-center mb-4'>
        <img
          src={mainImage}
          alt='Club'
          className='w-3/4 rounded-2xl border border-gray-300 shadow-lg'
        />
      </div>
      <h1 className={`text-2xl font-bold mb-4 text-${color} shadow-sm`}>
        {clubName}
      </h1>
      <p className='text-gray-700 mb-4 text-sm'>{content}</p>
      <div className='flex justify-center align-middle'>
        <button
          className={`${colorVariantsWhatsapp[color]} rounded-3xl text-white flex justify-center align-middle p-2 my-3 w-1/2 font-semibold shadow-md transition-transform transform hover:scale-105`}
          onClick={() => window.open(whatsappLink, '_blank')}
        >
          <FaWhatsapp size={24} className='mr-2' />
          WhatsApp
        </button>
      </div>
      <div className='flex justify-center space-x-4 mt-1'>
        <a
          href={instaLink}
          className={`${colorVariants[color]} hover:text-${color}-600 transition-all`}
        >
          <FaInstagram size={24} />
        </a>
        <a
          href={linkedinLink}
          className={`${colorVariants[color]} hover:text-${color}-600 transition-all`}
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href='https://github.com'
          className={`${colorVariants[color]} hover:text-${color}-600 transition-all`}
        >
          <FaGithub size={24} />
        </a>
        <a
          href='mailto:example@example.com'
          className={`${colorVariants[color]} hover:text-${color}-600 transition-all`}
        >
          <FaEnvelope size={24} />
        </a>
      </div>
    </div>
  )
}

export default CopsCard
