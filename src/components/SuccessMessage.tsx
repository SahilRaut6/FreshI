import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Copy, ArrowRight } from 'lucide-react';

interface SuccessMessageProps {
  batchId: string;
  onReset: () => void;
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({ batchId, onReset }) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(batchId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-8">
          <div className="flex flex-col items-center text-center">
            <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Data Successfully Submitted
            </h2>
            <p className="text-gray-600 mb-6">
              Thank you for contributing to the transparent food supply chain!
            </p>

            <div className="w-full bg-gray-50 rounded-lg p-4 mb-6">
              <p className="text-sm text-gray-500 mb-2">Batch ID:</p>
              <div className="flex items-center justify-between bg-white border border-gray-200 rounded-lg px-4 py-2">
                <span className="font-medium text-gray-800">{batchId}</span>
                <button 
                  onClick={handleCopy}
                  className="text-gray-500 hover:text-gray-700 focus:outline-none"
                  aria-label="Copy batch ID"
                >
                  {copied ? (
                    <span className="text-green-600 text-sm">Copied!</span>
                  ) : (
                    <Copy className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <button
                onClick={onReset}
                className="flex-1 bg-white hover:bg-gray-50 text-gray-800 border border-gray-300 font-medium py-3 px-4 rounded-lg transition-colors"
              >
                Submit Another Entry
              </button>
              <Link
                to={`/trace?batchId=${batchId}`}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center"
              >
                Trace This Product
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessMessage;