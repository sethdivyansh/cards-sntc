import sntcBanner from '../assets/sntc-banner.jpg'
import defaultUser from '../assets/userdefault.jpg'
import { useEffect, useState } from 'react'

const Card = () => {
  return (
    <div className='grid lg:grid-cols-4 m-10 grid-cols-1 md:grid-cols-2'>
      <SNTCComponent />
    </div>
  )
}

const SNTCComponent = ({
  username = 'Aayush Khanna',
  sntcImage = sntcBanner,
  mainImage = defaultUser,
  content = 'The Science and Technology Council, IIT (BHU) is excited to have you join us. We look forward to supporting you as you start this incredible journey. Embrace every opportunity, and let’s make this a fantastic experience together!'
}) => {
  const [visitedClubs, setVisitedClubs] = useState([])

  function getCookie(name: string): string | null {
    const value = `; ${document.cookie}`
    const parts = value.split(`; ${name}=`)
    if (parts.length === 2) {
      return parts.pop()?.split(';').shift() || null
    }
    return null
  }

  function sendRequest() {
    const sessionCookie = getCookie('__session') // Get session cookie
    if (!sessionCookie) {
      console.error('Session cookie is null')
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
        setVisitedClubs(data.user ? Object.keys(data.user).filter(club => data.user[club] === true) : [])
        console.log(visitedClubs,data)
      })
      .catch((error) => console.error('Error:', error))
  }

  useEffect(() => {
    sendRequest()
  }, [])

  return (
    <div className='bg-white rounded-3xl shadow-xl text-center flex flex-col justify-center items-center'>
      <div className='flex justify-center w-full'>
        <img src={sntcImage} alt='SNTC Logo' className='w-full rounded-t-3xl' />
      </div>
      <div className='flex justify-center mt-[-4rem]'>
        <div className='bg-gray-300 w-40 h-40 rounded-full flex justify-center items-center'>
          <img src={mainImage} alt='User Avatar' className='w-full rounded-full' />
        </div>
      </div>
      <h1 className={`text-xl font-bold mt-4 text-gray-800`}>{username}</h1>
      <p className='text-gray-700 mt-2 mb-4 text-lg'>visited {visitedClubs.length} SNTC clubs</p>
      <p className='text-gray-700 mb-2 text-sm px-4'>{content}</p>
    </div>
  )
}

export default Card
