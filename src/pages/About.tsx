import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Shield, Globe, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About FreshI
            </h1>
            <p className="text-lg text-gray-700">
              Our mission is to create transparency in the food supply chain using blockchain technology, 
              empowering consumers to make informed choices about the food they purchase.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="https://images.pexels.com/photos/8117889/pexels-photo-8117889.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Our story" 
                className="rounded-xl shadow-md w-full object-cover h-[400px]"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Our Story
              </h2>
              <p className="text-gray-700 mb-4">
                FreshI was founded in 2025 by a group of technologists and food industry experts who recognized 
                the need for greater transparency in the food supply chain. With increasing concerns about food 
                safety, sustainability, and ethical sourcing, we saw an opportunity to leverage blockchain 
                technology to provide verifiable information about the journey of fresh produce.
              </p>
              <p className="text-gray-700 mb-4">
                Our team brings together expertise in blockchain development, supply chain management, 
                and consumer advocacy. We've built FreshI with a commitment to accuracy, security, and 
                ease of use for all stakeholders in the food supply chain.
              </p>
              <p className="text-gray-700">
                Today, we're working with farmers, transporters, processors, distributors, and retailers 
                to build a more transparent food system that benefits everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-gray-700">
              At FreshI, our work is guided by a set of core values that reflect our commitment 
              to transparency, integrity, and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ValueCard 
              icon={<FileText className="h-10 w-10 text-green-500" />}
              title="Transparency"
              description="We believe consumers have the right to know the complete story behind their food."
            />
            <ValueCard 
              icon={<Shield className="h-10 w-10 text-green-500" />}
              title="Integrity"
              description="We uphold the highest standards of data accuracy and security."
            />
            <ValueCard 
              icon={<Globe className="h-10 w-10 text-green-500" />}
              title="Sustainability"
              description="We support sustainable food systems through better information and accountability."
            />
            <ValueCard 
              icon={<Users className="h-10 w-10 text-green-500" />}
              title="Collaboration"
              description="We bring together all stakeholders to create a more transparent food ecosystem."
            />
          </div>
        </div>
      </section>

      {/* Our Technology Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 order-2 md:order-1">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Our Technology
              </h2>
              <p className="text-gray-700 mb-4">
                FreshI uses blockchain technology to create an immutable record of each product's 
                journey through the supply chain. Unlike traditional databases, blockchain ensures 
                that once information is recorded, it cannot be altered or deleted.
              </p>
              <p className="text-gray-700 mb-4">
                Each stakeholder in the supply chain contributes data at their stage of involvement, 
                building a complete picture of the product's history. This information is securely 
                stored and can be accessed by consumers through our simple tracing interface.
              </p>
              <p className="text-gray-700">
                Our system is designed to be easy to use for all participants, from small-scale 
                farmers to large retailers, ensuring that comprehensive traceability is accessible 
                to everyone in the food industry.
              </p>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <img 
                src="https://images.pexels.com/photos/6476260/pexels-photo-6476260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Our technology" 
                className="rounded-xl shadow-md w-full object-cover h-[400px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Join the Transparency Movement
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Whether you're a consumer interested in tracing your food or a business looking to 
              improve your supply chain transparency, FreshI is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/trace"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 text-center"
              >
                Trace a Product
              </Link>
              <Link
                to="/input"
                className="bg-white hover:bg-gray-100 text-gray-800 border border-gray-300 px-6 py-3 rounded-lg font-medium transition-colors duration-300 text-center"
              >
                Input Data
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ValueCard = ({ icon, title, description }: ValueCardProps) => {
  return (
    <div className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
      <div className="inline-flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default About;