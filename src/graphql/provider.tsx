import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
  concat,
} from '@apollo/client';

const httpLink = new HttpLink({ uri: import.meta.env.VITE_GRAPHQL_URI });

const authMiddleware = new ApolloLink((operation, forward) => {
  if (operation.operationName !== 'login') {
    const jwt = localStorage.getItem('jwt');
    operation.setContext({
      headers: {
        authorization: jwt ? `Bearer ${jwt}` : '',
      },
    });
  }
  return forward(operation);
});

const client = new ApolloClient({
  link: concat(authMiddleware, httpLink),
  cache: new InMemoryCache(),
});

type FreshCellsApolloProviderProps = {
  children: React.ReactNode;
};

const FreshCellsApolloProvider: React.FC<FreshCellsApolloProviderProps> = ({
  children,
}) => <ApolloProvider client={client}>{children}</ApolloProvider>;

export default FreshCellsApolloProvider;
