import { signal } from '@preact/signals';
import { List } from './models';
import { Task } from '@signals/task/models';

interface ListState {
  currentList: List | null
  lists: List[]
  isLoading: boolean
  isTaskListLoading: boolean
  error: string | null
}

// Initial state
const initialState: ListState = {
  currentList: null,
  lists: [],
  isLoading: false,
  isTaskListLoading: false,
  error: null,
};

// Create signals for each state property
const currentList = signal<List | null>(initialState.currentList)
const lists = signal<List[]>(initialState.lists)
const isLoading = signal<boolean>(initialState.isLoading)
const isTaskListLoading = signal<boolean>(initialState.isTaskListLoading)
const error = signal<string | null>(initialState.error)

// Actions
const startLoading = () => {
  isLoading.value = true
  error.value = null
};

const startTasListLoading = () => {
  isTaskListLoading.value = true
  error.value = null
}

const loadingFailed = (errorMessage: string) => {
  isLoading.value = false
  error.value = errorMessage
};

const createListSuccess = (newList: List) => {
  currentList.value = newList;
  lists.value = [...lists.value, newList]
  isLoading.value = false
  error.value = null
};

const getListSuccess = (list: List) => {
  currentList.value = list
  isLoading.value = false
  error.value = null
};

const getListsSuccess = (listsData: List[]) => {
  lists.value = listsData
  isLoading.value = false
  error.value = null

  // For now lets assign the first loaded element as the current task
  currentList.value = listsData[0]

  console.log("patata")
  console.log(lists.value)
};

const updateListSuccess = (updatedList: List) => {
  currentList.value = updatedList
  isLoading.value = false
  error.value = null
};

const addTaskToListSuccess = (listId: string, newTask: Task) => {
  const listIndex = lists.value.findIndex((list) => list.id === listId);
  if (listIndex !== -1) {
    lists.value[listIndex].tasks = [...lists.value[listIndex].tasks, newTask];
  }

  isLoading.value = false;
  isTaskListLoading.value = false;
  error.value = null;
};

const fetchLists = () => {
  startLoading();
  // Simulate an async call to fetch lists
  setTimeout(() => {
    getListsSuccess(
      [
        {
          id: '1', 
          title: "Work", 
          createdAt: new Date().toISOString(),
          lastModifiedAt: '',
          tasks: []
        },
        {
          id: '2', 
          title: "Personal", 
          createdAt: new Date().toISOString(),
          lastModifiedAt: '',
          tasks: []
        },
        {
          id: '3', 
          title: "House Renovations", 
          createdAt: new Date().toISOString(),
          lastModifiedAt: '',
          tasks: []
        },
      ]
    )
  }, 1000);
};

// Simulate create list action
const createList = (title: string) => {
  startLoading();
  // Simulate async call
  setTimeout(() => {
    createListSuccess({
      createdAt: new Date().toISOString(),
      id: new Date().toISOString(), // TODO: Use a proper ID generation mechanism
      lastModifiedAt: new Date().toISOString(),
      title,
      tasks: []
    });
  }, 1000);
};

// Simulate create task action
const addTaskToList = (listId: string, title: string) => {
  startTasListLoading();
  
  const list = lists.value.find((list) => list.id === listId);
  if (!list) {
    throw Error("List not found")
  }
  
  // Simulate async call
  setTimeout(() => {
    addTaskToListSuccess(listId, {
      createdAt: new Date().toISOString(),
      id: new Date().toISOString(), // TODO: Use a proper ID generation mechanism
      lastModifiedAt: new Date().toISOString(),
      title,
      completed: false
    });
  }, 500);
};

// Export signals and actions
export {
  currentList,
  lists,
  isLoading,
  isTaskListLoading,
  error,
  fetchLists,
  createList,
  addTaskToList,
  startLoading,
  loadingFailed,
  getListSuccess,
  getListsSuccess,
  updateListSuccess,
};
