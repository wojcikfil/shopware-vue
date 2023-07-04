import { Currency } from "./Currency";

export interface Currency {
  isoCode: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  translated: { name: string; description: string };
  calculatedPrice: {
    totalPrice: number;
    currency: Currency;
  };
}
export interface Filters {
  search?: string;
  order?: string;
}
