import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit'
import { AuthTokens } from './models'

interface AuthState {
  authTokens: AuthTokens | null
  isLoading: boolean
  error: string | null
}

const issuesInitialState: AuthState = {
  authTokens: null,
  isLoading: false,
  error: null
}

function startLoading(state: AuthState) {
  state.isLoading = true
}

function loadingFailed(state: AuthState, action: PayloadAction<string>) {
  state.isLoading = false
  state.error = action.payload
}

const auth = createSlice({
  name: 'auth',
  initialState: issuesInitialState,
  reducers: {
    loginStart: startLoading,
    loginSuccess(state, { payload }: PayloadAction<AuthTokens>) {
      state.authTokens = payload
      state.isLoading = false
      state.error = null
    },
    loginFailure: loadingFailed,
  }
})

export const {
  loginStart,
  loginSuccess,
  loginFailure,
} = auth.actions;


export const loginWithEmail = (email: string, password: string) => (dispatch: Dispatch) => {
  dispatch(loginStart());
  dispatch(loginSuccess({
    refreshToken: '1234',
    token: '1234'
  }));
};

export default auth.reducer;