import './App.css';
import CopsCard from './components/cops';
import cops from './assets/cops.png';

function App() {
  return (
    <div className='grid grid-cols-1 gap-5 bg-slate-700 p-5 md:grid-cols-2 lg:grid-cols-4'>
      <CopsCard
        mainImage={cops}
        clubName='Club Of Programmers'
        content="COPS at IIT (BHU), Varanasi, fosters programming excellence through workshops, competitions, hackathons, and projects. We empower members with skills and knowledge, nurturing creativity and problem-solving. Join us to grow, connect, and excel in technology."
        color='black'
        whatsappLink=''
        linkedinLink='https://www.linkedin.com/company/cops-iitbhu/'
        instaLink='https://www.instagram.com/cops.iitbhu?igsh=MXRvdjBpMWRkdmRkeA=='
      />
      <CopsCard
        mainImage={cops}
        clubName='The Quant Club'
        content="The Quant Club at IIT (BHU), Varanasi, promotes quantitative finance and analytics through workshops, seminars, competitions, and projects. We offer learning, networking, and hands-on experience in algorithmic trading, risk management, and data analytics. Join us to excel in this field."
        color='purple'
        whatsappLink='https://chat.whatsapp.com/JwehHeWwlc80n8OVXZy4LL'
        linkedinLink='https://www.linkedin.com/company/the-quant-club-iit-bhu-varanasi/'
        instaLink='https://www.instagram.com/quantclub.iitbhu?igsh=eDIzaWd2YzM0dWpi'
      />
      <CopsCard
        mainImage={cops}
        clubName='Robotics Club'
        content="Our Robotics Club at IIT BHU empowers students with essential skills in robotics through hands-on projects, workshops, guest lectures, and competitions. Whether you're a beginner or expert, join us to learn, grow, and launch a successful robotics career."
        color='skyBlue'
        whatsappLink='https://chat.whatsapp.com/CSGHZY6xmlCIQEro82i1tz'
        linkedinLink='https://www.linkedin.com/company/robotics-club-iit-bhu-varanasi/'
        instaLink='https://www.instagram.com/robotics_club.iitbhu?igsh=MXFhYTdtZms0MnZscQ=='
      />
      <CopsCard
        mainImage={cops}
        clubName='Society of Automotive Engineers'
        content="The Society of Automotive Engineering at IIT (BHU) explores cutting-edge automotive technologies. We focus on science, engineering, and design, from conventional to electric and autonomous systems. Join us for workshops, seminars, and projects to innovate in automotive technology and drive mobility's future."
        color='red'
        whatsappLink='https://chat.whatsapp.com/LKSYDe8W2jY3NFvChJq2ow'
        linkedinLink='https://www.linkedin.com/company/sae-collegiate-club-iit-varanasi/'
        instaLink='https://www.instagram.com/saecollegiateclubiitbhu?igsh=MXMzYjNzNWd0ZG5oZw=='
      />
      <CopsCard
        mainImage={cops}
        clubName='Aero-Modelling Club'
        content="The Aeromodelling Club at IIT (BHU) fosters creativity and innovation in aviation. We provide hands-on experience in designing, building, and flying model aircraft through workshops, competitions, and demonstrations. Join us to explore remote-controlled planes, drones, and rocketry, and soar to new heights."
        color='red'
        whatsappLink='https://chat.whatsapp.com/GYcADtLYmqZHnuqDF34HCq'
        linkedinLink='https://www.linkedin.com/company/amc-rocks/'
        instaLink='https://www.instagram.com/amc.iitbhu?igsh=aTJsdDR2YzkxcXJt'
      />
      <CopsCard
        mainImage={cops}
        clubName='Club of Sustainability and Innovation'
        content="The Club Of Sustainability and Innovation at IIT (BHU) drives positive change through sustainable practices and innovative solutions. We raise awareness and implement projects in environmental conservation, social responsibility, and technology. Join us to turn ideas into action and create a greener future."
        color='orange'
        whatsappLink='https://chat.whatsapp.com/BPybNc2nPE6KS1AzdjMrWq'
        linkedinLink='https://www.linkedin.com/company/csi-iitbhu/'
        instaLink='https://www.instagram.com/csi_iitbhu?igsh=MXBnYWxmdnlzenZ2dQ=='
      />
      <CopsCard
        mainImage={cops}
        clubName='The Business Club'
        content="Join the Business Club at IIT BHU to gain essential skills for success in the business world. We offer guest lectures, hands-on projects, and workshops to enhance your understanding of business and prepare you for a competitive global marketplace."
        color='blue'
        whatsappLink='https://chat.whatsapp.com/Iix3yxoYqUM0kMkQun9M4s'
        linkedinLink='https://www.linkedin.com/company/businessclubiitbhu/'
        instaLink='https://www.instagram.com/businessclub_iitbhu?igsh=Mmg3eGZldW1ia2Rs'
      />
      <CopsCard
        mainImage={cops}
        clubName='Astronomy Club'
        content="The Astronomy Club at IIT (BHU) explores the cosmos through stargazing, workshops, and outreach. We ignite curiosity and inspire awe about celestial phenomena, astrophotography, and space exploration. Join us to witness cosmic events and deepen your understanding of the universe."
        color='red'
        whatsappLink='https://chat.whatsapp.com/KLyly1vfE0f8JUpg7lgSZb'
        linkedinLink='https://www.linkedin.com/company/astroiitbhu/'
        instaLink='https://www.instagram.com/astro.iitbhu?igsh=a2s0dGc5aG9naTh2'
      />
    </div>
  );
}

export default App;
