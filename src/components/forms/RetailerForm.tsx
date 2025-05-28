import React, { useState } from 'react';
import { Store } from 'lucide-react';
import { FormData } from '../../types';

interface RetailerFormProps {
  onSubmit: (data: FormData) => void;
}

const RetailerForm: React.FC<RetailerFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    batchId: '',
    receivedDate: '',
    retailLocation: '',
    shelfLife: '',
    storageConditions: '',
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
        <Store className="h-6 w-6 text-red-500 mr-2" />
        <h2 className="text-xl font-semibold text-gray-800">Retailer Information</h2>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
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
          <div>
            <label htmlFor="receivedDate" className="block text-sm font-medium text-gray-700 mb-1">
              Received Date
            </label>
            <input
              type="date"
              id="receivedDate"
              name="receivedDate"
              value={formData.receivedDate}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="retailLocation" className="block text-sm font-medium text-gray-700 mb-1">
              Retail Location
            </label>
            <input
              type="text"
              id="retailLocation"
              name="retailLocation"
              value={formData.retailLocation}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
              placeholder="e.g., Fresh Market Downtown, NY"
              required
            />
          </div>
          <div>
            <label htmlFor="shelfLife" className="block text-sm font-medium text-gray-700 mb-1">
              Shelf Life (days)
            </label>
            <input
              type="number"
              id="shelfLife"
              name="shelfLife"
              value={formData.shelfLife}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
              placeholder="e.g., 7"
              min="1"
            />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="storageConditions" className="block text-sm font-medium text-gray-700 mb-1">
            Storage Conditions
          </label>
          <input
            type="text"
            id="storageConditions"
            name="storageConditions"
            value={formData.storageConditions}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
            placeholder="e.g., Refrigerated display at 4°C"
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
            placeholder="Optional: Display method, consumer information, etc."
            rows={3}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-medium transition-colors"
        >
          Submit Data
        </button>
      </form>
    </div>
  );
};

export default RetailerForm;