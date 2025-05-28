import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, BarChart2, TrendingUp, Truck, Users } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="pt-28 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                Transparent Food Traceability on the Blockchain
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                FreshI empowers consumers with complete transparency about the journey of their fresh produce, from farm to table. Know exactly where your food comes from and how it was handled.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/trace"
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 text-center flex items-center justify-center"
                >
                  Trace a Product
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/input"
                  className="bg-white hover:bg-gray-100 text-gray-800 border border-gray-300 px-6 py-3 rounded-lg font-medium transition-colors duration-300 text-center"
                >
                  Input Data
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Fresh produce traceability"
                className="rounded-xl shadow-lg w-full object-cover max-h-[500px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose FreshI?
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our blockchain-based system ensures that information about your food's journey is accurate, transparent, and cannot be tampered with.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<ShieldCheck className="h-8 w-8 text-green-500" />}
              title="Immutable Records"
              description="Every step of the supply chain is recorded on the blockchain, ensuring data integrity and preventing tampering."
            />
            <FeatureCard
              icon={<BarChart2 className="h-8 w-8 text-green-500" />}
              title="Complete Transparency"
              description="Access detailed information about your food's origin, handling, and journey to your local store."
            />
            <FeatureCard
              icon={<TrendingUp className="h-8 w-8 text-green-500" />}
              title="Building Trust"
              description="Creating trustworthy relationships between producers, retailers, and consumers through verified data."
            />
            <FeatureCard
              icon={<Truck className="h-8 w-8 text-green-500" />}
              title="Supply Chain Efficiency"
              description="Streamlined processes and reduced paperwork for all stakeholders in the food supply chain."
            />
            <FeatureCard
              icon={<Users className="h-8 w-8 text-green-500" />}
              title="Consumer Empowerment"
              description="Make informed choices about the food you buy based on verifiable information."
            />
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-8 flex flex-col justify-center items-center text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Ready to trace your food?</h3>
              <Link
                to="/trace"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 inline-flex items-center"
              >
                Trace Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How FreshI Works
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our system tracks fresh produce at every stage of the supply chain, creating a complete and transparent record.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-0">
            <StepCard 
              number="1"
              title="Farm"
              description="Farmers record harvest details, batch information, and initial quality data."
            />
            <StepConnector />
            <StepCard 
              number="2"
              title="Transport"
              description="Transporters log departure, arrival, and conditions during transit."
            />
            <StepConnector />
            <StepCard 
              number="3"
              title="Processing"
              description="Processors document sorting, packaging, and quality control measures."
            />
            <StepConnector className="hidden md:block" />
            <StepCard 
              number="4"
              title="Distribution"
              description="Distributors record storage conditions and distribution details."
            />
            <StepConnector />
            <StepCard 
              number="5"
              title="Retail"
              description="Retailers update final location and consumer-facing information."
            />
          </div>

          <div className="mt-16 text-center">
            <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
              Each stakeholder contributes to building a complete record on the blockchain. Consumers can then access this information by scanning a QR code or entering a batch ID.
            </p>
            <Link
              to="/about"
              className="text-green-600 hover:text-green-700 font-medium inline-flex items-center transition-colors duration-300"
            >
              Learn more about our process
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

interface StepCardProps {
  number: string;
  title: string;
  description: string;
}

const StepCard = ({ number, title, description }: StepCardProps) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm text-center">
      <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-lg mx-auto mb-4">
        {number}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-700">{description}</p>
    </div>
  );
};

const StepConnector = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="hidden md:block w-full h-0.5 bg-gray-300"></div>
      <div className="block md:hidden h-8 w-0.5 bg-gray-300 mx-auto my-1"></div>
    </div>
  );
};

export default Home;