import { configureStore, Action } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import tasksReducer from './slices/taskSlice';
import listReducer from './slices/listSlice';
import authReducer from './slices/authSlice';

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    lists: listReducer,
    auth: authReducer,
  },
})

// TODO 
// if (process.env.NODE_ENV === 'development' && module.hot) {
//   module.hot.accept('./rootReducer', () => {
//     const newRootReducer = require('./rootReducer').default
//     store.replaceReducer(newRootReducer)
//   })
// }

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>

export default store