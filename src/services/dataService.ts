import { StakeholderType, FormData } from '../types';

// Mock data storage - in a real app, this would interact with a blockchain or backend
const storedData: Record<string, any[]> = {
  'BAT-123456': [],
  'BAT-789012': [],
  'BAT-345678': [],
};

// Mock function to simulate sending data to a blockchain or backend
export const submitData = async (stakeholderType: StakeholderType, data: FormData): Promise<{ success: boolean, batchId: string }> => {
  return new Promise((resolve) => {
    // Simulate network delay
    setTimeout(() => {
      const batchId = data.batchId || `BAT-${Math.floor(Math.random() * 1000000).toString().padStart(6, '0')}`;
      
      // If batch doesn't exist in our mock storage, create it
      if (!storedData[batchId]) {
        storedData[batchId] = [];
      }
      
      // Add data to mock storage
      storedData[batchId].push({
        type: stakeholderType,
        timestamp: new Date().toISOString(),
        data: { ...data },
      });
      
      console.log('Data stored:', storedData);
      
      resolve({ 
        success: true,
        batchId,
      });
    }, 1000);
  });
};