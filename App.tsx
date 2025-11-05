import React from 'react';
import { LinkButton } from './components/LinkButton';
import { 
  InstagramIcon, 
  FacebookIcon, 
  LinkedInIcon, 
  InstagramIconSmall, 
  FacebookIconSmall, 
  ShareIcon, 
  SparkleIcon,
  WhitmanLogo
} from './components/icons';

const links = [
  {
    icon: <InstagramIcon />,
    text: 'Whitman Controls | Instagram',
    href: '#',
  },
  {
    icon: <FacebookIcon />,
    text: 'Whitman Controls | Facebook',
    href: '#',
  },
  {
    icon: <LinkedInIcon />,
    text: 'Whitman Controls | LinkedIn',
    href: '#',
  },
];

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center p-4">
      <div className="relative w-full max-w-sm mx-auto bg-gray-100 rounded-[40px] shadow-2xl p-6 space-y-5">
        
        {/* Header Icons */}
        <header className="absolute top-4 left-4 right-4 flex justify-between items-center px-2">
          <button className="bg-white/80 backdrop-blur-sm rounded-full p-2.5 shadow-md hover:bg-white transition">
            <SparkleIcon />
          </button>
          <button className="bg-white/80 backdrop-blur-sm rounded-full p-2.5 shadow-md hover:bg-white transition">
            <ShareIcon />
          </button>
        </header>

        {/* Profile Section */}
        <div className="flex flex-col items-center pt-12">
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg mb-4">
            <WhitmanLogo />
          </div>
          <h1 className="text-xl font-bold text-gray-800">Whitman Controls</h1>
          <p className="text-sm text-gray-600 text-center mt-2 max-w-xs">
            Veteran-owned and trusted for 40+ years, Whitman Controls delivers custom-built, high-quality switches and sensors—engineered fast, precise, and built to last.
          </p>
          <div className="flex space-x-6 mt-4 text-gray-700">
            <a href="#" className="hover:text-black transition">
              <InstagramIconSmall />
            </a>
            <a href="#" className="hover:text-black transition">
              <FacebookIconSmall />
            </a>
          </div>
        </div>

        {/* Links Section */}
        <div className="space-y-3">
          {links.map((link, index) => (
            <LinkButton key={index} icon={link.icon} text={link.text} href={link.href} />
          ))}

          {/* Image Banner */}
          <div className="rounded-lg overflow-hidden shadow-md">
            <img src="https://picsum.photos/seed/whitman-controls/400/225" alt="Whitman Controls Products" className="w-full h-auto object-cover" />
          </div>

          <LinkButton icon={<div className="w-12 h-12 flex items-center justify-center text-gray-700"><WhitmanLogo/></div>} text="Whitman Controls | Website" href="#" />
        </div>

        {/* CTA Button */}
        <a href="#" className="block w-full text-center py-3 px-4 bg-white text-black font-semibold rounded-full border border-gray-300 hover:bg-gray-50 transition-colors shadow-sm">
          Join whitmancontrols on Linktree
        </a>

        {/* Footer */}
        <footer className="text-center text-xs text-gray-500 flex justify-center space-x-4">
          <a href="#" className="hover:underline">Cookie Preferences</a>
          <a href="#" className="hover:underline">Report</a>
          <a href="#" className="hover:underline">Privacy</a>
        </footer>
      </div>
    </div>
  );
};

export default App;
