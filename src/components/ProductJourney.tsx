import React, { useState, useEffect } from 'react';
import { Leaf, Truck, Factory, Package, Store, Calendar, MapPin, Clock, Info } from 'lucide-react';
import { ProductData } from '../types';

interface ProductJourneyProps {
  productData: ProductData;
}

const ProductJourney: React.FC<ProductJourneyProps> = ({ productData }) => {
  const [activeStage, setActiveStage] = useState<number | null>(null);
  
  // Auto-animate through stages on initial load
  useEffect(() => {
    const totalStages = productData.journey.length;
    let currentStage = 0;
    
    const interval = setInterval(() => {
      if (currentStage < totalStages) {
        setActiveStage(currentStage);
        currentStage++;
      } else {
        clearInterval(interval);
      }
    }, 800);
    
    return () => clearInterval(interval);
  }, [productData.journey.length]);

  const getStageIcon = (stage: string) => {
    switch (stage) {
      case 'farm':
        return <Leaf className="h-6 w-6 text-green-500" />;
      case 'transport':
        return <Truck className="h-6 w-6 text-blue-500" />;
      case 'processing':
        return <Factory className="h-6 w-6 text-purple-500" />;
      case 'distribution':
        return <Package className="h-6 w-6 text-orange-500" />;
      case 'retail':
        return <Store className="h-6 w-6 text-red-500" />;
      default:
        return <Info className="h-6 w-6 text-gray-500" />;
    }
  };

  const getStageColor = (stage: string) => {
    switch (stage) {
      case 'farm':
        return 'border-green-500 bg-green-50';
      case 'transport':
        return 'border-blue-500 bg-blue-50';
      case 'processing':
        return 'border-purple-500 bg-purple-50';
      case 'distribution':
        return 'border-orange-500 bg-orange-50';
      case 'retail':
        return 'border-red-500 bg-red-50';
      default:
        return 'border-gray-300 bg-gray-50';
    }
  };

  const getStageBgColor = (stage: string) => {
    switch (stage) {
      case 'farm':
        return 'bg-green-500';
      case 'transport':
        return 'bg-blue-500';
      case 'processing':
        return 'bg-purple-500';
      case 'distribution':
        return 'bg-orange-500';
      case 'retail':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      {/* Product Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">{productData.productName}</h2>
        <p className="text-green-100 mb-1">Batch ID: {productData.batchId}</p>
        <p className="text-green-100">Last Updated: {new Date(productData.lastUpdated).toLocaleDateString()}</p>
      </div>

      {/* Journey Timeline */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-6">Product Journey</h3>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gray-200"></div>
          
          {/* Timeline Events */}
          <div className="space-y-8">
            {productData.journey.map((stage, index) => (
              <div 
                key={index}
                className={`relative flex items-start transition-opacity duration-500 ${
                  activeStage !== null && index > activeStage ? 'opacity-40' : 'opacity-100'
                }`}
              >
                {/* Timeline Node */}
                <div className={`flex-shrink-0 w-16 h-16 rounded-full ${getStageBgColor(stage.type)} flex items-center justify-center z-10 transition-all duration-300 ${
                  activeStage === index ? 'scale-110 shadow-lg' : ''
                }`}>
                  {getStageIcon(stage.type)}
                </div>
                
                {/* Stage Content */}
                <div className="ml-6 flex-grow">
                  <div className={`border-2 rounded-lg p-4 ${getStageColor(stage.type)}`}>
                    <h4 className="text-lg font-semibold text-gray-800 capitalize mb-2">
                      {stage.type} Stage
                    </h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {stage.data.map((item, idx) => (
                        <div key={idx} className="flex items-start">
                          {item.icon === 'date' && <Calendar className="flex-shrink-0 h-5 w-5 text-gray-500 mr-2 mt-0.5" />}
                          {item.icon === 'location' && <MapPin className="flex-shrink-0 h-5 w-5 text-gray-500 mr-2 mt-0.5" />}
                          {item.icon === 'info' && <Info className="flex-shrink-0 h-5 w-5 text-gray-500 mr-2 mt-0.5" />}
                          {item.icon === 'time' && <Clock className="flex-shrink-0 h-5 w-5 text-gray-500 mr-2 mt-0.5" />}
                          <div>
                            <p className="text-sm font-medium text-gray-600">{item.label}</p>
                            <p className="text-gray-800">{item.value}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {stage.description && (
                      <div className="mt-3 pt-3 border-t border-gray-200">
                        <p className="text-gray-700 text-sm">{stage.description}</p>
                      </div>
                    )}
                    
                    {stage.verifiedBy && (
                      <div className="mt-3 text-sm text-gray-500">
                        Verified by: {stage.verifiedBy} on {stage.verifiedDate}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Blockchain Verification */}
      <div className="bg-gray-50 border-t border-gray-200 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-sm font-semibold text-gray-800 uppercase tracking-wider">
              Blockchain Verified
            </h4>
            <p className="text-sm text-gray-600">
              This product's journey has been verified on the blockchain for authenticity
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="h-3 w-3 bg-green-500 rounded-full"></div>
            <span className="text-sm font-medium text-green-600">Verified</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductJourney;