export type StakeholderType = 'farmer' | 'transporter' | 'processor' | 'distributor' | 'retailer';

export interface FormData {
  [key: string]: string;
}

export interface ProductData {
  productName: string;
  batchId: string;
  lastUpdated: string;
  journey: JourneyStage[];
}

export interface JourneyStage {
  type: string;
  data: {
    label: string;
    value: string;
    icon: 'date' | 'location' | 'info' | 'time';
  }[];
  description?: string;
  verifiedBy?: string;
  verifiedDate?: string;
}