import React, { useState, useRef, useMemo, RefObject } from 'react'
// import { Link } from 'react-router-dom'
import TinderCard from 'react-tinder-card'
import CopsCard from './components/cops'
import cops from './assets/cops.svg'
import aero from './assets/aero.svg'
import tqc from './assets/tqc.svg'
import robotics from './assets/robotics.svg'
import csi from './assets/csi.svg'
import bizclub from './assets/bizclub.svg'
import astro from './assets/astro.svg'
import sae from './assets/sae.svg'
import { FaUndo } from 'react-icons/fa'
import './index.css'
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'
import SignInPage from './components/signIn'

type Color =
  | 'black'
  | 'purple'
  | 'skyBlue'
  | 'red'
  | 'orange'
  | 'blue'
  | 'lightPurple'
  | 'lightRed'
  | 'darkPurple'
  | 'darkRed'

interface Club {
  mainImage: string
  clubName: string
  content: string
  color: Color
  whatsappLink: string
  linkedinLink: string
  instaLink: string
}

type Direction = 'left' | 'right' | 'up' | 'down'

interface TinderCardAPI {
  swipe: (dir: Direction) => Promise<void>
  restoreCard: () => Promise<void>
}

const db: Club[] = [
  {
    mainImage: cops,
    clubName: 'Club Of Programmers',
    content:
      'Fosters programming excellence through workshops, competitions, hackathons, and projects. Join us to grow, connect, and excel in technology.',
    color: 'black',
    whatsappLink: 'https://chat.whatsapp.com/CF854bvOCpAEp3elZi8sOV',
    linkedinLink: 'https://www.linkedin.com/company/cops-iitbhu/',
    instaLink:
      'https://www.instagram.com/cops.iitbhu?igsh=MXRvdjBpMWRkdmRkeA==',
  },
  {
    mainImage: tqc,
    clubName: 'The Quant Club',
    content:
      'Promotes quantitative finance and analytics through workshops, seminars, competitions, and projects. Join us to excel in algorithmic trading and data analytics.',
    color: 'purple',
    whatsappLink: 'https://chat.whatsapp.com/JwehHeWwlc80n8OVXZy4LL',
    linkedinLink:
      'https://www.linkedin.com/company/the-quant-club-iit-bhu-varanasi/',
    instaLink:
      'https://www.instagram.com/quantclub.iitbhu?igsh=eDIzaWd2YzM0dWpi',
  },
  {
    mainImage: robotics,
    clubName: 'Robotics Club',
    content:
      'Empowers students with essential robotics skills through projects, workshops, lectures, and competitions. Join us to learn and launch a successful robotics career.',
    color: 'skyBlue',
    whatsappLink: 'https://chat.whatsapp.com/CSGHZY6xmlCIQEro82i1tz',
    linkedinLink:
      'https://www.linkedin.com/company/robotics-club-iit-bhu-varanasi/',
    instaLink:
      'https://www.instagram.com/robotics_club.iitbhu?igsh=MXFhYTdtZms0MnZscQ==',
  },
  {
    mainImage: aero,
    clubName: 'Aero-Modelling Club',
    content:
      'Fosters creativity in aviation with hands-on experience in designing, building, and flying model aircraft. Join us to explore planes, drones, and rocketry.',
    color: 'red',
    whatsappLink: 'https://chat.whatsapp.com/GYcADtLYmqZHnuqDF34HCq',
    linkedinLink: 'https://www.linkedin.com/company/amc-rocks/',
    instaLink: 'https://www.instagram.com/amc.iitbhu?igsh=aTJsdDR2YzkxcXJt',
  },
  {
    mainImage: csi,
    clubName: 'Club of Sustainability and Innovation',
    content:
      'Drives change through sustainable practices and innovative solutions. Join us to turn ideas into action for a greener future.',
    color: 'orange',
    whatsappLink: 'https://chat.whatsapp.com/BPybNc2nPE6KS1AzdjMrWq',
    linkedinLink: 'https://www.linkedin.com/company/csi-iitbhu/',
    instaLink: 'https://www.instagram.com/csi_iitbhu?igsh=MXBnYWxmdnlzenZ2dQ==',
  },
  {
    mainImage: bizclub,
    clubName: 'The Business Club',
    content:
      'Gain essential business skills through guest lectures, projects, and workshops. Join us to prepare for a competitive global marketplace.',
    color: 'red',
    whatsappLink: 'https://chat.whatsapp.com/Iix3yxoYqUM0kMkQun9M4s',
    linkedinLink: 'https://www.linkedin.com/company/businessclubiitbhu/',
    instaLink:
      'https://www.instagram.com/businessclub_iitbhu?igsh=Mmg3eGZldW1ia2Rs',
  },
  {
    mainImage: astro,
    clubName: 'Astronomy Club',
    content:
      'Explores the cosmos through stargazing, workshops, and outreach. Join us to witness cosmic events and deepen your understanding of the universe.',
    color: 'blue',
    whatsappLink: 'https://chat.whatsapp.com/KLyly1vfE0f8JUpg7lgSZb',
    linkedinLink: 'https://www.linkedin.com/company/astroiitbhu/',
    instaLink: 'https://www.instagram.com/astro.iitbhu?igsh=a2s0dGc5aG9naTh2',
  },
  {
    mainImage: sae,
    clubName: 'Society of Automotive Engineers',
    content:
      'Explores automotive technologies with a focus on engineering and design. Join us for workshops and projects to innovate in automotive technology.',
    color: 'red',
    whatsappLink: 'https://chat.whatsapp.com/LKSYDe8W2jY3NFvChJq2ow',
    linkedinLink:
      'https://www.linkedin.com/company/sae-collegiate-club-iit-varanasi/',
    instaLink:
      'https://www.instagram.com/saecollegiateclubiitbhu?igsh=MXMzYjNzNWd0ZG5oZw==',
  },
]

