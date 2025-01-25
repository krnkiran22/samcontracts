import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function HallGallery() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <Link to="/" className="inline-flex items-center text-orange-500 hover:text-orange-600 mb-8">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>
        
        <h1 className="text-4xl font-bold mb-12 dark:text-white">Hall Gallery</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80",
              title: "Modern Living Hall",
              description: "Contemporary design with neutral tones"
            },
            {
              image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80",
              title: "Spacious Family Hall",
              description: "Bright and welcoming atmosphere"
            },
            {
              image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80",
              title: "Elegant Living Space",
              description: "Sophisticated color palette"
            },
            {
              image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80",
              title: "Contemporary Living Room",
              description: "Modern and stylish design"
            },
            {
              image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80",
              title: "Luxury Hall",
              description: "Premium finishes and elegant touches"
            },
            {
              image: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&q=80",
              title: "Minimalist Living Space",
              description: "Clean lines and simple elegance"
            }
          ].map((item, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-200">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}