import { signal } from '@preact/signals';
import { AuthTokens } from './models';

interface AuthState {
  authTokens: AuthTokens | null;
  isLoading: boolean;
  error: string | null;
}

// Initial state
const initialState: AuthState = {
  authTokens: null,
  isLoading: false,
  error: null,
};

// Create signals for each state property
const authTokens = signal<AuthTokens | null>(initialState.authTokens);
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

const loginSuccess = (tokens: AuthTokens) => {
  authTokens.value = tokens;
  isLoading.value = false;
  error.value = null;
};

// Simulate login action
const loginWithEmail = (email: string, password: string) => {
  startLoading();
  // Simulate async call
  setTimeout(() => {
    // On success
    loginSuccess({
      refreshToken: '1234',
      token: '1234',
    });
    // On failure
    // loadingFailed('Invalid credentials');
  }, 1000);
};

// Export signals and actions
export {
  authTokens,
  isLoading,
  error,
  loginWithEmail,
};
