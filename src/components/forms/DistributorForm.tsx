import React, { useState } from 'react';
import { Package } from 'lucide-react';
import { FormData } from '../../types';

interface DistributorFormProps {
  onSubmit: (data: FormData) => void;
}

const DistributorForm: React.FC<DistributorFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    batchId: '',
    distributionDate: '',
    destination: '',
    storageConditions: '',
    transportMethod: '',
    additionalInfo: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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
        <Package className="h-6 w-6 text-orange-500 mr-2" />
        <h2 className="text-xl font-semibold text-gray-800">Distributor Information</h2>
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
            <label htmlFor="distributionDate" className="block text-sm font-medium text-gray-700 mb-1">
              Distribution Date
            </label>
            <input
              type="date"
              id="distributionDate"
              name="distributionDate"
              value={formData.distributionDate}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-1">
              Destination
            </label>
            <input
              type="text"
              id="destination"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
              placeholder="e.g., Northeast Region Retailers"
              required
            />
          </div>
          <div>
            <label htmlFor="transportMethod" className="block text-sm font-medium text-gray-700 mb-1">
              Transport Method
            </label>
            <select
              id="transportMethod"
              name="transportMethod"
              value={formData.transportMethod}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
              required
            >
              <option value="">Select transport method</option>
              <option value="refrigerated truck">Refrigerated Truck</option>
              <option value="regular truck">Regular Truck</option>
              <option value="air freight">Air Freight</option>
              <option value="ship">Ship</option>
              <option value="rail">Rail</option>
              <option value="other">Other</option>
            </select>
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
            placeholder="e.g., Refrigerated at 4°C"
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
            placeholder="Optional: Distribution details, special handling, etc."
            rows={3}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-medium transition-colors"
        >
          Submit Data
        </button>
      </form>
    </div>
  );
};

export default DistributorForm;