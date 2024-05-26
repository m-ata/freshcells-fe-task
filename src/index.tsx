import ReactDOM from 'react-dom/client';
import AppRouter from './router/index.tsx';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '@redux/store.ts';
import { AuthProvider } from './context/AuthContext/index.tsx';
import FreshCellsApolloProvider from './graphql/provider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <FreshCellsApolloProvider>
    <ReduxProvider store={store}>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </ReduxProvider>
  </FreshCellsApolloProvider>,
);
