import React, { useState } from 'react';
import { Leaf } from 'lucide-react';
import { FormData } from '../../types';

interface FarmerFormProps {
  onSubmit: (data: FormData) => void;
}

const FarmerForm: React.FC<FarmerFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    productName: '',
    batchId: '',
    farmLocation: '',
    harvestDate: '',
    quantity: '',
    additionalInfo: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div>
      <div className="flex items-center mb-6">
        <Leaf className="h-6 w-6 text-green-500 mr-2" />
        <h2 className="text-xl font-semibold text-gray-800">Farmer Information</h2>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="productName" className="block text-sm font-medium text-gray-700 mb-1">
              Product Name
            </label>
            <input
              type="text"
              id="productName"
              name="productName"
              value={formData.productName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
              placeholder="e.g., Organic Tomatoes"
              required
            />
          </div>
          <div>
            <label htmlFor="batchId" className="block text-sm font-medium text-gray-700 mb-1">
              Batch ID
            </label>
            <input
              type="text"
              id="batchId"
              name="batchId"
              value={formData.batchId}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
              placeholder="e.g., BAT-123456"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="farmLocation" className="block text-sm font-medium text-gray-700 mb-1">
              Farm Location
            </label>
            <input
              type="text"
              id="farmLocation"
              name="farmLocation"
              value={formData.farmLocation}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
              placeholder="e.g., Sunnyvale Farm, CA"
              required
            />
          </div>
          <div>
            <label htmlFor="harvestDate" className="block text-sm font-medium text-gray-700 mb-1">
              Harvest Date
            </label>
            <input
              type="date"
              id="harvestDate"
              name="harvestDate"
              value={formData.harvestDate}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
              required
            />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
            Initial Quantity (kg)
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
            placeholder="e.g., 500"
            min="0"
            step="0.1"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-1">
            Additional Information
          </label>
          <textarea
            id="additionalInfo"
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
            placeholder="Optional: Growing methods, certifications, etc."
            rows={3}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium transition-colors"
        >
          Submit Data
        </button>
      </form>
    </div>
  );
};

export default FarmerForm;