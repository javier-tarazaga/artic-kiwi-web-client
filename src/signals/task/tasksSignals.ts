import { signal } from '@preact/signals';
import { Task } from './models';

interface TaskState {
  currentTask: Task | null;
  currentTaskList: Task[];
  isLoading: boolean;
  error: string | null;
}

// Initial state
const initialState: TaskState = {
  currentTask: null,
  currentTaskList: [],
  isLoading: false,
  error: null,
};

// Create signals for each state property
const currentTask = signal<Task | null>(initialState.currentTask);
const currentTaskList = signal<Task[]>(initialState.currentTaskList);
const isLoading = signal<boolean>(initialState.isLoading);
const error = signal<string | null>(initialState.error);

// Actions
const startLoading = () => {
  isLoading.value = true;
  error.value = null;
};

const loadingFailed = (errorMessage: string) => {
  isLoading.value = false;
  error.value = errorMessage;
};

const createTaskSuccess = (newTask: Task) => {
  currentTask.value = newTask;
  currentTaskList.value = [...currentTaskList.value, newTask];
  isLoading.value = false;
  error.value = null;
};

const getTaskSuccess = (task: Task) => {
  currentTask.value = task;
  isLoading.value = false;
  error.value = null;
};

const getTaskListSuccess = (taskList: Task[]) => {
  currentTaskList.value = taskList;
  isLoading.value = false;
  error.value = null;
};

const updateTaskSuccess = (updatedTaskList: Task[]) => {
  currentTaskList.value = updatedTaskList;
  isLoading.value = false;
  error.value = null;
};

// Simulate create task action
const createTask = (title: string) => {
  startLoading();
  // Simulate async call
  setTimeout(() => {
    createTaskSuccess({
      createdAt: new Date().toISOString(),
      id: new Date().toISOString(), // TODO: Use a proper ID generation mechanism
      lastModifiedAt: new Date().toISOString(),
      title,
    });
  }, 1000);
};

// Export signals and actions
export {
  currentTask,
  currentTaskList,
  isLoading,
  error,
  createTask,
  startLoading,
  loadingFailed,
  getTaskSuccess,
  getTaskListSuccess,
  updateTaskSuccess,
};
