"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";

interface HexagonalTileProps {
  image: string;
  alt?: string;
  title?: string;
  description?: string;
  onClick?: () => void;
}

export function HexagonalTile({
  image,
  alt = "Hexagon image",
  title,
  description,
  onClick,
}: HexagonalTileProps) {
  return (
    <div 
      className="hexagon-wrapper cursor-pointer"
      onClick={onClick}
    >
      <div className="hexagon">
        <div className="hexagon-image-container">
          <Image 
            src={image} 
            alt={alt} 
            fill 
            className="hexagon-image object-cover" 
          />
        </div>
        {(title || description) && (
          <div className="hexagon-content">
            {title && (
              <Typography 
                variant="h6" 
                color="white" 
                className="mb-1 font-bold"
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
                color="white"
                className="opacity-80"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                {description}
              </Typography>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export function HexagonalGrid({ 
  tiles 
}: { 
  tiles: HexagonalTileProps[] 
}) {
  return (
    <div className="hexagon-grid-container">
      <div className="hexagon-grid">
        {tiles.map((tile, index) => (
          <HexagonalTile key={index} {...tile} />
        ))}
      </div>
    </div>
  );
}

export default HexagonalTile;