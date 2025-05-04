import React from 'react';

interface CTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
}

export default function CTA({ title, description, buttonText }: CTAProps) {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          {title || 'Ready to get started?'}
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          {description || "Let's discuss how we can help your business grow."}
        </p>
        <button className="bg-blue-gray-900 hover:bg-primary-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
          {buttonText || 'Contact Us'}
        </button>
      </div>
    </section>
  );
}