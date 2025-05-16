#!/bin/bash

# Script to add hexagonal grid component to himaTech project
# Created: May 10, 2025

echo "Starting hexagonal grid component setup..."

# Create component file
mkdir -p ./src/components
cat > ./src/components/hexagonal-tile.tsx << 'EOL'
"use client";

import { useState } from "react";
import Image from "next/image";
import { Typography } from "@material-tailwind/react";

interface HexagonalTileProps {
  image?: string;
  color?: string;
  alt?: string;
  title?: string;
  description?: string;
  number?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

export function HexagonalTile({
  image,
  color,
  alt = "Hexagon content",
  title,
  description,
  number,
  icon,
  onClick,
}: HexagonalTileProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  const bgColor = color || (image ? "transparent" : "#f3f4f6");
  const textColor = color && !image ? "white" : "#333";
  
  return (
    <div
      className="hexagon-wrapper"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={`hexagon ${isHovered ? "hexagon-hover" : ""}`} 
        style={{ backgroundColor: bgColor }}
      >
        {image && (
          <div className="hexagon-image-container">
            <Image 
              src={image} 
              alt={alt} 
              fill 
              className="hexagon-image object-cover" 
            />
          </div>
        )}
        
        <div className={`hexagon-content ${!title && !description ? "flex items-center justify-center h-full" : ""}`}>
          {number && (
            <Typography 
              variant="h4" 
              className="font-bold mb-1"
              style={{ color: textColor }}
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              {number}
            </Typography>
          )}
          
          {icon && (
            <div className="hexagon-icon mb-2">
              {icon}
            </div>
          )}
          
          {title && (
            <Typography 
              variant="h6" 
              className="mb-1 font-bold"
              style={{ color: textColor }}
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              {title}
            </Typography>
          )}
          
          {description && (
            <Typography 
              variant="small"
              className="opacity-80"
              style={{ color: textColor }}
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              {description}
            </Typography>
          )}
        </div>
      </div>
    </div>
  );
}

export function HexagonalGrid({
  tiles,
  className = ""
}: {
  tiles: HexagonalTileProps[],
  className?: string
}) {
  return (
    <div className={`hexagon-grid-container ${className}`}>
      <div className="hexagon-grid">
        {tiles.map((tile, index) => (
          <HexagonalTile key={index} {...tile} />
        ))}
      </div>
    </div>
  );
}

export default HexagonalGrid;
EOL

# Add CSS to globals.css
cat >> ./src/app/globals.css << 'EOL'

/* Hexagonal Grid Styles */
.hexagon-grid-container {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 1rem 0;
  perspective: 1000px;
}

.hexagon-grid {
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: 650px;
  transform-style: preserve-3d;
  padding-bottom: 50px; /* Added to account for negative margin */
}

.hexagon-wrapper {
  position: relative;
  width: 200px;
  height: 173px; /* Height = width * 0.866 for regular hexagon */
  margin: -30px 5px; /* Negative top margin creates overlap effect */
  transition: all 0.3s ease;
  z-index: 1;
  cursor: pointer;
}

/* Create honeycomb pattern with proper offsets */
.hexagon-wrapper:nth-child(3n+2) {
  margin-top: -13px;
  margin-bottom: -47px;
}

.hexagon-wrapper:nth-child(3n+3) {
  margin-top: 20px;
  margin-bottom: -80px;
}

/* Adjust rows to align properly */
.hexagon-wrapper:nth-child(6n+4),
.hexagon-wrapper:nth-child(6n+5),
.hexagon-wrapper:nth-child(6n+6) {
  margin-left: 110px; /* Offset alternate rows */
}

.hexagon-wrapper:hover {
  transform: translateY(-8px) translateZ(10px);
  z-index: 2;
}

.hexagon {
  position: absolute;
  width: 100%;
  height: 100%;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  background-color: white;
  transition: all 0.3s ease;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transform-style: preserve-3d;
}

.hexagon-hover {
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
}

.hexagon-image-container {
  position: absolute;
  width: 100%;
  height: 100%;
}

.hexagon-image {
  object-fit: cover;
  width: 100%;
  height: 100%;
  transition: transform 0.5s ease;
}

.hexagon:hover .hexagon-image {
  transform: scale(1.05);
}

.hexagon-content {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 1.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.hexagon-icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: #333;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .hexagon-grid {
    max-width: 450px;
  }
  
