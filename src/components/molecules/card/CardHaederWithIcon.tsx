import * as React from 'react';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';

//atoms
import WAvatar from '@/components/atoms/avatar/WAvatar';


type Props = {
  src: string;
  title: string;
  subTitle?: string;
};
const CardHaederWithIcon = (props: Props) => {
  return (
    <CardHeader
      avatar={<WAvatar src={props.src} />}
      // action={
      //   <IconButton aria-label='settings'>
      //     <MoreVertIcon />
      //   </IconButton>
      // }
      title={props.title}
      subheader={props.subTitle}
    />
  );
};

export default CardHaederWithIcon;
