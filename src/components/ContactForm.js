import React from 'react';
import { Grid, Card, CardContent, makeStyles, TextField, Typography, Button} from '@material-ui/core';

const useStyles = makeStyles({
  field: {
      marginRight: 20,
  }
});

function ContactForm() {

    const classes = useStyles();

    return (
    <>
        <Card style={{ maxWidth:500, margin:"0 auto" }}>
            <CardContent>
                <form>
                <Grid container spacing={1}>

                    <Grid xs={12} sm={6} item>
                        <TextField
                            className = {classes.field}
                            label="User Name"
                            placeholder="Enter your username."
                            variant="outlined"
                            required
                            fullWidth
                        />
                    </Grid>

                    <Grid xs={12} sm={6} item>
                        <TextField
                            className = {classes.field}
                            label="Email"
                            type="email"
                            placeholder="Enter your email."
                            variant="outlined"
                            required
                            fullWidth
                        />
                    </Grid>

                    <Grid xs={12} sm={12} item>
                        <TextField
                            className = {classes.field}
                            label="Message"
                            placeholder="What's on your mind?"
                            variant="outlined"
                            required
                            multiline
                            rows={4}
                            fullWidth
                        />
                    </Grid>

                    <Grid xs={12} sm={12} item>
                        <Button type="submit" variant="contained" color="primary">Submit</Button>
                    </Grid>

                </Grid>

                <Typography variant="body2">*All fields are required.</Typography>
                </form>

            </CardContent>
        </Card>
    </>
  );
}

export default ContactForm;
