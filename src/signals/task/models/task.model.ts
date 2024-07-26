export interface Task {
  id: string;
  title: string;
  createdAt: string;
  lastModifiedAt: string;
  completed: boolean;
  note?: string;
}
