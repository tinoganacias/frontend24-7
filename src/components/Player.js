import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import Grid from '@material-ui/core/Grid';
import { blue } from '@material-ui/core/colors';
import API from '../utils/API';


import logoCowboys from './images/team-logos/logo-cowboys.png';

const player = API.getPlayersByName('Russell%20Wilson');
const name = player.name;

// const stats = [name,position,number,height,weight,college,photo];
const stats = [name];

const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
});
function SimpleDialog(props) {
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;
  const handleClose = () => {
    onClose(selectedValue);
  };
  const handleListItemClick = (value) => {
    onClose(value);
  };
  return (
    <div>
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>

      <DialogTitle id="simple-dialog-title" className="dialogTitle">
        Player Stats
      </DialogTitle>

      <Grid container spacing={3} alignItems="flex-start" gutterBottom>

        <Grid item xs={12} sm={12} md={4} lg={4}>
          <List>
            {stats.map((stat) => (
            <ListItem button onClick={() => handleListItemClick(stat)} key={stat}>
              <ListItemAvatar>
                <Avatar className={classes.avatar}>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={stat} />
            </ListItem>
            ))}
          </List>
        </Grid>

        <Grid item xs={12} sm={12} md={8} lg={8}>
          <img src={logoCowboys} className="cardPhoto" alt="x" alignItems="center" />
        </Grid>

      </Grid>

    </Dialog>
    </div>
  );
}
SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};
export default function SimpleDialogDemo() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(stats[1]);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };
  return (
    <div>
      {/* <Typography variant="subtitle1">Selected: {selectedValue}</Typography> */}
      <br />
      <center>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        View Stats
      </Button>
      </center>
      <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
    </div>
  );
}