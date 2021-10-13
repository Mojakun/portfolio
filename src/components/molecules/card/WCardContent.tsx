import React from 'react';
import { CardContent } from '@mui/material';
import Typography from '@mui/material/Typography';

type Props = {
    content :string
}

const WCardContent = (props:Props) => {
 
  return (
    <CardContent>
      <Typography >
        {props.content}
      </Typography>
    </CardContent>
  );
}

export default WCardContent
