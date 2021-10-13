import { createContext } from 'react';
import { useQuery } from '@apollo/client';
import { GET_USER_BY_ORIGINAL_ID } from 'queries/queries';
import { GetUserByOriginalIdQuery } from 'types/generated/graphql';
import { useRouter } from 'next/router';

export const UserContext = createContext({});

type Props = {
  children: React.ReactNode;
};
export const UserProvider = (props: Props) => {
  const router = useRouter();
  const { original_id } = router.query;
  const { data, error, loading } = useQuery<GetUserByOriginalIdQuery>(GET_USER_BY_ORIGINAL_ID, {
    variables: { original_id: original_id },
  });
  
  
  const { children } = props;
  const userInfo = data?.d_users[0];
  

  return (
    <UserContext.Provider value={{ name: userInfo?.name, content: userInfo?.content, loading }}>
      {children}
    </UserContext.Provider>
  );
};
