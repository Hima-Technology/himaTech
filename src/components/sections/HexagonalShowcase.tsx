"use client";

import { HexagonalGrid } from "../hexagonal-tile";

export function HexagonalShowcase() {
  // Example data for the hexagonal grid
  const hexagonTiles = [
    {
      image: "/image/NextJS.webp",
      alt: "Next JS",
      title: "Our Team",
      description: "Dedicated professionals working together",
    },
    {
      image: "/image/ReactJS.webp",
      alt: "Development",
      title: "Development",
      description: "Creating innovative solutions",
    },
    {
      image: "/public/image/python.webp",
      alt: "Background",
      title: "Technology",
      description: "Leveraging cutting-edge tech",
    },
    {
      image: "/image/tailwindCSS.webp",
      alt: "Mobile Solutions",
      title: "Mobile Apps",
      description: "Cross-platform development",
    },
    {
      image: "/public/logos/hima2-black.png",
      alt: "Hima Brand",
      title: "Our Brand",
      description: "Trusted technology partner",
    },
    {
      image: "/image/iphone.png",
      alt: "iPhone App",
      title: "iOS Development",
      description: "Native mobile applications",
    },
  ];

  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Solutions</h2>
          <p className="text-lg text-gray-600">Explore our range of technological solutions</p>
        </div>
        
        <HexagonalGrid tiles={hexagonTiles} />
      </div>
    </div>
  );
}

export default HexagonalShowcase;