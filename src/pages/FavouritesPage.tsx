import { PhonesList } from '../components/CardList/PhonesList';
import { useFavourites } from '../context/FavouritesContext';

const FavouritesPage = () => {
  const { favourites } = useFavourites();

  return (
    <>
      {favourites.length ? <PhonesList phones={favourites} /> : <h1>No favouerites</h1>}
    </>
  );
};

export default FavouritesPage;