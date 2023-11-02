import React, { createContext, useContext, useEffect, useState } from 'react';
import { Phone } from '../types/Phone';

type FavouritesContextType = {
  favourites: Phone[];
  addToFavourites: (phone: Phone) => void;
  removeFromFavourites: (phone: Phone) => void;
};

const FavouritesContext = createContext<FavouritesContextType | undefined>(
  undefined,
);

export const useFavourites = () => {
  const context = useContext(FavouritesContext);
  if (!context) {
    throw new Error('There is no FavouritesProvider!');
  }
  return context;
};

type FavouritesProviderProps = {
  children: React.ReactNode;
};

export const FavouritesProvider: React.FC<FavouritesProviderProps> = ({
  children,
}) => {
  const [favourites, setFavourites] = useState<Phone[]>(() => {
    const savedFavourites = localStorage.getItem('favourites');
    if (savedFavourites) {
      return JSON.parse(savedFavourites);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(favourites));
  }, [favourites]);

  const addToFavourites = (phone: Phone) => {
    setFavourites((prevFavourites) => {
      if (!prevFavourites.some((item) => item.id === phone.id)) {
        return [...prevFavourites, phone];
      }
      return prevFavourites;
    });
  };

  const removeFromFavourites = (phone: Phone) => {
    setFavourites((prevFavourites) =>
      prevFavourites.filter((item) => item.id !== phone.id),
    );
  };

  return (
    <FavouritesContext.Provider
      value={{ favourites, addToFavourites, removeFromFavourites }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};