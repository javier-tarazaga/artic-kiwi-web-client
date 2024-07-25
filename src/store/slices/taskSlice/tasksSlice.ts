import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit'
import { Task } from './models'

interface TaskState {
  currentTask: Task | null
  currentTaskList: Task[]
  isLoading: boolean
  error: string | null
}

const issuesInitialState: TaskState = {
  currentTask: null,
  currentTaskList: [],
  isLoading: false,
  error: null
}

function startLoading(state: TaskState) {
  state.isLoading = true
}

function loadingFailed(state: TaskState, action: PayloadAction<string>) {
  state.isLoading = false
  state.error = action.payload
}

const tasks = createSlice({
  name: 'tasks',
  initialState: issuesInitialState,
  reducers: {
    createTaskStart: startLoading,
    createTaskSuccess(state, { payload }: PayloadAction<Task>) {
      state.currentTask = payload
      state.currentTaskList = [...state.currentTaskList, payload]
      state.isLoading = false
      state.error = null
    },
    createTaskFailure: loadingFailed,
    getTaskStart: startLoading,
    getTaskListStart: startLoading,
    getTaskSuccess(state, { payload }: PayloadAction<Task>) {
      state.currentTask = payload
      state.isLoading = false
      state.error = null
    },
    getTaskListSuccess(state, { payload }: PayloadAction<Task[]>) {
      state.currentTaskList = payload
      state.isLoading = false
      state.error = null
    },
    getTaskFailure: loadingFailed,
    getTaskListFailure: loadingFailed,
    updateTaskStart: startLoading,
    updateTaskSuccess(state, { payload }: PayloadAction<Task[]>) {
      state.currentTaskList = payload
      state.isLoading = false
      state.error = null
    },
  }
})

export const {
  createTaskStart,
  createTaskSuccess,
  createTaskFailure,
  getTaskListStart,
  getTaskListSuccess,
  getTaskListFailure,
  getTaskStart,
  getTaskSuccess,
  getTaskFailure,
} = tasks.actions;


export const createTask = (title: string) => (dispatch: Dispatch) => {
  dispatch(createTaskStart());
  dispatch(createTaskSuccess({
    createdAt: new Date().toISOString(),
    id: new Date().toISOString(), // TODO 
    lastModifiedAt: new Date().toISOString(),
    title
  }));
};

export default tasks.reducer;