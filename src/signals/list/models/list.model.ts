import { Task } from '@signals/task/models';

export interface List {
  id: string;
  title: string;
  createdAt: string;
  lastModifiedAt: string;
  tasks: Task[];
}
