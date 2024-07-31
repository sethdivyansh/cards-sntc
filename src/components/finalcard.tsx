import sntcBanner from '../assets/sntc-banner.jpg'
import defaultUser from '../assets/userdefault.jpg'

const Card=()=>{
    return <div className='grid lg:grid-cols-4 m-10 grid-cols-1 md:grid-cols-2'>
        <SNTCComponent/>
    </div>
}

const SNTCComponent = ({
  username='Aayush Khanna',
  clubCount='8',
  sntcImage=sntcBanner,
  mainImage=defaultUser,
  content = 'The Science and Technology Council, IIT (BHU) is excited to have you join us. We look forward to supporting you as you start this incredible journey. Embrace every opportunity, and let’s make this a fantastic experience together!'
}) => {
  return (
    <div className='bg-white rounded-3xl shadow-xl text-center flex flex-col justify-center items-center'>
      <div className='flex justify-center w-full'>
        <img src={sntcImage} alt='SNTC Logo' className='w-full rounded-t-3xl'/>
      </div>
      <div className='flex justify-center mt-[-4rem]'>
        <div className='bg-gray-300 w-40 h-40 rounded-full flex justify-center items-center'>
          <img src={mainImage} alt='User Avatar' className='w-full rounded-full' />
        </div>
      </div>
      <h1 className={`text-xl font-bold mt-4 text-gray-800`}>{username}</h1>
      <p className='text-gray-700 mt-2 mb-4 text-lg'>visited {clubCount} SNTC clubs</p>
      <p className='text-gray-700 mb-2 text-sm px-4'>{content}</p>
    </div>
  );
};

export default Card;
