export interface Question {
  id: number;
  text: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface FactMythItem {
  id: number;
  statement: string;
  isFact: boolean;
  explanation: string;
}

export interface Session {
  id: number;
  title: string;
  description: string;
  content: string; // HTML or Markdown string
  imageUrl?: string;
  videoUrl?: string; // YouTube or Aparat embed URL
  visualAnalysisPrompt?: string;
  quiz: Question[];
  factOrMyth?: FactMythItem[];
}