function App() {
  const [currentIndex, setCurrentIndex] = useState<number>(db.length - 1)
  const currentIndexRef = useRef<number>(currentIndex)

  const childRefs: RefObject<TinderCardAPI>[] = useMemo(
    () =>
      Array(db.length)
        .fill(null)
        .map(() => React.createRef<TinderCardAPI>()),
    []
  )

  const updateCurrentIndex = (val: number) => {
    setCurrentIndex(val)
    currentIndexRef.current = val
  }

  const canGoBack = currentIndex < db.length - 1

  const swiped = (direction: Direction, index: number) => {
    updateCurrentIndex(index - 1)
    console.log('Swiped: ', direction, index)
  }

  const outOfFrame = (idx: number) => {
    if (currentIndexRef.current >= idx) {
      childRefs[idx].current?.restoreCard()
    }
  }

  const goBack = async () => {
    if (!canGoBack) return
    const newIndex = currentIndex + 1
    updateCurrentIndex(newIndex)
    await childRefs[newIndex].current?.restoreCard()
  }

  return (
    <>
      <SignedOut>
        <SignInPage />
      </SignedOut>
      <SignedIn>
        <div className='relative w-screen h-screen bg-black flex flex-col items-center'>
          <link
            href='https://fonts.googleapis.com/css?family=Damion&display=swap'
            rel='stylesheet'
          />

          <div className='flex flex-row justify-around absolute top-5 w-full'>
            <h1 className='text-3xl font-bold text-white bg-clip-text text-transparent p-2'>
              SNTC Induction 2024
            </h1>
            <UserButton />
          </div>
          <div className='flex flex-col items-center mt-16 w-[90vw] max-w-[600px] h-[80vh]'>
            {/* <h1 className='text-3xl font-bold text-white bg-clip-text text-transparent p-2'>
              SNTC Induction 2024
            </h1> */}
            <div className='relative w-full h-full flex items-center justify-center'>
              {db.map((club, index) => (
                <TinderCard
                  ref={childRefs[index]}
                  className={`absolute w-full h-full flex items-center justify-center transition-transform duration-100 ${
                    index === currentIndex ? 'z-10' : ''
                  }`}
                  key={club.clubName}
                  onSwipe={(dir) => swiped(dir as Direction, index)}
                  onCardLeftScreen={() => outOfFrame(index)}
                  swipeThreshold={1}
                >
                  <CopsCard
                    mainImage={club.mainImage}
                    clubName={club.clubName}
                    content={club.content}
                    color={club.color}
                    whatsappLink={club.whatsappLink}
                    linkedinLink={club.linkedinLink}
                    instaLink={club.instaLink}
                  />
                </TinderCard>
              ))}
            </div>
            <div className='fixed bottom-5 w-full flex justify-center'>
              <button
                onClick={() => goBack()}
                className='bg-gradient-to-r from-pink-300 via-pink-200 to-orange-300 rounded-full p-3 shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out hover:shadow-xl active:bg-white flex items-center justify-center w-15 h-15'
              >
                <FaUndo size={20} />
              </button>
            </div>
          </div>
        </div>
      </SignedIn>
    </>
  )
}

export default App
