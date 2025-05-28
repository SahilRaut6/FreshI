import React, { useState } from 'react';
import { Leaf, Truck, Factory, Package, Store } from 'lucide-react';

// Types
import { StakeholderType, FormData } from '../types';

// Components
import FarmerForm from '../components/forms/FarmerForm';
import TransporterForm from '../components/forms/TransporterForm';
import ProcessorForm from '../components/forms/ProcessorForm';
import DistributorForm from '../components/forms/DistributorForm';
import RetailerForm from '../components/forms/RetailerForm';
import SuccessMessage from '../components/SuccessMessage';

// Services
import { submitData } from '../services/dataService';

const DataInput = () => {
  const [stakeholderType, setStakeholderType] = useState<StakeholderType | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [batchId, setBatchId] = useState<string>('');

  const handleSubmit = async (data: FormData) => {
    if (!stakeholderType) return;
    
    try {
      const response = await submitData(stakeholderType, data);
      console.log('Data submitted:', response);
      setBatchId(response.batchId);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting data:', error);
      // Handle error (show error message)
    }
  };

  const resetForm = () => {
    setStakeholderType(null);
    setIsSubmitted(false);
    setBatchId('');
  };

  if (isSubmitted) {
    return <SuccessMessage batchId={batchId} onReset={resetForm} />;
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 text-center">
            Data Input Portal
          </h1>
          <p className="text-lg text-gray-700 mb-8 text-center">
            Select your role in the supply chain and provide information about the product.
          </p>

          {!stakeholderType ? (
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center">
                I am a:
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                <StakeholderCard
                  type="farmer"
                  icon={<Leaf className="h-8 w-8 text-green-500" />}
                  title="Farmer"
                  onClick={() => setStakeholderType('farmer')}
                />
                <StakeholderCard
                  type="transporter"
                  icon={<Truck className="h-8 w-8 text-blue-500" />}
                  title="Transporter"
                  onClick={() => setStakeholderType('transporter')}
                />
                <StakeholderCard
                  type="processor"
                  icon={<Factory className="h-8 w-8 text-purple-500" />}
                  title="Processor"
                  onClick={() => setStakeholderType('processor')}
                />
                <StakeholderCard
                  type="distributor"
                  icon={<Package className="h-8 w-8 text-orange-500" />}
                  title="Distributor"
                  onClick={() => setStakeholderType('distributor')}
                />
                <StakeholderCard
                  type="retailer"
                  icon={<Store className="h-8 w-8 text-red-500" />}
                  title="Retailer"
                  onClick={() => setStakeholderType('retailer')}
                />
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
              <button
                onClick={() => setStakeholderType(null)}
                className="text-green-600 hover:text-green-700 mb-4 flex items-center transition-colors"
              >
                ← Back to stakeholder selection
              </button>

              {stakeholderType === 'farmer' && (
                <FarmerForm onSubmit={handleSubmit} />
              )}
              {stakeholderType === 'transporter' && (
                <TransporterForm onSubmit={handleSubmit} />
              )}
              {stakeholderType === 'processor' && (
                <ProcessorForm onSubmit={handleSubmit} />
              )}
              {stakeholderType === 'distributor' && (
                <DistributorForm onSubmit={handleSubmit} />
              )}
              {stakeholderType === 'retailer' && (
                <RetailerForm onSubmit={handleSubmit} />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

interface StakeholderCardProps {
  type: StakeholderType;
  icon: React.ReactNode;
  title: string;
  onClick: () => void;
}

const StakeholderCard = ({ icon, title, onClick }: StakeholderCardProps) => {
  return (
    <button
      onClick={onClick}
      className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col items-center justify-center hover:border-green-500 hover:shadow-md transition-all duration-300 h-40"
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-medium text-gray-800">{title}</h3>
    </button>
  );
};

export default DataInput;