import { Link, Spacer, Text, useTheme } from '@nextui-org/react'
import Image from 'next/image';
import React from 'react'
import NextLink from 'next/link';
export const Navbar = () => {
  const {theme} = useTheme();
  return (
    <div style={{
      display: 'flex',
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'start',
      padding: '0px 20px',
      backgroundColor: theme?.colors.gray900.value,
    }}>
      <Image 
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg"
        alt='icono de la app'
        width={30}
        height={30}
      />
      <NextLink href="/" passHref >
        <Link>
          <Text color='white' h2>P</Text>
          <Text color='white' h3>okémon</Text>
        </Link>
      </NextLink>
      <Spacer css={{flex: 1}} />

      <NextLink href="/favorites" passHref>
        <Link css={{marginRight: '0px'}}> 
          <Text color='white'> Favoritos </Text>
        </Link>
      </NextLink>

    </div>
  )
}
