import { createContext, PropsWithChildren, useContext } from 'react';

import { useAppDispatch, useAppSelector } from '@/hooks/useStore';
import { authActions, selectSession } from '@/store/auth/slice';

const AuthContext = createContext<{
  signIn: () => void;
  signOut: () => void;
  session?: boolean | null;
}>({
  signIn: () => null,
  signOut: () => null,
  session: null,
});

export function useSession() {
  const value = useContext(AuthContext);
  if (process.env.NODE_ENV !== 'production') {
    if (!value) {
      throw new Error('useSession must be wrapped in a <SessionProvider />');
    }
  }

  return value;
}

const SessionProvider = ({ children }: PropsWithChildren) => {
  const dispatch = useAppDispatch();
  const session = useAppSelector(selectSession);

  return (
    <AuthContext.Provider
      value={{
        signIn: () => dispatch(authActions.setSession(true)),
        signOut: () => dispatch(authActions.setSession(null)),
        session,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default SessionProvider;
