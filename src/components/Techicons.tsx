// components/TechIcons.tsx
import React from 'react';

interface TechIcon {
  src: string;
  alt: string;
  href?: string;
}

interface TechIconsProps {
  icons: TechIcon[];
  className?: string;
}



const TechIcons: React.FC<TechIconsProps> = ({ icons, className }) => {
  return (
    <div className={`flex flex-wrap gap-4 justify-center ${className}`}>
      {icons.map((icon, index) => (
        <div key={index} className="flex items-center justify-center">
          {icon.href ? (
            <a href={icon.href} target="_blank" rel="noopener noreferrer">
              <img src={icon.src} alt={icon.alt} className="w-12 h-12" />
            </a>
          ) : (
            <img src={icon.src} alt={icon.alt} className="w-12 h-12" />
          )}
        </div>
      ))}
    </div>
  );
};

export default TechIcons;