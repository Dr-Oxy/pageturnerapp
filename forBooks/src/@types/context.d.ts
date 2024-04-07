import {ReactNode} from 'react';

export interface Book {
  id: number;
  title: string;
  description: string;
  author: string;
}

export type AppContextType = {
  user: object;
  setUser: (user: object) => void;
  allBooks: Book[];
  setAllBooks: (allBooks: Book[]) => void;
};

export interface PropsWithChildren {
  children: ReactNode;
}

export interface TextType {
  text: string;
  style?: string;
}

export interface BookType {
  id: React.Key | null | undefined;
  title: string;
  author: string;
  genre: string;
  cover: string;
}
