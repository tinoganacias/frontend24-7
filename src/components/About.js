import React from 'react';
import Footer from './Footer';
import { Card, CardContent, Typography } from '@material-ui/core';

export default function About() {

  return (
    <>

    <br />

    <Card style={{ maxWidth:600, margin:"0 auto" }}>

      <CardContent>

        <Typography variant="h3">NFL Player Stats,<br />Made Easy!</Typography>

        <Typography variant="h5" align="center"><i>Some kids love football. Some kids love stats. Some kids love both.</i></Typography>

        <Typography variant="h5">From which college did your favorite quarterback graduate? What team has the tallest punter? Who is the heaviest running back? If you want to know these answers and keep track of your favorite players, <strong>24/7 Football for Kids</strong> is just for you!</Typography>
        
        <Typography variant="h5">We make it easy to <strong>search for a player</strong> on any of the 32 NFL team rosters so you can <strong>view quick and easy stats</strong>, then <strong>save them to your profile</strong> so you can view them later.</Typography>

      </CardContent>
      
    </Card>
    <Footer />
    </>
    );
}
