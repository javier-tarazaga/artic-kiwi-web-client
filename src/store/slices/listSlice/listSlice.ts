import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit'
import { List } from './models'

interface ListState {
  currentList: List | null
  lists: List[]
  isLoading: boolean
  error: string | null
}

const issuesInitialState: ListState = {
  currentList: null,
  lists: [],
  isLoading: false,
  error: null
}

function startLoading(state: ListState) {
  state.isLoading = true
}

function loadingFailed(state: ListState, action: PayloadAction<string>) {
  state.isLoading = false
  state.error = action.payload
}

const list = createSlice({
  name: 'lists',
  initialState: issuesInitialState,
  reducers: {
    createListStart: startLoading,
    createListSuccess(state, { payload }: PayloadAction<List>) {
      state.currentList = payload
      state.lists = [...state.lists, payload]
      state.isLoading = false
      state.error = null
    },
    createListFailure: loadingFailed,
    getListStart: startLoading,
    getTaskSuccess(state, { payload }: PayloadAction<List>) {
      state.currentList = payload
      state.isLoading = false
      state.error = null
    },
    getTaskFailure: loadingFailed,
    getListsStart: startLoading,
    getListsStartSuccess(state, { payload }: PayloadAction<List[]>) {
      state.lists = payload
      state.isLoading = false
      state.error = null
    },
    getListsFailure: loadingFailed,
    updateListStart: startLoading,
    updateListSuccess(state, { payload }: PayloadAction<List>) {
      state.currentList = payload
      state.isLoading = false
      state.error = null
    },
  }
})

export const {
  createListStart,
  createListSuccess,
  createListFailure,
  getListStart,
  updateListStart,
} = list.actions;


export const createList = (title: string) => (dispatch: Dispatch) => {
  dispatch(createListStart());
  dispatch(createListSuccess({
    createdAt: new Date().toISOString(),
    id: new Date().toISOString(), // TODO 
    lastModifiedAt: new Date().toISOString(),
    title
  }));
};

export default list.reducer;