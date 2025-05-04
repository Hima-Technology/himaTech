'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FiExternalLink, FiHeart, FiClock } from 'react-icons/fi';

type Product = {
  id: number;
  title: string;
  description: string;
  category: string;
  features: string[];
  url: string;
  author?: string;
  timeToComplete?: string;
  screenshotUrl?: string;
  fallbackImage: string;
};

export default function ProductWebsiteCard({ product }: { product: Product }) {
  const [isLiked, setIsLiked] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [currentImage, setCurrentImage] = useState(product.fallbackImage); 
  const [apiError, setApiError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Reset states when product changes
    setImageError(false);
    setApiError(null);
    setIsLoading(true);
    
    const loadScreenshot = async () => {
      // If a screenshot URL is already provided, use it directly
      if (product.screenshotUrl) {
        setCurrentImage(product.screenshotUrl);
        setIsLoading(false);
        return;
      }
      
      try {
        // Use our custom screenshot API with the product URL
        const apiUrl = `/api/screenshot?url=${encodeURIComponent(product.url)}`;
        
        // In development, show a message but still try to use the API
        if (process.env.NODE_ENV === 'development') {
          console.log('Development mode - using API:', apiUrl);
        }
        
        // Set the image source to our API endpoint
        setCurrentImage(apiUrl);
      } catch (err) {
        console.error('Screenshot error:', err);
        setApiError('Preview service unavailable');
        setCurrentImage(product.fallbackImage);
      } finally {
        setIsLoading(false);
      }
    };

    loadScreenshot();
  }, [product.screenshotUrl, product.url, product.fallbackImage]);

  const handleImageError = () => {
    console.log('Image error, using fallback');
    if (currentImage !== product.fallbackImage) {
      setCurrentImage(product.fallbackImage);
    } else {
      setImageError(true);
    }
  };

  return (
    <article className="relative w-full rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-white h-full flex flex-col">
      {/* Image with hover effect */}
      <div className="relative h-48 overflow-hidden flex-shrink-0">
        <a href={product.url} target="_blank" rel="noopener noreferrer" className="block h-full">
          {isLoading ? (
            <div className="h-full bg-gray-100 flex items-center justify-center">
              <span className="text-gray-400">Loading preview...</span>
            </div>
          ) : imageError ? (
            <div className="h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
              <span className="text-gray-400">No preview available</span>
            </div>
          ) : (
            <Image
              src={currentImage}
              alt={`${product.title} Preview`}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
              onError={handleImageError}
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 384px"
              unoptimized={currentImage.startsWith('/api/')} // Don't optimize our API calls
            />
          )}
        </a>
      </div>

      {/* Error message for API failures */}
      {apiError && (
        <div className="absolute top-2 left-2 bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">
          {apiError}
        </div>
      )}

      {/* Hover info overlay */}
      <div className="absolute top-4 right-4 flex flex-col items-end space-y-3">
        <button 
          onClick={() => setIsLiked(!isLiked)}
          className="p-2 bg-white/90 rounded-full shadow-sm hover:bg-white transition-colors"
          aria-label={isLiked ? 'Unlike' : 'Like'}
        >
          <FiHeart 
            className={`text-lg ${isLiked ? 'text-red-500 fill-red-500' : 'text-gray-700'}`} 
          />
        </button>
        
        {product.timeToComplete && (
          <div className="card__clock-info flex items-center bg-white/90 px-3 py-1 rounded-full shadow-sm">
            <FiClock className="text-gray-700 mr-1" />
            <span className="card__time text-sm text-gray-700">{product.timeToComplete}</span>
          </div>
        )}
      </div>

      {/* Card content */}
      <div className="p-5 flex-grow flex flex-col">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary-600">
          {product.category}
        </span>
        <h3 className="text-xl font-bold mt-1 mb-2 text-gray-800">
          <a href={product.url} target="_blank" rel="noopener noreferrer" className="hover:text-primary-600 transition-colors">
            {product.title}
          </a>
        </h3>
        <p className="text-gray-600 mb-4 flex-grow">{product.description}</p>
        
        <ul className="space-y-2 mb-4">
          {product.features.map((feature, i) => (
            <li key={i} className="flex items-start">
              <span className="bg-primary-100 text-primary-600 rounded-full p-1 mr-3">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex justify-between items-center">
          <span className="text-sm text-gray-600">
            by{' '}
            <a href="#" className="font-medium hover:text-primary-600 transition-colors">
              {product.author || 'HimaTech Team'}
            </a>
          </span>
          
          <a 
            href={product.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-800 transition-colors"
          >
            Visit <FiExternalLink className="ml-1" />
          </a>
        </div>
      </div>
    </article>
  );
}
