import React, { useState } from 'react';
import { Factory } from 'lucide-react';
import { FormData } from '../../types';

interface ProcessorFormProps {
  onSubmit: (data: FormData) => void;
}

const ProcessorForm: React.FC<ProcessorFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    batchId: '',
    processingDate: '',
    newBatchId: '',
    processType: '',
    qualityControl: '',
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
        <Factory className="h-6 w-6 text-purple-500 mr-2" />
        <h2 className="text-xl font-semibold text-gray-800">Processor Information</h2>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="batchId" className="block text-sm font-medium text-gray-700 mb-1">
              Original Batch ID
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
            <label htmlFor="processingDate" className="block text-sm font-medium text-gray-700 mb-1">
              Processing Date
            </label>
            <input
              type="date"
              id="processingDate"
              name="processingDate"
              value={formData.processingDate}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="newBatchId" className="block text-sm font-medium text-gray-700 mb-1">
              New Batch ID (if applicable)
            </label>
            <input
              type="text"
              id="newBatchId"
              name="newBatchId"
              value={formData.newBatchId}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
              placeholder="e.g., BAT-789012"
            />
          </div>
          <div>
            <label htmlFor="processType" className="block text-sm font-medium text-gray-700 mb-1">
              Process Type
            </label>
            <select
              id="processType"
              name="processType"
              value={formData.processType}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
              required
            >
              <option value="">Select process type</option>
              <option value="washing">Washing</option>
              <option value="sorting">Sorting</option>
              <option value="packaging">Packaging</option>
              <option value="processing">Processing</option>
              <option value="freezing">Freezing</option>
              <option value="drying">Drying</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="qualityControl" className="block text-sm font-medium text-gray-700 mb-1">
            Quality Control Measures
          </label>
          <input
            type="text"
            id="qualityControl"
            name="qualityControl"
            value={formData.qualityControl}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
            placeholder="e.g., Visual inspection, microbial testing"
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
            placeholder="Optional: Processing details, treatments, etc."
            rows={3}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-purple-500 hover:bg-purple-600 text-white py-3 rounded-lg font-medium transition-colors"
        >
          Submit Data
        </button>
      </form>
    </div>
  );
};

export default ProcessorForm;