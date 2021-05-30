import React from 'react';
import firebase from '../firestores/firebase';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core';
import { palette } from '@material-ui/system';
import { CssBaseline, Box, Container } from "@material-ui/core";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    center: {
        marginTop: theme.spacing(3),
        display: 'flex',
        justifyContent: 'center'
    },
    headers: {
      background: "#FF0000"
    },
    pricing: {
      display: "flex",
      justifyContent: "center",
      alignItems: "baseline",
      marginBottom: "16px"
    },
    descriptions: {
      margin: 0,
      padding: 0,
    
    }
}));


const login = () => {
  const loginfuntion=() => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then(function (result){
      console.log('result.credential.accessToken',result.credential.accessToken);
      console.log('result.user',result.user);
      // myStore.use = {
      //   displayName: result.user.displayName,
      //   photoURL:result.user.photoURL,
      //   email:result.user.email,
      //   uid:result.user.uid
      // }
    })
    .catch(error =>{
      alert('login error:' +error.message);
      console.log(error);
    });
  
  };
  
  const classes = useStyles();
  return (
    
  <div >
   
      <Box clone p={10}>
        <Container maxWidth="sm" className ={classes.center}>
    <Card>
      <CardHeader
        title="MySns"
        titleTypographyProps={{ align: "center" }}
        className={classes.headers}
      />
      <CardContent>
        <div className={classes.pricing}>
          <Typography variant="h6" color="textPrimary" align="center">
           환영 합니다! 로그인을 해주세요
          </Typography>
        </div>
        <ul className={classes.descriptions}>
          {<Container maxWidth="sm"  className={classes.center}>
        <Button variant="contained"  size="small" color="primary" onClick={loginfuntion} >
        <Avatar src="images/google.png" className={classes.avatar} />
         <Typography component='p' variant='h6' >
          Sign in with Google
        </Typography>
        </Button>
        </Container>}
        </ul>
      </CardContent>
      </Card>
      </Container>
      </Box>
     
    
  </div>
  );
};

export default login;



