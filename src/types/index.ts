export interface ProjectCase {
  id: string;
  caseNumber: string;
  title: string;
  slug: string;
  year: string;
  status: string;
  classification: string;
  summary: string;
  problem: string;
  solution: string;
  role: string;
  duration: string;
  technologies: string[];
  features: string[];
  challenges: {
    issue: string;
    diagnosis: string;
    repair: string;
    result: string;
  }[];
}

export interface TimelineEntry {
  year: string;
  title: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  status: string;
}
