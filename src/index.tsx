import ReactDOM from 'react-dom/client';
import AppRouter from './router/index.tsx';
import { Provider } from 'react-redux';
import { store } from '@redux/store.ts';
import { AuthProvider } from './context/AuthContext/index.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  </Provider>,
);
