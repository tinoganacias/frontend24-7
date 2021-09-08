import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, Avatar, List, ListItem, ListItemAvatar, ListItemText, DialogTitle, Dialog } from '@material-ui/core';
// import PersonIcon from '@material-ui/icons/Person';
import { blue } from '@material-ui/core/colors';
// import Player from './Player';

const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
});

function SimpleDialog(props) {

  console.log('yea you get props over here: '+props.name);

  const classes = useStyles();
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  console.log(props);

  return (

    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title" className="dialogTitle">{props.name} Team Roster</DialogTitle>
      <List>

          <ListItem button onClick={() => handleListItemClick(props.name)} key={props}>
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                {/* <PersonIcon /> */}
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={props.name} />
          </ListItem>

      </List>
      {/* <PlayerModal></PlayerModal> */}
    </Dialog>
  );
}

// const players = ['player 1','player 2','player 3','player 4','player 5','player 6','player 7','player 8'];

// const useStyles = makeStyles({
//   avatar: {
//     backgroundColor: blue[100],
//     color: blue[600],
//   },
// });

// function SimpleDialog(props) {
//   const classes = useStyles();
//   const { onClose, selectedValue, open } = props;

//   const handleClose = () => {
//     onClose(selectedValue);
//   };

//   const handleListItemClick = (value) => {
//     onClose(value);
//   };

//   return (
//     <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
//       <DialogTitle id="simple-dialog-title" className="dialogTitle">Team Roster</DialogTitle>
//       <List>
//         {players.map((player) => (
//           <ListItem button onClick={() => handleListItemClick(player)} key={player}>
//             <ListItemAvatar>
//               <Avatar className={classes.avatar}>
//                 <PersonIcon />
//               </Avatar>
//             </ListItemAvatar>
//             <ListItemText primary={player} />
//           </ListItem>
//         ))}
//       </List>
//       <PlayerModal></PlayerModal>
//     </Dialog>
//   );
// }

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState([]);

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

      <center>
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
            <Typography variant="h5" align="center">hello</Typography>
            {/* <img src={team[1]} className="teamLogo" alt="" /> */}
        </Button>
        </center>

      <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />

    </div>
  );
}
