import React, {useState, createContext} from 'react';

import {Book, AppContextType, PropsWithChildren} from '../@types/context';

export const AppContext = createContext<AppContextType | null>(null);

export const AppContextProvider = ({children}: PropsWithChildren) => {
  const [user, setUser] = useState<object>({});
  const [allBooks, setAllBooks] = useState<Book[]>([]);

  const value = {
    user,
    setUser,
    allBooks,
    setAllBooks,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
