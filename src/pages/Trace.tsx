import React, { useState } from 'react';
import { Search } from 'lucide-react';

// Types
import { ProductData } from '../types';

// Services
import { traceProduct } from '../services/traceService';

// Components
import ProductJourney from '../components/ProductJourney';
import LoadingSpinner from '../components/LoadingSpinner';

const Trace = () => {
  const [batchId, setBatchId] = useState('');
  const [productData, setProductData] = useState<ProductData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searched, setSearched] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!batchId.trim()) {
      setError('Please enter a batch ID');
      return;
    }

    setIsLoading(true);
    setError(null);
    setSearched(true);

    try {
      const data = await traceProduct(batchId);
      setProductData(data);
    } catch (error) {
      console.error('Error tracing product:', error);
      setError('Could not find product with this batch ID. Please check the ID and try again.');
      setProductData(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 text-center">
            Trace Your Product
          </h1>
          <p className="text-lg text-gray-700 mb-8 text-center">
            Enter the batch ID to see the complete journey of your product from farm to store.
          </p>

          <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-8">
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
              <div className="flex-grow">
                <label htmlFor="batchId" className="block text-sm font-medium text-gray-700 mb-1">
                  Batch ID
                </label>
                <input
                  type="text"
                  id="batchId"
                  value={batchId}
                  onChange={(e) => setBatchId(e.target.value)}
                  placeholder="Enter product batch ID (e.g., BAT-123456)"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                  required
                />
              </div>
              <div className="self-end">
                <button
                  type="submit"
                  className="w-full md:w-auto bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center justify-center"
                >
                  <Search className="h-5 w-5 mr-2" />
                  Trace
                </button>
              </div>
            </form>
            
            {error && (
              <div className="mt-4 text-red-600 bg-red-50 p-3 rounded-lg">
                {error}
              </div>
            )}

            <div className="mt-4 text-sm text-gray-600">
              <p>
                Don't have a batch ID? Try one of these sample IDs:
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                <SampleBatchButton id="BAT-123456" onClick={() => setBatchId('BAT-123456')} />
                <SampleBatchButton id="BAT-789012" onClick={() => setBatchId('BAT-789012')} />
                <SampleBatchButton id="BAT-345678" onClick={() => setBatchId('BAT-345678')} />
              </div>
            </div>
          </div>

          {isLoading ? (
            <div className="flex justify-center py-12">
              <LoadingSpinner />
            </div>
          ) : (
            <>
              {productData ? (
                <ProductJourney productData={productData} />
              ) : (
                searched && !error && (
                  <div className="text-center py-8">
                    <p className="text-gray-600">No product found with this batch ID.</p>
                  </div>
                )
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

interface SampleBatchButtonProps {
  id: string;
  onClick: () => void;
}

const SampleBatchButton = ({ id, onClick }: SampleBatchButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-sm transition-colors"
    >
      {id}
    </button>
  );
};

export default Trace;