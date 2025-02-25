import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

import bedroom1 from '../assets/bedroom1.jpeg';
import bedroom2 from '../assets/bedroom2.jpeg';
import bedroom3 from '../assets/bedroom3.jpeg';
import bedroom4 from '../assets/bedroom4.jpeg';

export default function BedroomGallery() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <Link to="/" className="inline-flex items-center text-orange-500 hover:text-orange-600 mb-8">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>
        
        <h1 className="text-4xl font-bold mb-12 dark:text-white">Bedroom Gallery</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              image: bedroom1,
              title: "Master Bedroom",
              description: "Serene and relaxing atmosphere"
            },
            {
              image: bedroom2,
              title: "Children's Bedroom",
              description: "Playful and vibrant design"
            },
            {
              image: bedroom3,
              title: "Guest Bedroom",
              description: "Comfortable and welcoming space"
            },
            {
              image: bedroom4,
              title: "Modern Bedroom",
              description: "Contemporary and stylish"
            },
            {
              image: "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?auto=format&fit=crop&q=80",
              title: "Luxury Suite",
              description: "Premium comfort and design"
            },
            {
              image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80",
              title: "Minimalist Bedroom",
              description: "Clean and peaceful space"
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