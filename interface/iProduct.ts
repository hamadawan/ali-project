export interface iProduct {
  id: number;
  name: string;
  description: string;
  manufacturer: any;
  images: string[]
  reviews: []
  overall_rating: number
  formatted_variants: {
    name: string;
    values: string[]
  }[]
}
