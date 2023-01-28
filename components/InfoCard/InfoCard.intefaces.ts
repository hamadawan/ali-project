export interface InfoCardProps {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  category: string;
  manufacturer: string;
  rating: number;
  url: string;
  images?: string[];
  onClick?: (id: number) => void;
}
