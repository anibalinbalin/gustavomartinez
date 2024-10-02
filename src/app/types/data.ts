export interface ImageData {
  id: number;
  title: string;
  description: string;
  url: string;
  alt: string;
  type: string[];
  body: string;
  notes: string;
  storeLink?: string;
}

export type DataArray = ImageData[];
