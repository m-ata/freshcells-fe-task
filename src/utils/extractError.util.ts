import { GraphQLErrorExtension } from '@interfaces/auth.interface';
import { ApolloError } from '@apollo/client';

export const extractErrorMessage = (error: ApolloError): string => {
  const defaultErrorMessage = 'An error occurred';

  if (error.graphQLErrors.length > 0) {
    const extensions = error.graphQLErrors[0]
      .extensions as GraphQLErrorExtension;
    const messages = extensions?.exception?.data?.data?.[0]?.messages;

    if (messages && messages.length > 0) {
      return messages[0].message;
    }
  }

  return defaultErrorMessage;
};
