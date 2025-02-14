import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import {
  Brush,
  Clock,
  Palette,
  Droplets,
  Wallpaper,
  PaintBucket,
  Home,
  CheckCircle2,
  Phone,
  Star,
  Users,
  Building,
  Moon,
  Sun,
  X,
  Mail,
  MapPin
} from 'lucide-react';
import HallGallery from './pages/HallGallery';
import BedroomGallery from './pages/BedroomGallery';
import KitchenGallery from './pages/KitchenGallery';
import bgimage from "./assets/bgimage.jpg"

// Import logos
import bergerLogo from './assets/berger-logo.png';
import nerolacLogo from './assets/nerolac-logo.png';
import asianPaintsLogo from './assets/asian-paints-logo.png';
import nipponLogo from './assets/nippon-logo.png';
import companyLogo from './assets/finallogo.png';

function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-white dark:bg-gray-900 flex items-center justify-center z-50">
      <div className="text-center">
        <img 
          src={companyLogo} 
          alt="Sanjaysam Painting Contractors Logo"
          className="w-64 h-auto mx-auto animate-fade-in"
        />
      </div>
    </div>
  );
}

function HomePage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
      {/* Transparent Logo Container */}
      <div className="fixed top-4 left-4 z-50">
        <Link to="/">
          <img 
            src={companyLogo} 
            alt="Sanjaysam Painting Contractors Logo" 
            className="h-16 w-auto object-contain"
          />
        </Link>
      </div>

      {/* Theme Toggle */}
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="fixed top-4 right-4 z-50 p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        aria-label="Toggle theme"
      >
        {isDarkMode ? (
          <Sun className="w-6 h-6 text-yellow-500" />
        ) : (
          <Moon className="w-6 h-6 text-gray-700" />
        )}
      </button>

      {/* Contact Modal */}
      {isContactModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 max-w-md w-full relative animate-fade-in">
            <button
              onClick={() => setIsContactModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="text-center">
              <Phone className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2 dark:text-white">Contact Information</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Get in touch with us today!</p>
              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Name</p>
                  <p className="text-xl font-semibold dark:text-white">Deckdelight</p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Phone</p>
                  <p className="text-xl font-semibold dark:text-white">9363615604</p>
                </div>
              </div>
              <button
                onClick={() => window.location.href = 'tel:9363615604'}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors w-full flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <header className="relative h-[600px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:  'url("https://img.freepik.com/premium-photo/professional-painter-overalls-helmet-painting-light-blue-wall-with-roller-copy-space-mockup_269655-15299.jpg")',
          }}
        >
          <div className="absolute inset-0 bg-black/20" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl font-bold mb-6">
              Expert Painting Contractors You Can Trust
            </h1>
            <p className="text-xl mb-8">
              Transform your space with the expertise and precision of our professional painting services.
            </p>
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Get Free Estimate
            </button>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-20 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 dark:text-white">About Deck Delight paintings</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
                With over a decade of experience in the painting industry, Deck Delight has established itself as a leading name in professional painting services. Our commitment to quality, attention to detail, and customer satisfaction sets us apart in the industry.
              </p>
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500 mb-2">10+</div>
                  <div className="text-gray-600 dark:text-gray-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500 mb-2">500+</div>
                  <div className="text-gray-600 dark:text-gray-400">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500 mb-2">98%</div>
                  <div className="text-gray-600 dark:text-gray-400">Client Satisfaction</div>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  {
                    icon: <Users className="w-6 h-6 text-orange-500" />,
                    title: "Expert Team",
                    description: "Our skilled professionals bring years of experience to every project"
                  },
                  {
                    icon: <Star className="w-6 h-6 text-orange-500" />,
                    title: "Quality Assurance",
                    description: "We use only premium materials and follow industry best practices"
                  },
                  {
                    icon: <Building className="w-6 h-6 text-orange-500" />,
                    title: "Diverse Portfolio",
                    description: "From residential to commercial projects, we do it all"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="mt-1">{item.icon}</div>
                    <div>
                      <h3 className="font-semibold text-lg dark:text-white">{item.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&q=80" 
                  alt="Painting work" 
                  className="rounded-lg h-48 w-full object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&q=80" 
                  alt="Interior painting" 
                  className="rounded-lg h-64 w-full object-cover"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img 
                  src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80" 
                  alt="Exterior painting" 
                  className="rounded-lg h-64 w-full object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&q=80" 
                  alt="Detail work" 
                  className="rounded-lg h-48 w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 dark:text-white">Why Choose us?</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              {
                icon: <Home className="w-8 h-8" />,
                title: "Residential Painting",
                bgColor: "bg-green-500",
                hoverColor: "hover:bg-green-600"
              },
              {
                icon: <Building className="w-8 h-8" />,
                title: "Commercial Painting",
                bgColor: "bg-orange-500",
                hoverColor: "hover:bg-orange-600"
              },
              {
                icon: <PaintBucket className="w-8 h-8" />,
                title: "Floor Coatings",
                bgColor: "bg-red-500",
                hoverColor: "hover:bg-red-600"
              },
              {
                icon: <Palette className="w-8 h-8" />,
                title: "Color Consultation",
                bgColor: "bg-blue-500",
                hoverColor: "hover:bg-blue-600"
              },
              {
                icon: <Brush className="w-8 h-8" />,
                title: "Painter For A Day",
                bgColor: "bg-purple-500",
                hoverColor: "hover:bg-purple-600"
              },
              {
                icon: <CheckCircle2 className="w-8 h-8" />,
                title: "100% Guarantee",
                bgColor: "bg-yellow-500",
                hoverColor: "hover:bg-yellow-600"
              }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className={`rounded-full ${item.bgColor} ${item.hoverColor} p-6 mb-4 transform transition-all duration-300 hover:scale-110 shadow-lg`}>
                  <div className="text-white">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2 dark:text-white">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>  

      {/* Gallery Section */}
      <section className="py-20 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-6 dark:text-white">Our Work Gallery</h2>
          <p className="text-gray-600 dark:text-gray-300 text-center mb-16 max-w-2xl mx-auto">
            Browse through our portfolio of completed projects, showcasing our expertise in transforming spaces through professional painting services.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Hall Gallery",
                image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80",
                link: "/hall"
              },
              {
                title: "Bedroom Gallery",
                image: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&q=80",
                link: "/bedroom"
              },
              {
                title: "Kitchen Gallery",
                image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80",
                link: "/kitchen"
              }
            ].map((item, index) => (
              <Link
                to={item.link}
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg aspect-[4/3]"
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold">{item.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 dark:text-white">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Home className="w-8 h-8" />,
                title: "Interior & Exterior Painting",
                description: "Professional painting services for all surfaces"
              },
              {
                icon: <Wallpaper className="w-8 h-8" />,
                title: "Wallpaper Installation",
                description: "Expert wallpaper installation and removal"
              },
              {
                icon: <Droplets className="w-8 h-8" />,
                title: "Pressure Washing & Damp Proofing",
                description: "Complete surface cleaning and protection"
              },
              {
                icon: <Palette className="w-8 h-8" />,
                title: "Color Consultations",
                description: "Professional color scheme advice"
              },
              {
                icon: <PaintBucket className="w-8 h-8" />,
                title: "Wood Flooring",
                description: "Quality wood flooring installation and finishing"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 p-8 rounded-xl hover:bg-orange-50 dark:hover:bg-gray-600 transition-colors">
                <div className="mb-4 text-orange-500">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 dark:text-white">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Partners */}
      <section className="py-20 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 dark:text-white">Our Brand Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Berger", logo: bergerLogo },
              { name: "Nerolac", logo: nerolacLogo },
              { name: "Asian Paints", logo: asianPaintsLogo },
              { name: "Nippon Paint", logo: nipponLogo }
            ].map((brand, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-center justify-center"
              >
                <img 
                  src={brand.logo} 
                  alt={`${brand.name} logo`}
                  className="max-h-16 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-500">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Ready to Transform Your Space?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white">
            Contact us today for a free estimate and let us bring your vision to life!
          </p>
          <button
            onClick={() => setIsContactModalOpen(true)}
            className="bg-white text-orange-500 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2 mx-auto"
          >
            <Phone className="w-5 h-5" />
            Contact Us Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1">
              <img 
                src={companyLogo} 
                alt="Sanjaysam Painting Contractors Logo" 
                className="h-16 w-auto object-contain mb-4"
              />
              <p className="text-gray-400">
                Professional painting services for your home and business.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-orange-500 mt-1" />
                  <p>Station Road, Veppampattu,<br />Thiruvallur</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-orange-500" />
                  <p>9363615604</p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-orange-500" />
                  <a href="mailto:sanjaysampaintingcontractors@gmail.com" className="hover:text-orange-500 transition-colors">
                    sanjaysampaintingcontractors@gmail.com
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="hover:text-orange-500 transition-colors">Home</Link></li>
                <li><Link to="/hall" className="hover:text-orange-500 transition-colors">Hall Gallery</Link></li>
                <li><Link to="/bedroom" className="hover:text-orange-500 transition-colors">Bedroom Gallery</Link></li>
                <li><Link to="/kitchen" className="hover:text-orange-500 transition-colors">Kitchen Gallery</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
              <p className="mb-2">Monday - Saturday</p>
              <p className="text-orange-500 font-semibold">9:00 AM - 6:00 PM</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Deck Delight Painting Contractors. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/hall" element={<HallGallery />} />
      <Route path="/bedroom" element={<BedroomGallery />} />
      <Route path="/kitchen" element={<KitchenGallery />} />
    </Routes>
  );
}

export default App;