import { Card, Grid } from '@nextui-org/react'
import { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import { Layout } from '../../components/layouts'
import { FavoritePokemons } from '../../components/pokemon'
import { NoFavorites } from '../../components/ui'
import { localFavorites } from '../../utils'

const FavoritesPage:NextPage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons());
  }, []);
  return (
    <Layout title='Pokemons - Favoritos'>
      {
        favoritePokemons.length === 0 
          ? (<NoFavorites />)
          : (<FavoritePokemons favoritePokemons={favoritePokemons} />)
      }
      
    </Layout>
  )
}

export default FavoritesPage
