"use client";
import { useState, useEffect } from 'react';
import { Navbar, Footer } from '@/components';
import CTA from '@/components/sections/CTA';
import { Button } from "@material-tailwind/react";
import { FiExternalLink, FiHeart, FiClock } from 'react-icons/fi';
import Image from 'next/image';
import ProductWebsiteCard from '@/components/products/ProductWebsiteCard';

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

type MetaData = {
  title: string;
  description: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
};


export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [meta, setMeta] = useState<MetaData>({
    title: 'Our Products',
    description: 'Innovative solutions tailored to your business needs',
    colors: {
      primary: '#2563eb',
      secondary: '#7c3aed',
      accent: '#10b981'
    }
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/data/products.json`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setProducts(data.products || []);
        setMeta(data.meta || {
          title: 'Our Products',
          description: 'Innovative solutions tailored to your business needs',
          colors: {
            primary: '#2563eb',
            secondary: '#7c3aed',
            accent: '#10b981'
          }
        });
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-6 py-20 text-center">
          <div className="animate-pulse">
            <div className="h-12 bg-gray-300 rounded w-1/2 mx-auto mb-4"></div>
            <div className="h-6 bg-gray-300 rounded w-3/4 mx-auto"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{meta.title}</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {meta.description}
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="container mx-auto px-6 py-16">
        {products.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductWebsiteCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-700">No products available at the moment</h3>
            <p className="text-gray-500 mt-2">Please check back later</p>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <CTA 
        title="Ready to transform your business?"
        buttonText="Schedule Consultation"
      />
      
      <Footer />
    </div>
  );
}