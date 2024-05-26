import { GET_USER_QUERY } from '@/graphql/user/queries';
import { GetUserQueryVariables, IUser } from '@/interfaces/user.interface';
import { useQuery } from '@apollo/client';

export const useUser = (userId: string) => {
  const { data, loading, error } = useQuery<
    { user: IUser },
    GetUserQueryVariables
  >(GET_USER_QUERY, {
    variables: { id: userId },
  });
  return { user: data?.user, loading, error };
};
