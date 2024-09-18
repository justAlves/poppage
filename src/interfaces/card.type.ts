export interface Card {
  userName: string;
  name: string;
  image: File | null;
  title: string;
  description: string;
  email: string;
  instagram?: string;
}