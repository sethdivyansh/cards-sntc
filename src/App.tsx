import { useState } from 'react';
import './App.css';
import CopsCard from './components/cops';
import cops from './assets/cops.png';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='grid grid-cols-1 gap-5 bg-slate-700 p-5'>
      <CopsCard
        mainImage={cops}
        clubName='Club Of Programmers'
        content="COPS at IIT (BHU), Varanasi, fosters programming excellence through workshops, competitions, hackathons, and projects. We empower members with skills and knowledge, nurturing creativity and problem-solving. Join us to grow, connect, and excel in technology."
        color='black'
      />
      <CopsCard
        mainImage={cops}
        clubName='The Quant Club'
        content="The Quant Club at IIT (BHU), Varanasi, promotes quantitative finance and analytics through workshops, seminars, competitions, and projects. We offer learning, networking, and hands-on experience in algorithmic trading, risk management, and data analytics. Join us to excel in this field."
        color='purple'
      />
      <CopsCard
        mainImage={cops}
        clubName='Robotics Club'
        content="Our Robotics Club at IIT BHU empowers students with essential skills in robotics through hands-on projects, workshops, guest lectures, and competitions. Whether you're a beginner or expert, join us to learn, grow, and launch a successful robotics career."
        color='skyBlue'
      />
      <CopsCard
        mainImage={cops}
        clubName='Society of Automotive Engineers'
        content="The Society of Automotive Engineering at IIT (BHU) explores cutting-edge automotive technologies. We focus on science, engineering, and design, from conventional to electric and autonomous systems. Join us for workshops, seminars, and projects to innovate in automotive technology and drive mobility's future."
        color='red'
      />
      <CopsCard
        mainImage={cops}
        clubName='Aero-Modelling Club'
        content="The Aeromodelling Club at IIT (BHU) fosters creativity and innovation in aviation. We provide hands-on experience in designing, building, and flying model aircraft through workshops, competitions, and demonstrations. Join us to explore remote-controlled planes, drones, and rocketry, and soar to new heights."
        color='red'
      />
      <CopsCard
        mainImage={cops}
        clubName='Club of Sustainability and Innovation'
        content="The Club Of Sustainability and Innovation at IIT (BHU) drives positive change through sustainable practices and innovative solutions. We raise awareness and implement projects in environmental conservation, social responsibility, and technology. Join us to turn ideas into action and create a greener future."
        color='orange'
      />
      <CopsCard
        mainImage={cops}
        clubName='The Business Club'
        content="Join the Business Club at IIT BHU to gain essential skills for success in the business world. We offer guest lectures, hands-on projects, and workshops to enhance your understanding of business and prepare you for a competitive global marketplace."
        color='blue'
      />
      <CopsCard
        mainImage={cops}
        clubName='Astronomy Club'
        content="The Astronomy Club at IIT (BHU) explores the cosmos through stargazing, workshops, and outreach. We ignite curiosity and inspire awe about celestial phenomena, astrophotography, and space exploration. Join us to witness cosmic events and deepen your understanding of the universe."
        color='red'
      />
    </div>
  );
}

export default App;
