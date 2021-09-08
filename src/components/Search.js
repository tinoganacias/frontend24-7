import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, Typography } from '@material-ui/core';
import Footer from './Footer';
import API from '../utils/API';

// NFC East
import logoCowboys from './images/team-logos/logo-cowboys.png';
import logoGiants from './images/team-logos/logo-giants.gif';
import logoEagles from './images/team-logos/logo-eagles.png';
import logoWft from './images/team-logos/logo-wft.png';

// NFC North
import logoBears from './images/team-logos/logo-bears.png';
import logoLions from './images/team-logos/logo-lions.png';
import logoPackers from './images/team-logos/logo-packers.png';
import logoVikings from './images/team-logos/logo-vikings.png';

// NFC South
import logoFalcons from './images/team-logos/logo-falcons.png';
import logoPanthers from './images/team-logos/logo-panthers.png';
import logoSaints from './images/team-logos/logo-saints.png';
import logoBuccaneers from './images/team-logos/logo-buccaneers.png';

// NFC West
import logoCardinals from './images/team-logos/logo-cardinals.png';
import logoRams from './images/team-logos/logo-rams.png';
import logo49ers from './images/team-logos/logo-49ers.png';
import logoSeahawks from './images/team-logos/logo-seahawks.png';

// AFC East
import logoBills from './images/team-logos/logo-bills.png';
import logoDolphins from './images/team-logos/logo-dolphins.png';
import logoPatriots from './images/team-logos/logo-patriots.png';
import logoJets from './images/team-logos/logo-jets.png';

// AFC North
import logoRavens from './images/team-logos/logo-ravens.png';
import logoBengals from './images/team-logos/logo-bengals.png';
import logoBrowns from './images/team-logos/logo-browns.png';
import logoSteelers from './images/team-logos/logo-steelers.png';

// AFC South
import logoTexans from './images/team-logos/logo-texans.png';
import logoColts from './images/team-logos/logo-colts.png';
import logoJaguars from './images/team-logos/logo-jaguars.png';
import logoTitans from './images/team-logos/logo-titans.png';

// AFC West
import logoBroncos from './images/team-logos/logo-broncos.png';
import logoChiefs from './images/team-logos/logo-chiefs.png';
import logoRaiders from './images/team-logos/logo-raiders.png';
import logoChargers from './images/team-logos/logo-chargers.png';

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

