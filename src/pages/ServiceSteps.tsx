import React from 'react';
import { Headphones, Building2, Palette, FileText, Home } from 'lucide-react';

function ServiceSteps() {
  const steps = [
    {
      icon: <Headphones className="w-8 h-8 text-white" />,
      title: 'CALL US',
      description: 'Call us at 9363615604 and our service team will be there for a free site inspection at your convenience.'
    },
    {
      icon: <Building2 className="w-8 h-8 text-white" />,
      title: 'SITE EVALUATION',
      description: 'Our contractors will evaluate the site conditions, answer all your queries and provide assistance with product and site consultation.'
    },
    {
      icon: <Palette className="w-8 h-8 text-white" />,
      title: 'COLOUR SELECTION',
      description: 'Our expert team is here to guide you in selecting the perfect shade from our thoughtfully curated collection of safe and stunning colours for your walls.'
    },
    {
      icon: <FileText className="w-8 h-8 text-white" />,
      title: 'QUOTATION',
      description: 'Receive our quotation with the right products and quantities based on your site conditions, your needs and preferences.'
    },
    {
      icon: <Home className="w-8 h-8 text-white" />,
      title: 'SITE EXECUTION',
      description: 'Once the quote is accepted, our contractors will begin the painting process and ensure a perfect painting that\'s perfect in every way.'
    }
  ];

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="relative">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start gap-4 mb-8">
            <div className="relative">
              <div className="w-16 h-16 bg-[#6B21A8] rounded-full flex items-center justify-center">
                {step.icon}
              </div>
              {index !== steps.length - 1 && (
                <div className="absolute top-16 left-1/2 w-0.5 h-16 bg-[#6B21A8] -translate-x-1/2" />
              )}
            </div>
            <div className="pt-3">
              <h3 className="text-lg font-semibold mb-1">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceSteps;