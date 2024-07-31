import sntcBanner from '../assets/sntc-banner.jpg'
import defaultUser from '../assets/userdefault.jpg'
import cops from '../assets/cops.svg'
import aero from '../assets/aero.svg'
import tqc from '../assets/tqc.svg'
import robotics from '../assets/robotics.svg'
import csi from '../assets/csi.svg'
import bizclub from '../assets/bizclub.svg'
import astro from '../assets/astro.svg'
import sae from '../assets/sae.svg'
import { useEffect, useRef, useState } from 'react'
import { useClerk } from '@clerk/clerk-react'
import { toPng } from 'html-to-image'
import { saveAs } from 'file-saver'
import { useNavigate } from 'react-router-dom'

interface SNTCComponentProps {
  username?: string
  sntcImage?: string
  mainImage?: string
  content?: string
}

const clubImages: Record<string, string> = {
  COPS: cops,
  SAE: sae,
  astroClub: astro,
  bizClub: bizclub,
  csi: csi,
  robotics: robotics,
  theQuantClub: tqc,
  AMC: aero,
}

const Card: React.FC = () => {
  return (
    <div className='flex items-center justify-center min-h-screen bg-black'>
      <SNTCComponent />
    </div>
  )
}

const SNTCComponent: React.FC<SNTCComponentProps> = ({
  username = 'username',
  sntcImage = sntcBanner,
  mainImage = defaultUser,
  content = 'The Science and Technology Council, IIT (BHU) is excited to have you join us. We look forward to supporting you as you start this incredible journey. Embrace every opportunity, and let’s make this a fantastic experience together!',
}) => {
  const navigate = useNavigate()
  const [visitedClubs, setVisitedClubs] = useState<string[]>([])
  const cardRef = useRef<HTMLDivElement>(null)
  const downloadButtonRef = useRef<HTMLButtonElement>(null)
  const shadowRef = useRef<HTMLDivElement>(null)

  const clerk = useClerk()
  const { user } = clerk
  const { fullName } = user
  const { imageUrl } = user

  function getCookie(name: string): string | null {
    const value = `; ${document.cookie}`
    const parts = value.split(`; ${name}=`)
    if (parts.length === 2) {
      return parts.pop()?.split(';').shift() || null
    }
    return null
  }

  function sendRequest() {
    const sessionCookie = getCookie('__session')
    if (!sessionCookie) {
      return
    }
    fetch(
      `https://sntc-induction-server.cynikal.workers.dev/api/v1/clubs/final`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${sessionCookie}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        const clubs = data.user
          ? Object.keys(data.user).filter((club) => data.user[club] === true)
          : []
        setVisitedClubs(clubs)
      })
      .catch((error) => console.error('Error:', error))
  }

  useEffect(() => {
    sendRequest()
  }, [])

  const handleDownload = () => {
    if (
      cardRef.current === null ||
      downloadButtonRef.current === null ||
      shadowRef.current === null
    ) {
      return
    }

    // Remove shadow and hide download button
    const originalBoxShadow = shadowRef.current.style.boxShadow
    shadowRef.current.style.boxShadow = 'none'
    downloadButtonRef.current.style.display = 'none'

    toPng(cardRef.current)
      .then((dataUrl) => {
        saveAs(dataUrl, 'card.png')

        // Restore original shadow and show download button
        shadowRef.current.style.boxShadow = originalBoxShadow
        downloadButtonRef.current.style.display = 'block'
      })
      .catch((err) => {
        console.error('Oops, something went wrong!', err)

        // Restore original shadow and show download button in case of error
        cardRef.current.style.boxShadow = originalBoxShadow
        downloadButtonRef.current.style.display = 'block'
      })
  }

  return (
    <div className='overflow-auto flex flex-col items-center p-5' ref={cardRef}>
      <div
        ref={shadowRef}
        className='bg-white rounded-3xl text-center flex flex-col justify-center items-center w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto'
        style={{ boxShadow: '0 10px 20px rgba(128, 0, 128, 0.5)' }} // Uniform shadow all around
      >
        <div className='flex justify-center w-full'>
          <img
            src={sntcImage}
            alt='SNTC Logo'
            className='w-full rounded-t-3xl'
          />
        </div>
        <div className='flex justify-center mt-[-4rem]'>
          <div className='bg-gray-300 w-32 h-32 sm:w-40 sm:h-40 rounded-full flex justify-center items-center'>
            <img
              src={imageUrl || mainImage}
              alt='User Avatar'
              className='w-full h-full rounded-full'
            />
          </div>
        </div>
        <h1 className='text-xl font-bold mt-4 text-gray-800'>
          {fullName || username}
        </h1>
        <p className='text-gray-700 mt-2 mb-2 text-lg font-medium'>
          Visited {visitedClubs.length} SNTC Clubs
        </p>
        <div className='flex flex-wrap justify-center mb-4 gap-2'>
          {visitedClubs.map((club, index) => (
            <div
              key={index}
              className='w-8 h-10 sm:w-8 sm:h-10 rounded-full overflow-hidden'
            >
              <img
                src={clubImages[club]}
                alt={`Club Image ${index + 1}`}
                className='w-full h-full object-cover'
              />
            </div>
          ))}
        </div>
        <p className='text-gray-700 mt-[-0.5rem] mb-4 text-sm px-4 sm:px-4'>
          {content}
        </p>
      </div>
      <button
        ref={downloadButtonRef}
        onClick={handleDownload}
        className='mt-4 bg-purple-500 text-white px-4 py-2 rounded'
      >
        Download Card
      </button>
      <p className='bg-purple-500 text-white rounded'>
        Download and share it on you story!!!!
      </p>
    </div>
  )
}

export default Card
