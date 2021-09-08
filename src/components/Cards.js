import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

export default function Cards() {

    const classes = useStyles();

    return (

    <div className={classes.root}>

        {/* <Grid container spacing={3} alignItems="flex-start">

            <Grid item xs={12} sm={6} md={4} lg={3}>
                <Paper>
                <Typography variant="h5" align="center">Kansas City Chiefs</Typography>
                <img src={logo1} className="teamLogo" alt="" />
                </Paper>
            </Grid>

            <Grid item xs={12} sm={6} md={4} lg={3}>
                <Paper>
                <Typography variant="h5" align="center">Seattle Seahawks</Typography>
                <img src={logo2} className="teamLogo" alt="" />
                </Paper>
            </Grid>

            <Grid item xs={12} sm={6} md={4} lg={3}>
                <Paper>
                <Typography variant="h5" align="center">Green Bay Packers</Typography>
                <img src={logo3} className="teamLogo" alt="" />
                </Paper>
            </Grid>

            <Grid item xs={12} sm={6} md={4} lg={3}>
                <Paper>
                <Typography variant="h5" align="center">Tampa Bay Buccaneers</Typography>
                <img src={logo4} className="teamLogo" alt="" />
                </Paper>
            </Grid>

            <Grid item xs={12} sm={6} md={4} lg={3}>
                <Paper>
                <Typography variant="h5" align="center">San Francisco 49ers</Typography>
                <img src={logo5} className="teamLogo" alt="" />
                </Paper>
            </Grid>

            <Grid item xs={12} sm={6} md={4} lg={3}>
                <Paper>
                <Typography variant="h5" align="center">Los Angeles Chargers</Typography>
                <img src={logo6} className="teamLogo" alt="" />
                </Paper>
            </Grid>

            <Grid item xs={12} sm={6} md={4} lg={3}>
                <Paper>
                <Typography variant="h5" align="center">New England Patriots</Typography>
                <img src={logo7} className="teamLogo" alt="" />
                </Paper>
            </Grid>
            
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <Paper>
                <Typography variant="h5" align="center">Miami Dolphins</Typography>
                <img src={logo8} className="teamLogo" alt="" />
                </Paper>
            </Grid>
         
        </Grid> */}
    </div>
  );
}