  .hexagon-wrapper {
    width: 150px;
    height: 130px;
    margin: -25px 3px;
  }
  
  .hexagon-wrapper:nth-child(6n+4),
  .hexagon-wrapper:nth-child(6n+5),
  .hexagon-wrapper:nth-child(6n+6) {
    margin-left: 80px;
  }
  
  .hexagon-content {
    padding: 1rem;
  }
}

@media (max-width: 500px) {
  .hexagon-grid {
    max-width: 300px;
  }
  
  .hexagon-wrapper {
    width: 120px;
    height: 104px;
    margin: -22px 2px;
  }
  
  .hexagon-wrapper:nth-child(6n+4),
  .hexagon-wrapper:nth-child(6n+5),
  .hexagon-wrapper:nth-child(6n+6) {
    margin-left: 65px;
  }
  
  .hexagon-content {
    padding: 0.75rem;
  }
}
EOL

# Create hero.tsx component
mkdir -p ./src/app/components
cat > ./src/app/components/hero.tsx << 'EOL'
"use client";

import Image from "next/image";
import { Button, Typography } from "@material-tailwind/react";
import { HexagonalGrid } from "@/components/hexagonal-tile";

function Hero() {
  // Hexagonal tiles data for the hero section
  const heroTiles = [
    {
      image: "/image/team.webp",
      alt: "Team Collaboration",
    },
    {
      image: "/image/laptop.png",
      alt: "Development",
    },
    {
      image: "/image/Background.png",
      alt: "Technology Background",
    },
    {
      image: "/image/iphones.png",
      alt: "Mobile Solutions",
    },
    {
      image: "/logos/hima2-black.png",
      alt: "Hima Brand",
    },
    {
      image: "/image/iphone.png",
      alt: "iPhone App",
    },
  ];

  return (
    <div className="relative min-h-screen w-full">
      <header className="grid !min-h-[49rem] bg-gray-900 px-8">
        <div className="container mx-auto mt-32 grid h-full w-full grid-cols-1 place-items-center lg:mt-14 lg:grid-cols-2">
          <div className="col-span-1">
            <Typography
              variant="h1"
              color="white"
              className="mb-4"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Welcome to <br /> Hima Technologies
            </Typography>
            <Typography
              variant="lead"
              className="mb-7 !text-white md:pr-16 xl:pr-28"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              At Hima Technologies, we are driven by innovation and a passion
              for leveraging technology to empower businesses and individuals
              alike.
            </Typography>

            <div className="flex flex-col gap-2 md:mb-2 md:w-10/12 md:flex-row">
              <Button
                size="lg"
                color="white"
                className="flex justify-center items-center gap-3"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                <i className="fa-solid fa-phone"></i>
                Get in Touch
              </Button>
              <Button
                size="lg"
                color="white"
                className="flex justify-center items-center gap-3"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                <i className="fa-solid fa-info"></i>
                About Us
              </Button>
            </div>
          </div>
          <div className="col-span-1 w-full max-w-md lg:max-w-full mt-10 lg:mt-0">
            <HexagonalGrid tiles={heroTiles} />
          </div>
        </div>
      </header>
      <div className="mx-8 lg:mx-16 -mt-24 rounded-xl bg-white p-5 md:p-14 shadow-md">
        <div>
          <Typography
            variant="h3"
            color="blue-gray"
            className="mb-3"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Who we are
          </Typography>
          <Typography
            variant="paragraph"
            className="font-normal !text-gray-500 lg:w-5/12"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Founded in Zanzibar by a team of forward-thinking innovators, Hima
            Technologies combines expertise in software development, artificial
            intelligence, data analytics, and cybersecurity. With a commitment
            to technological excellence, we harness cutting-edge solutions to
            drive meaningful impact across industries, ensuring businesses stay
            ahead in an ever-evolving digital landscape.
          </Typography>
        </div>
      </div>
    </div>
  );
}
export default Hero;
EOL

