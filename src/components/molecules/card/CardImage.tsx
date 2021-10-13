import React from 'react';
import CardMedia from '@mui/material/CardMedia';


type Props = {
    src :string
}

const CardImage = (props:Props) => {
 
  return (
    <CardMedia
      component='img'
      height='194'
      image={props.src}
      alt='Paella dish'
    />
  );
}

export default CardImage 
