export interface Task {
    id: string;
    title: string;
    description?: string;
    completed: boolean;
  }
  
  export interface Quote {
    quote: string; 
    author: string;
    category?: string;
  }