# Create an example usage in app/page.tsx (if it exists, modify it to include the Hero component)
if [ -f ./src/app/page.tsx ]; then
  # Back up the existing page.tsx
  cp ./src/app/page.tsx ./src/app/page.tsx.bak
  
  # Check if the Hero component is already imported, if not add it
  if ! grep -q 'import Hero from' ./src/app/page.tsx; then
    sed -i '1s/^/import Hero from ".\/components\/hero";\n/' ./src/app/page.tsx
  fi
  
  # Check if the Hero component is already used, if not add it
  if ! grep -q '<Hero' ./src/app/page.tsx; then
    # Find the start of the main JSX section and add the Hero component
    sed -i '/<main/a \      <Hero \/>' ./src/app/page.tsx
  fi
else
  # Create a basic page.tsx if it doesn't exist
  cat > ./src/app/page.tsx << 'EOL'
"use client";

import Hero from "./components/hero";

export default function Home() {
  return (
    <main>
      <Hero />
      {/* Additional content goes here */}
    </main>
  );
}
EOL
fi

# Add placeholder folders for images if they don't exist
mkdir -p ./public/image
mkdir -p ./public/logos

# Create placeholder images if they don't exist
if [ ! -f ./public/image/team.webp ]; then
  echo "Creating placeholder for /image/team.webp (you'll need to replace this with your actual image)"
  # Create a small blank placeholder image
  echo "data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAACQAQCdASoAAgAAQAwJbACdLoAMgAAAAP7+BAA=" | base64 -d > ./public/image/team.webp
fi

if [ ! -f ./public/image/laptop.png ]; then
  echo "Creating placeholder for /image/laptop.png (you'll need to replace this with your actual image)"
  # Create a small blank placeholder image
  echo "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==" | base64 -d > ./public/image/laptop.png
fi

if [ ! -f ./public/image/Background.png ]; then
  echo "Creating placeholder for /image/Background.png (you'll need to replace this with your actual image)"
  # Create a small blank placeholder image
  echo "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==" | base64 -d > ./public/image/Background.png
fi

if [ ! -f ./public/image/iphones.png ]; then
  echo "Creating placeholder for /image/iphones.png (you'll need to replace this with your actual image)"
  # Create a small blank placeholder image
  echo "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==" | base64 -d > ./public/image/iphones.png
fi

if [ ! -f ./public/image/iphone.png ]; then
  echo "Creating placeholder for /image/iphone.png (you'll need to replace this with your actual image)"
  # Create a small blank placeholder image
  echo "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==" | base64 -d > ./public/image/iphone.png
fi

if [ ! -f ./public/logos/hima2-black.png ]; then
  echo "Creating placeholder for /logos/hima2-black.png (you'll need to replace this with your actual image)"
  # Create a small blank placeholder image
  echo "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==" | base64 -d > ./public/logos/hima2-black.png
fi

echo "Hexagonal grid component has been successfully added to your project!"
echo "Main component: src/components/hexagonal-tile.tsx"
echo "CSS added to: src/app/globals.css" 
echo "Hero component: src/app/components/hero.tsx"
echo ""
echo "Note: Placeholder images have been created. You'll need to replace them with your actual images."
echo ""
echo "To use the hexagonal grid in other components:"
echo "import { HexagonalGrid } from '@/components/hexagonal-tile';"