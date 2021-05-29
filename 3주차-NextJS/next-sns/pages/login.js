import React from 'react';
import firebase from './firebase';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
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

  return (
  <div>
   
        <Button variant="contained" color="primary" onClick={loginfuntion} justify="center">
        구글 로그인
    </Button>
  
    

    
  </div>
  );
};

export default login;



