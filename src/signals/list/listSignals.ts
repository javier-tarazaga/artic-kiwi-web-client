import { computed, signal } from '@preact/signals';
import { List } from './models';
import { Task } from '@signals/task/models';

interface ListState {
  selectedListId: string | null
  lists: List[]
  isLoading: boolean
  isTaskListLoading: boolean
  error: string | null
}

// Initial state
const initialState: ListState = {
  selectedListId: null,
  lists: [],
  isLoading: false,
  isTaskListLoading: false,
  error: null,
};

// Create signals for each state property
const lists = signal<List[]>(initialState.lists)
const isLoading = signal<boolean>(initialState.isLoading)
const isTaskListLoading = signal<boolean>(initialState.isTaskListLoading)
const error = signal<string | null>(initialState.error)
const selectedListId = signal<string | null>(initialState.selectedListId)
const selectedList = computed(() => lists.value.find((list) => list.id === selectedListId.value))

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
  selectedListId.value = newList.id
  lists.value = [newList, ...lists.value]
  isLoading.value = false
  error.value = null
};

const getListSuccess = (list: List) => {
  selectedListId.value = list.id
  isLoading.value = false
  error.value = null
};

const getListsSuccess = (listsData: List[]) => {
  lists.value = listsData
  isLoading.value = false
  error.value = null

  // For now lets assign the first loaded element as the current task
  selectedListId.value = listsData[0].id
};

const updateListSuccess = (updatedList: List) => {
  selectedListId.value = updatedList.id
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
          title: "Groceries", 
          createdAt: new Date().toISOString(),
          lastModifiedAt: '',
          tasks: [
            {
              createdAt: new Date().toISOString(),
              id: "1",
              lastModifiedAt: new Date().toISOString(),
              title: "tomatoes",
              completed: false
            },
            {
              createdAt: new Date().toISOString(),
              id: "2",
              lastModifiedAt: new Date().toISOString(),
              title: "mango",
              completed: true
            }
          ]
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

const selectList = (listId: string) => {
  const list = lists.value.find((list) => list.id === listId);
  if (list) {
    selectedListId.value = listId;
  } else {
    console.error(`List with id ${listId} not found`);
  }
};

// Export signals and actions
export {
  selectedList,
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
  selectList,
};
