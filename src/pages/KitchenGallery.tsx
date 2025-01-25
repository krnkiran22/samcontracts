import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function KitchenGallery() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <Link to="/" className="inline-flex items-center text-orange-500 hover:text-orange-600 mb-8">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>
        
        <h1 className="text-4xl font-bold mb-12 dark:text-white">Kitchen Gallery</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80",
              title: "Modern Kitchen",
              description: "Contemporary design with clean lines"
            },
            {
              image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&q=80",
              title: "Traditional Kitchen",
              description: "Warm and inviting cooking space"
            },
            {
              image: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&q=80",
              title: "Minimalist Kitchen",
              description: "Clean and efficient design"
            },
            {
              image: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80",
              title: "Contemporary Kitchen",
              description: "Modern functionality"
            },
            {
              image: "https://images.unsplash.com/photo-1556912998-c57cc6b63cd7?auto=format&fit=crop&q=80",
              title: "Luxury Kitchen",
              description: "Premium appliances and finishes"
            },
            {
              image: "https://images.unsplash.com/photo-1556911261-6bd341186b2f?auto=format&fit=crop&q=80",
              title: "Elegant Kitchen",
              description: "Sophisticated and practical"
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