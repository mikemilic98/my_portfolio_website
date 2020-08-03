import {data, contactItems} from '../services/data'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import  Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';
import Icon from '@material-ui/core/Icon';
import Box from '@material-ui/core/Box';
//import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';



const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexWrap: "wrap",
    justifyContent: "space-between",
    borderRadius: "3", 
    color: "black"
  },
  paper: {
    minHeight: "65px",
    display: 'flex',
    flexWrap: "wrap",
    justifyContent: "space-evenly"
  },
  media: {
    width: "100%",
    minHeight: 450,
    minWidth: 200,
    justifyContent: "space-around"
  },

  media_one: {
    width: "100%",
    minHeight: 300,
    minWidth: 300,
    justifyContent: "space-around"
  },


  media_two: {
    width: "100%",
    minHeight: 300,
    minWidth: 400,
    justifyContent: "space-around"
  },


  skills: {
    fontVariant: "times new roman",
    fontSize: "large",
    border: "thin",
    borderStyle: "dotted",
    borderRadius: "5px",
    padding: "5px",
    margin: "5px 5px 5px 8px"
  },
  items: {
    margin: "5px 5px 5px 8px",
    padding: "5px"  
  },
  links: {
    color: "black",
    borderBottomStyle: "dotted",
    border: "thin",
  },
});

export default function Home() {
  const {skills, firstName, lunapic, tripic, strum, biking} = data
  const luna_and_me= "images/" + lunapic;
  const triathlon = "images/"  + tripic;
  const guitar ="images/" + strum;
  const cycling = "images/" + biking;
  const classes = useStyles();

  return (
    <Grid container spacing={5} className={classes.root}>
{/* profile pic */}

          <Grid item sm={4} className={classes.media}>
             <Box width="100%" borderColor="error.main" border={1}>
              <CardMedia
                className={classes.media}
                image={luna_and_me}
              />
              </Box>
            </Grid>

{/* main*/}

      <Grid item xs={16} sm={8}>
      <Box borderColor="primary.main" border={1}>
        <Card className={classes.root}>
          {/* Container within the card for flex grid */}
          <Grid container className={classes.root}>
            {/* Main card title and text */}
            <Grid item >
              <CardContent>
                <Typography gutterBottom variant="h3" component="h1" align = 'center'>
                  <br></br>
                  Hi, I'm Mike !
                </Typography>
 
                <Typography variant="body2" gutterBottom  align ='left'>
                  <br></br>
                  <br></br>
                 <Typography variant="h4" component="h5" align ='left'> 
                  About
                 </Typography>
                  <br></br>
                  I am a student at the University of British Columbia entering my last year of Electrical and Computer Engineering. 
                  I am continuing to learn more about web development, algorithms, and devOps through my work and spare time. 
                   I am looking for a career where I am challenged, live a balanced life, 
                   and look forward to Mondays.
                   <br></br>
                   <br></br> 
                   <br></br> 
                   <br></br>
            
            
                </Typography>
              </CardContent>
            </Grid>
          </Grid>
        </Card>
        </Box>
      </Grid>
    
{/* End main card */}


{/* Begin skills card */}
      <Grid item sm={6}>
      <Box borderColor="primary.main" border={1}>
        <Card className={classes.root}>
          <CardContent>
            <Typography  variant="h4" component="h2">
              Technical Skills
            </Typography>
            <CardActions className={classes.paper}>
              {skills.map(skill => <span key={skills.indexOf(skill)} className={classes.skills}>{skill}</span>)}
            </CardActions>
          </CardContent>
        </Card>
        </Box>
      </Grid>
{/* End skills */}

{/* Begin contact items card */}
      <Grid item sm={6}>
      <Box borderColor="primary.main" border={1}>
        <Card className={classes.root}>
          <CardContent>
            <Typography variant="h4" component="h2">
              Find Me On
            </Typography>
            <CardActions className={classes.paper}>
              {contactItems.map(item => <Button
                variant="contained"
                color="default"
                className={classes.items}
                href={item.href}
                key={contactItems.indexOf(item)}
                aria-label={item.text}
              >
                <Icon className={item.icon}/>
              </Button>)}
            </CardActions>
          </CardContent>
        </Card>
        </Box>
      </Grid>
{/* End contact items */}

    
  {/* Hobbies */}
  
  <Grid item xs={12} >
     <Box borderColor="grey.500" border={1}>
        <Card className={classes.root}>
              {/* tripic    */}
      
              <CardContent>
                <Typography align="center" variant="h4" component="h2">
                <Typography align="left" variant="h5" component="h2">
                Some Things I like to do ...
                </Typography>
                <br></br>
                  Triathlon
                  <CardMedia
                    className={classes.media_one}
                    image={triathlon}
                  />
                </Typography>   
              </CardContent>
             
             {/* guitar pic */}
                  <CardContent>
                      <Typography align="center" variant="h4" component="h2">
                        Guitar
                        <CardMedia
                          className={classes.media_two}
                          image={guitar}
                        />
                    </Typography>
                  </CardContent>

             {/* cycling  */}
             <CardContent>
                <Typography align="center" variant="h4" component="h2">
                <br></br>
                  Cycling
                  <CardMedia
                    className={classes.media_one}
                    image={cycling}
                  />
                </Typography>   
              </CardContent>    
        </Card>
        </Box>
      </Grid>



    </Grid> // End container
  );
}