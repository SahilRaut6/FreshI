import { ProductData } from '../types';

// Mock function to simulate retrieving data from a blockchain or backend
export const traceProduct = async (batchId: string): Promise<ProductData> => {
  return new Promise((resolve, reject) => {
    // Simulate network delay
    setTimeout(() => {
      // Mock data - in a real app, this would be retrieved from a blockchain or backend
      const mockProducts: Record<string, ProductData> = {
        'BAT-123456': {
          productName: 'Organic Tomatoes',
          batchId: 'BAT-123456',
          lastUpdated: '2025-06-10T14:23:00Z',
          journey: [
            {
              type: 'farm',
              data: [
                { label: 'Harvest Date', value: 'June 1, 2025', icon: 'date' },
                { label: 'Farm Location', value: 'Sunnyvale Organic Farm, CA', icon: 'location' },
                { label: 'Initial Quantity', value: '500 kg', icon: 'info' },
                { label: 'Growing Method', value: 'Organic, no pesticides', icon: 'info' },
              ],
              description: 'Hand-picked at peak ripeness to ensure optimal flavor and nutritional value.',
              verifiedBy: 'John Smith',
              verifiedDate: 'June 1, 2025'
            },
            {
              type: 'transport',
              data: [
                { label: 'Transport Date', value: 'June 2, 2025', icon: 'date' },
                { label: 'From', value: 'Sunnyvale Organic Farm, CA', icon: 'location' },
                { label: 'To', value: 'Central Valley Processing Facility', icon: 'location' },
                { label: 'Method', value: 'Refrigerated Truck', icon: 'info' },
                { label: 'Temperature', value: '4°C', icon: 'info' },
              ],
              description: 'Maintained cold chain during the entire 3-hour journey.',
              verifiedBy: 'TransCool Logistics',
              verifiedDate: 'June 2, 2025'
            },
            {
              type: 'processing',
              data: [
                { label: 'Processing Date', value: 'June 3, 2025', icon: 'date' },
                { label: 'Facility', value: 'Central Valley Processing', icon: 'location' },
                { label: 'Process Type', value: 'Washing, Sorting, Packaging', icon: 'info' },
                { label: 'Quality Control', value: 'Visual inspection, Size grading', icon: 'info' },
              ],
              description: 'Sorted by size and quality, washed with filtered water, and packed in recyclable containers.',
              verifiedBy: 'Quality Control Team',
              verifiedDate: 'June 3, 2025'
            },
            {
              type: 'distribution',
              data: [
                { label: 'Distribution Date', value: 'June 5, 2025', icon: 'date' },
                { label: 'Destination', value: 'Northeast Region Retailers', icon: 'location' },
                { label: 'Storage', value: 'Refrigerated at 4°C', icon: 'info' },
                { label: 'Transit Time', value: '8 hours', icon: 'time' },
              ],
              description: 'Distributed to multiple retail locations with temperature-controlled vehicles.',
              verifiedBy: 'Regional Distribution Center',
              verifiedDate: 'June 5, 2025'
            },
            {
              type: 'retail',
              data: [
                { label: 'Received Date', value: 'June 6, 2025', icon: 'date' },
                { label: 'Store', value: 'Fresh Market Downtown, NY', icon: 'location' },
                { label: 'Display Method', value: 'Refrigerated produce section', icon: 'info' },
                { label: 'Shelf Life', value: '7 days from receipt', icon: 'time' },
              ],
              description: 'Displayed in the premium organic produce section with misting system to maintain freshness.',
              verifiedBy: 'Store Manager',
              verifiedDate: 'June 6, 2025'
            }
          ]
        },
        'BAT-789012': {
          productName: 'Fresh Strawberries',
          batchId: 'BAT-789012',
          lastUpdated: '2025-06-08T09:15:00Z',
          journey: [
            {
              type: 'farm',
              data: [
                { label: 'Harvest Date', value: 'June 4, 2025', icon: 'date' },
                { label: 'Farm Location', value: 'Berry Fields Farm, Oregon', icon: 'location' },
                { label: 'Initial Quantity', value: '300 kg', icon: 'info' },
                { label: 'Growing Method', value: 'Sustainable farming, minimal pesticides', icon: 'info' },
              ],
              description: 'Early morning harvest to ensure optimal sweetness and shelf life.',
              verifiedBy: 'Maria Johnson',
              verifiedDate: 'June 4, 2025'
            },
            {
              type: 'transport',
              data: [
                { label: 'Transport Date', value: 'June 4, 2025', icon: 'date' },
                { label: 'From', value: 'Berry Fields Farm, Oregon', icon: 'location' },
                { label: 'To', value: 'Portland Processing Center', icon: 'location' },
                { label: 'Method', value: 'Refrigerated Truck', icon: 'info' },
                { label: 'Temperature', value: '2°C', icon: 'info' },
              ],
              description: 'Expedited transport to minimize time between harvest and processing.',
              verifiedBy: 'CoolChain Transport',
              verifiedDate: 'June 4, 2025'
            },
            {
              type: 'processing',
              data: [
                { label: 'Processing Date', value: 'June 5, 2025', icon: 'date' },
                { label: 'Facility', value: 'Portland Processing Center', icon: 'location' },
                { label: 'Process Type', value: 'Inspection, Cooling, Packaging', icon: 'info' },
                { label: 'Quality Control', value: 'Visual and taste sampling', icon: 'info' },
              ],
              description: 'Flash-cooled to remove field heat and packaged in ventilated containers to maintain freshness.',
              verifiedBy: 'Quality Assurance Team',
              verifiedDate: 'June 5, 2025'
            },
            {
              type: 'distribution',
              data: [
                { label: 'Distribution Date', value: 'June 6, 2025', icon: 'date' },
                { label: 'Destination', value: 'West Coast Retailers', icon: 'location' },
                { label: 'Storage', value: 'Refrigerated at 2°C', icon: 'info' },
                { label: 'Transit Time', value: '6 hours', icon: 'time' },
              ],
              description: 'Priority distribution to ensure minimal time in transit.',
              verifiedBy: 'West Region Distribution',
              verifiedDate: 'June 6, 2025'
            },
            {
              type: 'retail',
              data: [
                { label: 'Received Date', value: 'June 7, 2025', icon: 'date' },
                { label: 'Store', value: 'Sunshine Grocery, Seattle', icon: 'location' },
                { label: 'Display Method', value: 'Chilled display with protective cover', icon: 'info' },
                { label: 'Shelf Life', value: '4 days from receipt', icon: 'time' },
              ],
              description: 'Displayed in premium berry section with temperature monitoring.',
              verifiedBy: 'Produce Department Manager',
              verifiedDate: 'June 7, 2025'
            }
          ]
        },
        'BAT-345678': {
          productName: 'Organic Avocados',
          batchId: 'BAT-345678',
          lastUpdated: '2025-06-09T16:45:00Z',
          journey: [
            {
              type: 'farm',
              data: [
                { label: 'Harvest Date', value: 'June 2, 2025', icon: 'date' },
                { label: 'Farm Location', value: 'Green Valley Farms, Mexico', icon: 'location' },
                { label: 'Initial Quantity', value: '800 kg', icon: 'info' },
                { label: 'Growing Method', value: 'Certified organic', icon: 'info' },
              ],
              description: 'Harvested at optimal ripeness with careful handling to prevent bruising.',
              verifiedBy: 'Carlos Rodriguez',
              verifiedDate: 'June 2, 2025'
            },
            {
              type: 'transport',
              data: [
                { label: 'Transport Date', value: 'June 3, 2025', icon: 'date' },
                { label: 'From', value: 'Green Valley Farms, Mexico', icon: 'location' },
                { label: 'To', value: 'Border Processing Facility, TX', icon: 'location' },
                { label: 'Method', value: 'Temperature-controlled truck', icon: 'info' },
                { label: 'Temperature', value: '7°C', icon: 'info' },
              ],
              description: 'Transported with ethylene control to prevent premature ripening.',
              verifiedBy: 'Global Fresh Transport',
              verifiedDate: 'June 3, 2025'
            },
            {
              type: 'processing',
              data: [
                { label: 'Processing Date', value: 'June 4, 2025', icon: 'date' },
                { label: 'Facility', value: 'Border Processing Facility, TX', icon: 'location' },
                { label: 'Process Type', value: 'Inspection, Sorting, Packaging', icon: 'info' },
                { label: 'Quality Control', value: 'Firmness testing, visual inspection', icon: 'info' },
              ],
              description: 'Sorted by ripeness level and packaged to prevent damage during distribution.',
              verifiedBy: 'USDA Inspector',
              verifiedDate: 'June 4, 2025'
            },
            {
              type: 'distribution',
              data: [
                { label: 'Distribution Date', value: 'June 5, 2025', icon: 'date' },
                { label: 'Destination', value: 'Multiple US Regions', icon: 'location' },
                { label: 'Storage', value: 'Controlled atmosphere', icon: 'info' },
                { label: 'Transit Time', value: '2-3 days depending on destination', icon: 'time' },
              ],
              description: 'Distributed with ripeness management protocols to ensure optimal condition at retail.',
              verifiedBy: 'National Distribution Services',
              verifiedDate: 'June 5, 2025'
            },
            {
              type: 'retail',
              data: [
                { label: 'Received Date', value: 'June 8, 2025', icon: 'date' },
                { label: 'Store', value: 'Wellness Market, Chicago', icon: 'location' },
                { label: 'Display Method', value: 'Room temperature display', icon: 'info' },
                { label: 'Shelf Life', value: '3-5 days depending on ripeness', icon: 'time' },
              ],
              description: 'Displayed by ripeness level, with rotation system to ensure quality.',
              verifiedBy: 'Produce Specialist',
              verifiedDate: 'June 8, 2025'
            }
          ]
        }
      };

      if (mockProducts[batchId]) {
        resolve(mockProducts[batchId]);
      } else {
        reject(new Error('Product not found'));
      }
    }, 1500);
  });
};