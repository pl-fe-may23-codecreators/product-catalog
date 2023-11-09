import React, { createContext, useContext, useEffect, useState } from 'react';
import { Phone } from '../types/PhoneTypes';
import { useUser } from '@clerk/clerk-react';

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
  const { isSignedIn } = useUser();
  const [favourites, setFavourites] = useState<Phone[]>(() => {
    if (!isSignedIn) {
      return [];
    }

    const savedFavourites = localStorage.getItem('favourites');
    if (savedFavourites) {
      return JSON.parse(savedFavourites);
    }
    return [];
  });

  useEffect(() => {
    if (isSignedIn) {
      const savedFavourites = localStorage.getItem('favourites');
      if (savedFavourites) {
        setFavourites(JSON.parse(savedFavourites));
      }
    }
  }, [isSignedIn]);

  useEffect(() => {
    if (isSignedIn) {
      localStorage.setItem('favourites', JSON.stringify(favourites));
    }
  }, [favourites, isSignedIn]);

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
