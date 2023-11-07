export interface Phone {
  id?: string;
  category?: string;
  phoneId: string;
  itemId?: string;
  name: string;
  fullPrice?: number;
  price: number;
  screen?: string;
  capacity: string;
  color?: string;
  ram?: string;
  year?: number;
  image: string;
}

type PhoneImage = string;

type PhoneDescription = {
  title: string;
  text: string[];
};

export interface PhoneForProductPage {
  id: string;
  phoneId: string,
  namespaceId: string;
  name: string;
  capacityAvailable: string[];
  capacity: string;
  priceRegular: number;
  priceDiscount: number;
  colorsAvailable: string[];
  color: string;
  images: PhoneImage[];
  description: PhoneDescription[];
  screen: string;
  resolution: string;
  processor: string;
  ram: string;
  camera: string;
  zoom: string;
  cell: string[];
}
