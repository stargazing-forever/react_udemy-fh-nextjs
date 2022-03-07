const toggleFavorite = ( id: number ) => {
  console.log('toggleFavorite Llamado')
  let favorites: number[] = JSON.parse(localStorage.getItem('favorites-pokemons') || '[]');

  if( favorites.includes( id ) ) {
    favorites = favorites.filter( favoriteId => favoriteId !== id);
  } else {
    favorites.push(id);
  }
  localStorage.setItem(
    'favorites-pokemons',
    JSON.stringify( favorites )
  );
}

const existInFavorites = ( id: number): boolean => {
  if( typeof window === 'undefined') return false;
  
  const favorites: number[] = JSON.parse(localStorage.getItem('favorites-pokemons') || '[]');
  return favorites.includes(id);
}

const pokemons = (): number[] => {
  const favorites = JSON.parse( localStorage.getItem('favorites-pokemons') || '[]');
  return favorites;
}

//* export
const localFavorites = {
  toggleFavorite,
  existInFavorites,
  pokemons
}

export default localFavorites;