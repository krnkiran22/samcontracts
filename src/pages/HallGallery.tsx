import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import hall1 from '../assets/hall1.jpeg';
import hall2 from '../assets/hall2.jpeg';
import hall3 from '../assets/hall3.jpeg';
import hall4 from '../assets/hall4.jpeg';
import hall5 from '../assets/hall5.jpeg';
import hall6 from '../assets/hall6.jpeg';

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
              image: hall1,
              title: "Modern Living Hall",
              description: "Contemporary design with neutral tones"
            },
            {
              image: hall2,
              title: "Spacious Family Hall",
              description: "Bright and welcoming atmosphere"
            },
            {
              image: hall3,
              title: "Elegant Living Space",
              description: "Sophisticated color palette"
            },
            {
              image: hall4,
              title: "Contemporary Living Room",
              description: "Modern and stylish design"
            },
            {
              image: hall5,
              title: "Luxury Hall",
              description: "Premium finishes and elegant touches"
            },
            {
              image: hall6,
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