export default function Search() {

  const teams = [

    // NFC East
    ['Dallas Cowboys',logoCowboys],
    ['New York Giants',logoGiants],  
    ['Philadelphia Eagles',logoEagles],
    ['Washington Football Team',logoWft],

    // NFC North
    ['Chicago Bears',logoBears],
    ['Detroit Lions',logoLions],
    ['Green Bay Packers',logoPackers],
    ['Minnesota Vikings',logoVikings],

    // NFC South
    ['Atlanta Falcons',logoFalcons],
    ['Carolina Panthers',logoPanthers],
    ['New Orleans Saints',logoSaints],
    ['Tampa Bay Buccaneers',logoBuccaneers],

    // NFC West
    ['Arizona Cardinals',logoCardinals],
    ['Los Angeles Rams',logoRams],
    ['San Francisco 49ers',logo49ers],
    ['Seattle Seahawks',logoSeahawks],

    // AFC East
    ['Buffalo Bills',logoBills],
    ['Miami Dolphins',logoDolphins],
    ['New England Patriots',logoPatriots],
    ['New York Jets',logoJets],

    // AFC North
    ['Baltimore Ravens',logoRavens],
    ['Cincinnati Bengals',logoBengals],
    ['Cleveland Browns',logoBrowns],
    ['Pittsburgh Steelers',logoSteelers],

    // AFC South
    ['Houston Texans',logoTexans],
    ['Indianapolis Colts',logoColts],
    ['Jacksonville Jaguars',logoJaguars],
    ['Tennessee Titans',logoTitans],

    // AFC West
    ['Denver Broncos',logoBroncos],
    ['Kansas City Chiefs',logoChiefs],
    ['Las Vegas Raiders',logoRaiders],
    ['Los Angeles Chargers',logoChargers]
  ];
 
  const revertTeams = () => {

    let chooseTeamEl = document.getElementById('chooseTeamDiv');
    let choosePlayerEl = document.getElementById('choosePlayerDiv');

    let teamDispEl = document.getElementById('teamDisplayDiv');
    let allTeamsEl = document.getElementById('allTeamsDiv');
    let backtoTeamBtn = document.getElementById('backToTeam');
    let backtoTeamsBtn = document.getElementById('backToTeams');

    console.log('reverting...');

    chooseTeamEl.style.display='block';
    choosePlayerEl.style.display='none';
    teamDispEl.style.display='none';
    backtoTeamBtn.style.display='none';
    backtoTeamsBtn.style.display='none';
    allTeamsEl.style.display='block';
  }

  const revertTeam = () => {

    let chooseTeamEl = document.getElementById('chooseTeamDiv');
    let choosePlayerEl = document.getElementById('choosePlayerDiv');

    let teamDispEl = document.getElementById('teamDisplayDiv');
    let playerDispEl = document.getElementById('playerDisplayDiv');

    let allTeamsEl = document.getElementById('allTeamsDiv');
    let backtoTeamBtn = document.getElementById('backToTeam');
    let backtoTeamsBtn = document.getElementById('backToTeams');

    console.log('reverting...');

    chooseTeamEl.style.display='none';
    choosePlayerEl.style.display='block';
    teamDispEl.style.display='block';
    backtoTeamBtn.style.display='none';
    backtoTeamsBtn.style.display='block';
    allTeamsEl.style.display='none';
    playerDispEl.style.display='none';

  }

  const displayPlayer = (incoming,logo) => {

    let chooseTeamEl = document.getElementById('chooseTeamDiv');
    let choosePlayerEl = document.getElementById('choosePlayerDiv');

    let teamDispEl = document.getElementById('teamDisplayDiv');
    let allTeamsEl = document.getElementById('allTeamsDiv');
    let playerDispEl = document.getElementById('playerDisplayDiv');
    let backtoTeamBtn = document.getElementById('backToTeam');
    let backtoTeamsBtn = document.getElementById('backToTeams');

    chooseTeamEl.style.display='none';
    choosePlayerEl.style.display='none';
    teamDispEl.style.display='none';
    backtoTeamBtn.style.display='block';
    backtoTeamsBtn.style.display='none';
    allTeamsEl.style.display='none';
    playerDispEl.style.display='block';
   
    API.getPlayersByName(incoming).then((response) => {

      // console.log(response.data);
      let playerInfo = response.data;

      let buildCard = '';

      buildCard+='<div style="margin-bottom:50px;"><div id="playerCard">';

        buildCard+='<div id="playerCardHeader">';
          buildCard+='<img src="'+logo+'" id="playerCardLogo" alt="" />';
          buildCard+='<h1>#'+playerInfo[0].number+'&nbsp;'+playerInfo[0].playerName+'<br />'
          buildCard+=playerInfo[0].team+'</h1>'
        buildCard+='</div>';

        buildCard+='<div id="playerCardBody">';
          buildCard+='<div>';
            buildCard+='<img src="'+playerInfo[0].photo+'" id="playerCardPhoto" />';
          buildCard+='</div>';

        buildCard+='<div id="playerCardStats">';
          buildCard+='<h1>Position: '+playerInfo[0].position+'</h1>'
          buildCard+='<h1>Height: '+playerInfo[0].height+'</h1>'
          buildCard+='<h1>Weight: '+playerInfo[0].weight+'</h1>'
          buildCard+='<h1>College: '+playerInfo[0].college+'</h1>'
        buildCard+='</div>';   

      buildCard+='</div></div>';   

      // console.log(buildCard);

      playerDispEl.innerHTML=buildCard;

 });
};
  
    const chooseTeam = (value,logo) => {

    let chooseTeamEl = document.getElementById('chooseTeamDiv');
    let choosePlayerEl = document.getElementById('choosePlayerDiv');

    let teamDispEl = document.getElementById('teamDisplayDiv');
    let allTeamsEl = document.getElementById('allTeamsDiv');
    let backtoTeamBtn = document.getElementById('backToTeam');
    let backtoTeamsBtn = document.getElementById('backToTeams');

    teamDispEl.style.display='block';

    console.log('\n\n\nTeam '+value);

    API.getPlayersByTeam(value).then((response) => {

      // console.log(response.data);
      let teamRoster = response.data;

      // console.log(teamRoster[0].playerName);

      let buildRoster= '';

      buildRoster+='<div id="container">';
      buildRoster+='<div id="thumbLogoDiv"><h1>'+value+' Team Roster</h1><br /><img src="'+logo+'" id="thumbLogoPic" alt="" /></div>';

      buildRoster+='<div id="thumbnailGallery">';   

          for (let i = 0; i < teamRoster.length; i ++) {

            buildRoster+='<div class="playerThumbs">';
              buildRoster+='<p class="thumbText">'+teamRoster[i].playerName+'</p>';

              //console.log(teamRoster[i].photo);

              if (teamRoster[i].photo === null) buildRoster+='<p class="thumbText" style="color:darkgrey">[no photo available]</p>';
              else buildRoster+='<img src="'+teamRoster[i].photo+'" class="thumbnail" id="'+teamRoster[i].playerName+'" />';
            buildRoster+='</div>';
          }    

      buildRoster+='</div></div>';

      teamDispEl.innerHTML=buildRoster;

      document.getElementById('thumbnailGallery')
      .addEventListener('click', event => {
        if (event.target.className === 'thumbnail') {
          console.log(event.target.id);
          displayPlayer(event.target.id,logo);
        }
      });

      chooseTeamEl.style.display='none';
      choosePlayerEl.style.display='block';
      backtoTeamsBtn.style.display='block';
      backtoTeamBtn.style.display='none';
      allTeamsEl.style.display='none';
    });
}

  const classes = useStyles();

  var teamsList = teams.map(function(team, index) {
    return (
      <Grid item xs={12} sm={4} md={3} lg={3} key={index}>

          <Paper>

            {/* <TeamModal alignItems="center" name={team[0]} logo={team[1]} key={index}></TeamModal> */}

            <div align="center">
              <Typography variant="h5" align="center">{team[0]}</Typography>
              <img src={team[1]} className="teamLogo" id={team[0]} alt="" onClick={() => chooseTeam(team[0],team[1])} />
            </div>
          </Paper>

        </Grid>
    );
  });
  
  return (
    <div className={classes.root}>

      <br />
      <div id="chooseTeamDiv"><Typography variant="h3">Choose a Team!</Typography></div>
      <div id="choosePlayerDiv"><Typography variant="h3">Choose a Player!</Typography></div>
      <center><div><button id="backToTeams" onClick={() => revertTeams()}>back to all teams</button></div></center>
      <center><div><button id="backToTeam" onClick={() => revertTeam()}>back to team</button></div></center>
      <br />
      
      <div id="allTeamsDiv">
        <Grid container spacing={1} alignItems="flex-start" gutterBottom>
          { teamsList }
        </Grid>
      </div>

      <Grid container spacing={1} alignItems="flex-start" gutterBottom>
        <div id="teamDisplayDiv"></div>      
      </Grid>

      <Grid container spacing={1} alignItems="flex-start" gutterBottom>
        <div id="playerDisplayDiv"></div>      
      </Grid>

      <Footer />
    </div>
  );
}
        