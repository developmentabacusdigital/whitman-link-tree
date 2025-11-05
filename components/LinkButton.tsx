import React from 'react';

interface LinkButtonProps {
  icon: React.ReactNode;
  text: string;
  href: string;
}

const MoreIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="text-gray-400">
    <path d="M12 14a2 2 0 100-4 2 2 0 000 4zm-6 0a2 2 0 100-4 2 2 0 000 4zm12 0a2 2 0 100-4 2 2 0 000 4z"></path>
  </svg>
);

export const LinkButton: React.FC<LinkButtonProps> = ({ icon, text, href }) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="group bg-white rounded-xl shadow-sm flex items-center p-2 w-full hover:scale-[1.03] active:scale-[1.01] transition-transform duration-200 ease-in-out"
    >
      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
        {icon}
      </div>
      <span className="flex-grow font-semibold text-gray-800 text-center text-sm mr-4">
        {text}
      </span>
      <div className="pr-2 opacity-50 group-hover:opacity-100 transition-opacity">
        <MoreIcon />
      </div>
    </a>
  );
};
