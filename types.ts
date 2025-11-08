
export interface Project {
  id: number;
  title: string;
  category: 'Websites' | 'Mobile Apps' | 'Graphics' | 'Videos';
  imageUrl: string;
  description: string;
}
