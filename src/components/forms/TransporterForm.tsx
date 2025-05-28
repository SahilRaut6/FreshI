import React, { useState } from 'react';
import { Truck } from 'lucide-react';
import { FormData } from '../../types';

interface TransporterFormProps {
  onSubmit: (data: FormData) => void;
}

const TransporterForm: React.FC<TransporterFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    batchId: '',
    departureLocation: '',
    arrivalLocation: '',
    transportDate: '',
    transportMethod: '',
    temperature: '',
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
        <Truck className="h-6 w-6 text-blue-500 mr-2" />
        <h2 className="text-xl font-semibold text-gray-800">Transporter Information</h2>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="departureLocation" className="block text-sm font-medium text-gray-700 mb-1">
              Departure Location
            </label>
            <input
              type="text"
              id="departureLocation"
              name="departureLocation"
              value={formData.departureLocation}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
              placeholder="e.g., Sunnyvale Farm, CA"
              required
            />
          </div>
          <div>
            <label htmlFor="arrivalLocation" className="block text-sm font-medium text-gray-700 mb-1">
              Arrival Location
            </label>
            <input
              type="text"
              id="arrivalLocation"
              name="arrivalLocation"
              value={formData.arrivalLocation}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
              placeholder="e.g., Central Processing Facility"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="transportDate" className="block text-sm font-medium text-gray-700 mb-1">
              Transport Date
            </label>
            <input
              type="date"
              id="transportDate"
              name="transportDate"
              value={formData.transportDate}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
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
          <label htmlFor="temperature" className="block text-sm font-medium text-gray-700 mb-1">
            Transport Temperature (°C)
          </label>
          <input
            type="number"
            id="temperature"
            name="temperature"
            value={formData.temperature}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
            placeholder="e.g., 4"
            step="0.1"
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
            placeholder="Optional: Transport conditions, delays, etc."
            rows={3}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium transition-colors"
        >
          Submit Data
        </button>
      </form>
    </div>
  );
};

export default TransporterForm;