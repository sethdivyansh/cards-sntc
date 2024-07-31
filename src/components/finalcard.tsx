import sntcBanner from '../assets/sntc-banner.jpg';
import defaultUser from '../assets/userdefault.jpg';
import cops from '../assets/cops.svg';
import aero from '../assets/aero.svg';
import tqc from '../assets/tqc.svg';
import robotics from '../assets/robotics.svg';
import csi from '../assets/csi.svg';
import bizclub from '../assets/bizclub.svg';
import astro from '../assets/astro.svg';
import sae from '../assets/sae.svg';
import { useClerk } from '@clerk/clerk-react';
import { useEffect, useState } from 'react';

interface SNTCComponentProps {
  username?: string;
  sntcImage?: string;
  mainImage?: string;
  content?: string;
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
};

const Card: React.FC = () => {
  return (
    <div className='grid lg:grid-cols-4 m-10 grid-cols-1 md:grid-cols-2'>
      <SNTCComponent />
    </div>
  );
};

const SNTCComponent: React.FC<SNTCComponentProps> = ({
  sntcImage = sntcBanner,
  mainImage = defaultUser,
  content = 'The Science and Technology Council, IIT (BHU) is excited to have you join us. We look forward to supporting you as you start this incredible journey. Embrace every opportunity, and let’s make this a fantastic experience together!'
}) => {

  const clerk = useClerk();
  const {user} = clerk;
  const {fullName} = user;
  const {imageUrl} = user
  const imageSrc = imageUrl
  const [visitedClubs, setVisitedClubs] = useState<string[]>([]);

  function getCookie(name: string): string | null {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      return parts.pop()?.split(';').shift() || null;
    }
    return null;
  }

  function sendRequest() {
    const sessionCookie = getCookie('__session');
    if (!sessionCookie) {
      return;
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
        const clubs = data.user ? Object.keys(data.user).filter(club => data.user[club] === true) : [];
        setVisitedClubs(clubs);
      })
      .catch((error) => console.error('Error:', error));
  }

  useEffect(() => {
    sendRequest();
  }, []);

  return (
    <div className='bg-white rounded-3xl shadow-xl text-center flex flex-col justify-center items-center'>
      <div className='flex justify-center w-full'>
        <img src={sntcImage} alt='SNTC Logo' className='w-full rounded-t-3xl' />
      </div>
      <div className='flex justify-center mt-[-4rem]'>
        <div className='bg-gray-300 w-40 h-40 rounded-full flex justify-center items-center'>
          <img src={imageSrc} alt='User Avatar' className='w-full rounded-full' />
        </div>
      </div>
      <h1 className='text-xl font-bold mt-4 text-gray-800'>{fullName}</h1>
      <p className='text-gray-700 mt-2 mb-2 text-lg'>visited {visitedClubs.length} SNTC clubs</p>
      <div className='flex flex-wrap justify-center mb-4 gap-2'>
        {visitedClubs.map((club, index) => (
          <div key={index} className='w-8 h-8 rounded-full overflow-hidden'>
            <img src={clubImages[club]} alt={`Club Image ${index + 1}`} className='w-full h-full object-cover' />
          </div>
        ))}
      </div>
      <p className='text-gray-700 mb-2 text-sm px-4'>{content}</p>
    </div>
  );
};

export default Card;
