import React from 'react';
import Cards from './Cards';
import Footer from './Footer';
import Typography from '@material-ui/core/Typography';

export default function Home() {
  return (
    <>

    <Typography variant="h3">Welcome to 24/7 Football for Kids!</Typography>

    <Typography variant="h5" align="center">🏈 <i>NFL Player Stats, Made Easy!</i> 🏈</Typography>

    <Cards />

    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    <Footer />
    </>
  );
}