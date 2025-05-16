'use client';

import { defineHex, Grid } from 'honeycomb-grid';
import type { HexCoordinates } from 'honeycomb-grid';
import Image from 'next/image';
import React from 'react';

interface Tile {
  image: string;
  alt: string;
}

interface HexagonalGridProps {
  tiles: Tile[];
}

const HexagonalTile: React.FC<Tile> = ({ image, alt }) => (
  <div className="hexagon-wrapper">
    <div className="hexagon">
      <Image
        src={image}
        alt={alt}
        width={200}
        height={226}
        className="hexagon-image"
      />
    </div>
  </div>
);

export const HexagonalGrid: React.FC<HexagonalGridProps> = ({ tiles }) => {

  function getHexSize() {
    const width = window.innerWidth;
  
    if (width >= 1200) return 125;    // Desktop
    if (width >= 992) return 100;     // Laptop
    if (width >= 768) return 85;      // Tablet landscape
    if (width >= 576) return 70;      // Tablet portrait
    return 60;                        // Mobile
  }

  const CustomHex = defineHex({
    dimensions: getHexSize(),
    origin: 'topLeft',
  });

  const coordinates: HexCoordinates[] = [
    [0, 0], [1, 0], [2, 0],
    [0, 1], [1, 1], [2, 1],
  ];

  const grid = new Grid(CustomHex, coordinates);
  const hexes = grid.toArray();

  return (
    <div className="relative w-full h-[400px]">
      {hexes.map((hex, index) => {
        const tile = tiles[index];
        if (!tile) return null;

        // ✅ Use .x and .y directly
        const { x, y } = hex;

        return (
          <div
            key={`hex-${hex.q}-${hex.r}`}
            className="absolute"
            style={{
              left: `${x}px`,
              top: `${y}px`,
            }}
          >
            <HexagonalTile {...tile} />
          </div>
        );
      })}
    </div>
  );
};
