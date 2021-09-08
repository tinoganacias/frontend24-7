import React from 'react';
import Nav from './Nav';

import { Typography } from '@material-ui/core';
import logo from './images/app-logos/247FBK-Banner-Anim.gif';

export default function MainContainer() {

  return (
    <>
    <Typography
        variant="h2"
        align="center"
        gutterBottom
    >
        <img src = {logo} id="banner" alt="logo" />
     </Typography>
    <Nav />
    </>
  );
  
}
